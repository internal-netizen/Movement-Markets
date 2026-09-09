/**
 * Movement Markets keycap — a pressable WebGL key used as the closing CTA.
 *
 * Adapted from the standalone "Keycap — WebGL hero" sketch: the geometry,
 * lighting and post chain are the original ones, restyled to the Movement
 * Markets palette and reworked to live inside a container instead of taking
 * over the window. three.js is pinned to r128 because the sketch uses the
 * pre-colour-management renderer API (outputEncoding / sRGBEncoding).
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

// The renderer outputs Linear and a gamma pass closes the chain, so material
// colours are read as LINEAR. Brand hexes are sRGB — feeding them in raw makes
// gamma lift the dark channels, which bleaches the lime toward pale sage.
const srgb = (hex) => new THREE.Color(hex).convertSRGBToLinear();

const BRAND = {
  accent: 0xb9ff68, // --accent green used across the site
  // The cap runs a hotter acid than the CSS accent: lit plastic desaturates,
  // so it lands on brand once the lights hit it.
  heroCap: 0xc9f01e,
  emissive: 0x8ad13f,
  ink: 0x090b0a, // the CTA panel background, so the canvas blends into it
  darkKey: 0x090b08,
  boneKey: 0xf0f2ec,
  accentCss: '198,239,31',
  inkCss: '#0d100e',
};

const COPY = {
  front: ['Trade the', 'Move'],
  side: 'EXECUTION / <30MS',
};

// The caps ring the hero rather than sitting on a grid. `deg` is measured from
// the camera-facing axis, counter-clockwise; 0 deg is deliberately left empty so
// nothing crosses the hero's front legend.
const RING = [
  { deg: 45, word: 'move', ink: 'acid' },
  { deg: 90, word: 'fast', tone: 'white' },
  { deg: 135 },
  { deg: 180, word: 'precise', ink: 'acid' },
  { deg: 225 },
  { deg: 270, word: 'human', ink: 'acid' },
  { deg: 315, word: 'ahead', tone: 'white' },
];
// A looser outer ring that carries the pile out to the frame edges.
const OUTER = [67.5, 112.5, 157.5, 202.5, 247.5, 292.5];
const RING_R = 2.4;
const OUTER_R = 4.2;

const SND_DOWN = { gain: 0.55, tick: 2000, tail: 0.05, body: 175, bodyGain: 0.55 };
const SND_UP = { gain: 0.28, tick: 3300, tail: 0.025, body: 330, bodyGain: 0.18 };

const SIZE = 1.7;
const PITCH = 1.94;
const BEVEL = 0.09;
const PRESS_DEPTH = 0.36;
const DIMS_STD = { h: 1.16, topScale: 0.75 };
const DIMS_HERO = { h: 1.6, topScale: 0.7 };

/* ---------------- sound ---------------- */
function createClicker() {
  const AC = window.AudioContext || window.webkitAudioContext;
  let ctx = null;
  let noise = null;

  function context() {
    if (!AC) return null;
    if (!ctx) {
      ctx = new AC();
      const frames = Math.floor(ctx.sampleRate * 0.4);
      noise = ctx.createBuffer(1, frames, ctx.sampleRate);
      const data = noise.getChannelData(0);
      for (let i = 0; i < frames; i += 1) data[i] = Math.random() * 2 - 1;
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function play(o) {
    const c = context();
    if (!c) return;
    const t = c.currentTime;
    const out = c.createGain();
    out.gain.value = o.gain;
    out.connect(c.destination);

    const source = c.createBufferSource();
    source.buffer = noise;
    const band = c.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.value = o.tick;
    band.Q.value = 1.1;
    const tickGain = c.createGain();
    tickGain.gain.setValueAtTime(0.0001, t);
    tickGain.gain.exponentialRampToValueAtTime(1, t + 0.002);
    tickGain.gain.exponentialRampToValueAtTime(0.0001, t + o.tail);
    source.connect(band).connect(tickGain).connect(out);
    source.start(t);
    source.stop(t + 0.2);

    const osc = c.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(o.body, t);
    osc.frequency.exponentialRampToValueAtTime(o.body * 0.55, t + 0.06);
    const bodyGain = c.createGain();
    bodyGain.gain.setValueAtTime(0.0001, t);
    bodyGain.gain.exponentialRampToValueAtTime(o.bodyGain, t + 0.004);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
    osc.connect(bodyGain).connect(out);
    osc.start(t);
    osc.stop(t + 0.12);
  }

  return {
    play,
    close() {
      if (ctx) ctx.close();
      ctx = null;
    },
  };
}

/* ---------------- textures ---------------- */
function tex(w, h, draw) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  draw(canvas.getContext('2d'), w, h);
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  texture.encoding = THREE.sRGBEncoding;
  return texture;
}

function pixelText(str, color) {
  const small = document.createElement('canvas');
  let ctx = small.getContext('2d');
  ctx.font = '9px monospace';
  const w = Math.ceil(ctx.measureText(str).width) + 2;
  small.width = w;
  small.height = 13;
  ctx = small.getContext('2d');
  ctx.font = '9px monospace';
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 2;
  ctx.fillText(str, 1, 10);
  ctx.fillText(str, 1, 10);

  const scale = 12;
  const cw = 1024;
  const ch = 256;
  const texture = tex(cw, ch, (c) => {
    c.imageSmoothingEnabled = false;
    c.drawImage(small, (cw - w * scale) / 2, (ch - 13 * scale) / 2, w * scale, 13 * scale);
  });
  texture.userData = { ar: (ch / cw) * 1.9 };
  return texture;
}

// The Movement Markets mark: two opposing arcs inside the key's top face.
function logoTexture() {
  return tex(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(w * 0.5, h * 0.5);
    ctx.strokeStyle = BRAND.inkCss;
    ctx.lineWidth = 30;
    ctx.lineCap = 'round';
    // Two opposing crescents, at the same angles the CSS mark uses.
    [-24, 156].forEach((deg) => {
      ctx.save();
      ctx.rotate((deg * Math.PI) / 180);
      ctx.beginPath();
      ctx.ellipse(0, 0, 112, 44, 0, Math.PI * 0.16, Math.PI * 0.84);
      ctx.stroke();
      ctx.restore();
    });
    ctx.restore();
  });
}

function frontTexture() {
  return tex(512, 280, (ctx, w) => {
    ctx.clearRect(0, 0, w, 280);
    ctx.fillStyle = BRAND.inkCss;
    ctx.font = "800 92px ui-sans-serif, system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif";
    ctx.textAlign = 'center';
    ctx.save();
    ctx.translate(w / 2, 0);
    ctx.rotate(-0.045);
    ctx.fillText(COPY.front[0], 0, 120);
    ctx.fillText(COPY.front[1], 0, 222);
    ctx.restore();
  });
}

function barcodeTexture() {
  return tex(512, 128, (ctx, w) => {
    ctx.clearRect(0, 0, w, 128);
    ctx.fillStyle = 'rgba(13,16,14,.8)';
    let x = 40;
    let seed = 7;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    while (x < w - 40) {
      const bw = 2 + rand() * 7;
      if (rand() > 0.35) ctx.fillRect(x, 40, bw, 44);
      x += bw + 2 + rand() * 5;
    }
    ctx.font = '600 14px monospace';
    ctx.fillText(COPY.side, 40, 106);
  });
}

/* ---------------- geometry ---------------- */
function roundedRect(w, r) {
  const shape = new THREE.Shape();
  const x = -w / 2;
  const y = -w / 2;
  shape.moveTo(x + r, y);
  shape.lineTo(x + w - r, y);
  shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + w - r);
  shape.quadraticCurveTo(x + w, y + w, x + w - r, y + w);
  shape.lineTo(x + r, y + w);
  shape.quadraticCurveTo(x, y + w, x, y + w - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);
  return shape;
}

// Smooth normals only across faces that meet below `deg`, so the bevel stays
// soft while the key's edges stay crisp.
function creaseNormals(geometry, deg) {
  const geo = geometry.index ? geometry.toNonIndexed() : geometry;
  const pos = geo.attributes.position;
  const count = pos.count;
  const faceNormals = [];
  const vertexMap = {};
  const T = 1e-4;
  const keyOf = (i) =>
    `${Math.round(pos.getX(i) / T)}_${Math.round(pos.getY(i) / T)}_${Math.round(pos.getZ(i) / T)}`;

  const va = new THREE.Vector3();
  const vb = new THREE.Vector3();
  const vc = new THREE.Vector3();
  const e1 = new THREE.Vector3();
  const e2 = new THREE.Vector3();

  for (let t = 0; t < count; t += 3) {
    va.fromBufferAttribute(pos, t);
    vb.fromBufferAttribute(pos, t + 1);
    vc.fromBufferAttribute(pos, t + 2);
    e1.subVectors(vb, va);
    e2.subVectors(vc, va);
    faceNormals.push(new THREE.Vector3().crossVectors(e1, e2).normalize());
    for (let k = 0; k < 3; k += 1) {
      const key = keyOf(t + k);
      (vertexMap[key] = vertexMap[key] || []).push(t / 3);
    }
  }

  const cosA = Math.cos((deg * Math.PI) / 180);
  const out = new Float32Array(count * 3);
  const sum = new THREE.Vector3();
  for (let i = 0; i < count; i += 1) {
    const own = faceNormals[Math.floor(i / 3)];
    const neighbours = vertexMap[keyOf(i)];
    sum.set(0, 0, 0);
    neighbours.forEach((index) => {
      const n = faceNormals[index];
      if (n.dot(own) > cosA) sum.add(n);
    });
    sum.normalize();
    out[i * 3] = sum.x;
    out[i * 3 + 1] = sum.y;
    out[i * 3 + 2] = sum.z;
  }
  geo.setAttribute('normal', new THREE.BufferAttribute(out, 3));
  return geo;
}

function keycapGeometry(bottom, height, topScale) {
  let geo = new THREE.ExtrudeGeometry(roundedRect(bottom, 0.18), {
    depth: height,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: BEVEL,
    bevelSize: BEVEL,
    bevelSegments: 6,
  });
  const pos = geo.attributes.position;
  const lo = -BEVEL;
  const hi = height + BEVEL;
  for (let i = 0; i < pos.count; i += 1) {
    const t = THREE.MathUtils.clamp((pos.getZ(i) - lo) / (hi - lo), 0, 1);
    const k = THREE.MathUtils.lerp(1, topScale, t ** 0.9);
    pos.setX(i, pos.getX(i) * k);
    pos.setY(i, pos.getY(i) * k);
  }
  geo = creaseNormals(geo, 40);
  geo.rotateX(-Math.PI / 2);
  return geo;
}

function labelMaterial(map) {
  return new THREE.MeshBasicMaterial({
    map,
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -4,
  });
}

function wallLabel(map, dims, side, wScale, yLift) {
  const topHalf = (SIZE * dims.topScale) / 2;
  const botHalf = SIZE / 2 + BEVEL;
  const lean = Math.atan2(botHalf - topHalf, dims.h);
  const mid = (topHalf + botHalf) / 2;
  const ar = map.image.height / map.image.width;
  const w = SIZE * (wScale || 0.78);
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, w * ar), labelMaterial(map));
  mesh.rotation.order = 'YXZ';
  mesh.position.y = dims.h * 0.5 + (yLift || 0);
  const off = 0.045;
  if (side === 'front') {
    mesh.rotation.x = -lean;
    mesh.position.z = mid + Math.cos(lean) * off;
    mesh.position.y += Math.sin(lean) * off;
  }
  if (side === 'right') {
    mesh.rotation.y = Math.PI / 2;
    mesh.rotation.x = -lean;
    mesh.position.x = mid + Math.cos(lean) * off;
    mesh.position.y += Math.sin(lean) * off;
  }
  return mesh;
}

function topLabel(map, dims, wScale, spin) {
  const ar = (map.userData && map.userData.ar) || map.image.height / map.image.width;
  const w = SIZE * dims.topScale * (wScale || 0.8);
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, w * ar), labelMaterial(map));
  mesh.rotation.order = 'YXZ';
  mesh.rotation.x = -Math.PI / 2;
  mesh.rotation.z = spin || 0;
  mesh.scale.y = 1.45;
  mesh.position.y = dims.h + BEVEL + 0.012;
  mesh.renderOrder = 2;
  return mesh;
}

export function createKeycapScene(container, { onActivate } = {}) {
  const width = container.clientWidth || 1;
  const height = container.clientHeight || 1;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.LinearEncoding; // the gamma pass closes the chain
  renderer.toneMapping = THREE.NoToneMapping;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BRAND.ink);
  scene.fog = new THREE.FogExp2(BRAND.ink, 0.06);

  const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 60);
  const BASE_CAM = new THREE.Vector3(0.4, 5.6, 6.2);
  // Pull back on narrow viewports so the whole cluster still fits.
  // Portrait stage: horizontal FOV is the tight axis, so scale distance by it.
  const fitScale = () => Math.min(1.5, Math.max(0.9, 1.14 / (camera.aspect || 1)));

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 60),
    new THREE.MeshStandardMaterial({ color: 0x030403, roughness: 0.97 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  scene.add(new THREE.AmbientLight(0x0b0e0a, 0.26));

  const spot = new THREE.SpotLight(0xf6faf0, 1.55, 26, 1.0, 1.0, 1.9);
  spot.position.set(-3.0, 9.0, 4.5);
  spot.castShadow = true;
  spot.shadow.mapSize.set(2048, 2048);
  spot.shadow.bias = -0.0004;
  spot.shadow.radius = 5;
  scene.add(spot);
  scene.add(spot.target);

  const glowLight = new THREE.PointLight(BRAND.accent, 1.45, 6.5, 1.7);
  glowLight.position.set(0, 2.1, 0);
  scene.add(glowLight);

  const rim = new THREE.DirectionalLight(0x1c241a, 0.4);
  rim.position.set(-4, 3, -5);
  scene.add(rim);

  const halo = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: tex(256, 256, (ctx, w, h) => {
        const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
        g.addColorStop(0, `rgba(${BRAND.accentCss},.30)`);
        g.addColorStop(0.4, `rgba(${BRAND.accentCss},.10)`);
        g.addColorStop(1, `rgba(${BRAND.accentCss},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
    }),
  );
  halo.scale.setScalar(5.2);
  halo.position.set(0, 0.5, 0);
  scene.add(halo);

  // Studio environment: overhead softbox, front strip and an accent kick.
  // This is what the plastic reflects.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x030303);
  const panel = (w, h, hex, i, x, y, z, rx, ry) => {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(i) }),
    );
    mesh.position.set(x, y, z);
    mesh.rotation.x = rx || 0;
    mesh.rotation.y = ry || 0;
    envScene.add(mesh);
  };
  panel(7, 7, 0xf2f6ec, 1.15, 0, 7, 0, Math.PI / 2, 0);
  panel(4, 2.4, 0xe8eee2, 0.8, -5, 2.5, 3, 0, Math.PI / 3);
  panel(2.5, 1.6, BRAND.accent, 2.0, 4.5, 1.6, -2, 0, -Math.PI / 2.2);
  scene.environment = pmrem.fromScene(envScene, 0.04).texture;
  pmrem.dispose();
  envScene.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) o.material.dispose();
  });

  const stdGeo = keycapGeometry(SIZE, DIMS_STD.h, DIMS_STD.topScale);
  const heroGeo = keycapGeometry(SIZE, DIMS_HERO.h, DIMS_HERO.topScale);

  // Bake a soft falloff into the hero key: darker toward the back-left.
  (function bakeGradient(geo, h) {
    const pos = geo.attributes.position;
    const col = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i += 1) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const up = THREE.MathUtils.clamp((y / h - 0.45) / 0.55, 0, 1);
      const d = THREE.MathUtils.clamp(0.5 + (-z * 0.5 - x * 0.32) / SIZE, 0, 1);
      const k = 1 - 0.22 * up * d * d;
      col[i * 3] = k;
      col[i * 3 + 1] = k;
      col[i * 3 + 2] = k * 0.97;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  })(heroGeo, DIMS_HERO.h + BEVEL);

  function makeKey(opts) {
    const group = new THREE.Group();
    const material = opts.hero
      ? new THREE.MeshPhysicalMaterial({
          color: opts.color,
          roughness: 0.38,
          metalness: 0,
          clearcoat: 0.6,
          clearcoatRoughness: 0.32,
          envMapIntensity: 0.3,
          vertexColors: true,
          emissive: srgb(BRAND.emissive),
          emissiveIntensity: 0.24,
        })
      : new THREE.MeshPhysicalMaterial({
          color: opts.color,
          roughness: opts.rough,
          metalness: 0,
          clearcoat: opts.bone ? 0.45 : 0.7,
          clearcoatRoughness: opts.bone ? 0.3 : 0.25,
          envMapIntensity: opts.bone ? 0.26 : 0.32,
        });
    const mesh = new THREE.Mesh(opts.hero ? heroGeo : stdGeo, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    (opts.labels || []).forEach((label) => group.add(label));
    group.position.set(opts.x || 0, opts.y || 0, opts.z || 0);
    group.rotation.order = 'YXZ';
    group.rotation.y = opts.rotY || 0;
    group.rotation.x = opts.tiltX || 0;
    group.rotation.z = opts.tiltZ || 0;
    group.userData.baseY = opts.y || 0;
    return group;
  }

  const cluster = new THREE.Group();
  // Yaw now lives on each cap, so ring angles can be reasoned about directly.
  scene.add(cluster);

  const CAP_YAW = -0.58; // the 3/4 view the caps present to camera

  const hero = makeKey({
    hero: true,
    color: srgb(BRAND.heroCap),
    y: 0.14,
    rotY: CAP_YAW,
    labels: [
      topLabel(logoTexture(), DIMS_HERO, 0.98, 0.52),
      wallLabel(frontTexture(), DIMS_HERO, 'front', 0.88, -0.03),
      wallLabel(barcodeTexture(), DIMS_HERO, 'right', 0.76, 0.06),
    ],
  });
  cluster.add(hero);
  spot.target = hero;

  const GREEN_TX = '#b0f000';
  const DARK_TX = '#22251f';

  // Deterministic per-cap jitter, so the pile is stable between reloads.
  const wobble = (deg, salt) => {
    const v = Math.sin((deg + salt) * 12.9898) * 43758.5453;
    return v - Math.floor(v) - 0.5; // -0.5 .. 0.5
  };

  const place = (deg, radius, opts) => {
    const a = (deg * Math.PI) / 180;
    const isWhite = opts.tone === 'white';
    // Caps lean outward, away from the hero — that reads as a pile rather than
    // as noise. Jitter keeps them from looking mechanically splayed.
    const lean = opts.lean === undefined ? 0.23 : opts.lean;
    const tiltX = -lean * Math.cos(a) + wobble(deg, 1) * 0.11;
    const tiltZ = -lean * Math.sin(a) + wobble(deg, 2) * 0.11;
    cluster.add(
      makeKey({
        color: srgb(opts.dim ? BRAND.ink : isWhite ? BRAND.boneKey : BRAND.darkKey),
        rough: isWhite ? 0.4 : 0.44,
        bone: isWhite,
        x: Math.sin(a) * radius,
        z: Math.cos(a) * radius,
        y: -0.02 + wobble(deg, 3) * 0.26,
        rotY: CAP_YAW + wobble(deg, 4) * 0.22,
        tiltX,
        tiltZ,
        labels: opts.word
          ? [topLabel(pixelText(opts.word, opts.ink === 'acid' ? GREEN_TX : DARK_TX), DIMS_STD, 0.8, -CAP_YAW)]
          : [],
      }),
    );
  };

  RING.forEach((cap) => place(cap.deg, RING_R, cap));
  OUTER.forEach((deg) => place(deg, OUTER_R, { lean: 0.32, dim: true }));

  /* ---------------- post: DOF + bloom + gamma ---------------- */
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bokeh = new BokehPass(scene, camera, {
    focus: BASE_CAM.distanceTo(new THREE.Vector3(0, 1.3, 0)),
    aperture: 0.00012,
    maxblur: 0.003,
    width,
    height,
  });
  composer.addPass(bokeh);
  const bloom = new UnrealBloomPass(new THREE.Vector2(width, height), 0.16, 0.36, 0.82);
  composer.addPass(bloom);
  composer.addPass(new ShaderPass(GammaCorrectionShader));
  // FXAA only where it is needed: low-dpi screens, since the composer bypasses MSAA.
  let fxaa = null;
  if (renderer.getPixelRatio() < 1.5) {
    fxaa = new ShaderPass(FXAAShader);
    composer.addPass(fxaa);
  }

  function applySize() {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    camera.aspect = w / h;
    const k = fitScale();
    camera.position.copy(BASE_CAM).multiplyScalar(k);
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    composer.setSize(w, h);
    if (fxaa) {
      const pr = renderer.getPixelRatio();
      fxaa.material.uniforms.resolution.value.set(1 / (w * pr), 1 / (h * pr));
    }
  }
  applySize();
  camera.lookAt(0, 0.6, 0.2);

  /* ---------------- interaction ---------------- */
  const clicker = createClicker();
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const canvas = renderer.domElement;
  let muted = false;
  let pressed = false;
  let hovering = false;
  let travel = 0;
  let travelTarget = 0;
  let mx = 0;
  let my = 0;

  const click = (preset) => {
    if (!muted) clicker.play(preset);
  };

  function hitsKey(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObject(hero, true).length > 0;
  }

  function press() {
    if (pressed) return;
    pressed = true;
    travelTarget = 1;
    click(SND_DOWN);
  }

  function release(fire) {
    if (!pressed) return;
    pressed = false;
    travelTarget = 0;
    click(SND_UP);
    if (fire && onActivate) onActivate();
  }

  const onPointerMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    mx = (event.clientX - rect.left) / rect.width - 0.5;
    my = (event.clientY - rect.top) / rect.height - 0.5;
    hovering = hitsKey(event);
    canvas.style.cursor = hovering ? 'pointer' : 'default';
  };
  const onPointerDown = (event) => {
    if (!hitsKey(event)) return;
    press();
  };
  const onPointerUp = (event) => release(hitsKey(event));
  const onPointerCancel = () => release(false);
  const onPointerLeave = () => {
    hovering = false;
    mx = 0;
    my = 0;
    release(false);
  };

  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerCancel);
  canvas.addEventListener('pointerleave', onPointerLeave);

  const observer = new ResizeObserver(applySize);
  observer.observe(container);

  /* ---------------- loop ---------------- */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clock = new THREE.Clock();
  let hoverT = 0;
  let intro = 0;
  let frame = 0;
  let running = false;

  function render() {
    const t = clock.getElapsedTime();
    intro = Math.min(1, intro + 0.014);
    const ease = intro * intro * (3 - 2 * intro);
    travel += (travelTarget - travel) * 0.32;
    hoverT += ((hovering && !pressed ? 1 : 0) - hoverT) * 0.14;

    hero.position.y = hero.userData.baseY - travel * PRESS_DEPTH;
    hero.scale.setScalar(1 + hoverT * 0.02);
    glowLight.intensity = (0.95 + Math.sin(t * 1.7) * 0.12 + travel * 0.7 + hoverT * 0.2) * ease;
    halo.material.opacity = (0.5 + Math.sin(t * 1.7) * 0.08 + travel * 0.25) * ease;
    bloom.strength =
      (0.16 + Math.sin(t * 1.7) * 0.02 + travel * 0.14 + hoverT * 0.03) * (0.35 + 0.65 * ease);

    if (!reduce) {
      const k = fitScale();
      camera.position.x = BASE_CAM.x * k + mx * 0.4;
      camera.position.y = BASE_CAM.y * k - my * 0.3 - travel * 0.1;
      camera.lookAt(0, 0.6, 0.2);
    }
    composer.render();
    frame = running ? window.requestAnimationFrame(render) : 0;
  }

  return {
    start() {
      if (running) return;
      running = true;
      clock.getDelta(); // drop the paused interval
      frame = window.requestAnimationFrame(render);
    },
    stop() {
      running = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    },
    press,
    release,
    setMuted(value) {
      muted = value;
    },
    dispose() {
      this.stop();
      observer.disconnect();
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerCancel);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      clicker.close();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => {
          if (!material) return;
          if (material.map) material.map.dispose();
          material.dispose();
        });
      });
      if (scene.environment) scene.environment.dispose();
      composer.renderTarget1.dispose();
      composer.renderTarget2.dispose();
      renderer.dispose();
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    },
  };
}
