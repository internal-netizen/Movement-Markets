/**
 * Drives the pinned carousel inside the injected design markup.
 *
 * The slide keeps the canvas's own artwork — the curve, its four dots, the
 * numbered tips and the render slot. This only locks it to the viewport and
 * turns page scroll into progress along the curve: a marker rides the path, the
 * active dot and tip light up, and the render swaps at each one.
 *
 * Plain DOM rather than JSX, because the slide is injected HTML that React
 * never owns.
 */

const STEPS = 4;

/* ---------------------------------------------------------------------------
   The 3D cube render is commented out.

   Everything else in the carousel is untouched: the curve, its dots, the
   travelling marker and the numbered tips all still step with the scroll. Only
   the render slot is left empty.

   To bring it back, uncomment the block below and the buildRenders() call in
   mountPinnedCarousel. The matching CSS (.mm-shape / .mm-cube / .mm-face /
   .mm-render-caption) is still in movement-home.css, so nothing else is needed.
   --------------------------------------------------------------------------- */
// // The render slot is pluggable: swap these for real renders (an <img>, a
// // <canvas>, a model) and nothing else here changes.
// const RENDERS = [
//   { label: 'Momentum' },
//   { label: 'Setup' },
//   { label: 'Execution' },
//   { label: 'Protection' },
// ];
//
// function buildRenders(slot) {
//   // StrictMode mounts effects twice, and a theme swap re-runs this; clear any
//   // previous stage so the renders are never stacked.
//   slot.querySelectorAll('.mm-render-stage').forEach((n) => n.remove());
//   const stage = document.createElement('div');
//   stage.className = 'mm-render-stage';
//   RENDERS.forEach((r, i) => {
//     const shape = document.createElement('div');
//     shape.className = 'mm-shape';
//     shape.dataset.step = String(i);
//     const cube = document.createElement('div');
//     cube.className = 'mm-cube';
//     ['f', 'bk', 'r', 'l', 't', 'bt'].forEach((f) => {
//       const face = document.createElement('div');
//       face.className = `mm-face mm-face-${f}`;
//       // The cube turns a full 360deg, so a label on the front face is read from
//       // behind for half the spin and comes out mirrored. It goes on the front
//       // AND back faces; the back one is flipped in X by CSS so it reads the
//       // right way round from that side, and both hide their own reverse.
//       if (f === 'f' || f === 'bk') face.textContent = r.label;
//       cube.appendChild(face);
//     });
//     shape.appendChild(cube);
//     stage.appendChild(shape);
//   });
//   const caption = document.createElement('div');
//   caption.className = 'mm-render-caption';
//   stage.appendChild(caption);
//   slot.appendChild(stage);
//   return { stage, caption, shapes: [...stage.querySelectorAll('.mm-shape')] };
// }

export function mountPinnedCarousel(root) {
  const pin = root.querySelector('[data-mm-pin]');
  const line = root.querySelector('[data-mm-line]');
  const slot = root.querySelector('[data-mm-render]');
  if (!pin || !line || !slot) return () => {};

  const marker = root.querySelector('[data-mm-marker]');
  const halo = root.querySelector('[data-mm-marker-halo]');
  const dots = [...root.querySelectorAll('[data-mm-dot]')];
  const tips = [...root.querySelectorAll('[data-mm-tip]')];
  // const { stage, caption, shapes } = buildRenders(slot);
  // Stubs while the render is disabled, so the stepping logic below needs
  // no branching: an empty list makes its forEach a no-op.
  const stage = null;
  const caption = null;
  const shapes = [];

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const length = line.getTotalLength();
  let frame = 0;
  let step = -1;

  // The slide's own coordinate system. The content band used to be hardcoded on
  // the assumption that a caption is ~150 units tall — but they run to two
  // lines, and to more than two as the viewport narrows, so the real band is
  // taller than the constant and the last line was landing on the bottom edge
  // of the screen. These are now only the fallback if measuring fails.
  const ART_W = 1080;
  const BAND_TOP = 430;
  const BAND_BOTTOM = 1066;
  const BAND_PAD = 28; // art units of breathing room around the captions
  const canvas = root.querySelector('[data-mm-canvas]');
  // The wave, its dots and the travelling marker all live in one SVG; the
  // captions are HTML outside it. That split is what lets the wave be widened
  // to the screen edges on its own, without stretching any type.
  const waveSvg = line.closest('svg');
  if (waveSvg) waveSvg.setAttribute('data-mm-wave', '');

  const sticky = pin.querySelector('[data-mm-pin-inner]');
  // The site header is fixed, so it covers the top of the locked viewport. The
  // band has to be fitted and centred in what is left below it, or the first
  // caption sits underneath the header on a short screen.
  const GUTTER = 16;
  const headroom = () => {
    const header = document.querySelector('.site-header');
    if (!header) return GUTTER;
    const rect = header.getBoundingClientRect();
    return rect.height ? rect.bottom + GUTTER : GUTTER;
  };

  const applyScale = (band) => {
    const top = headroom();
    // fill the width, but never so much that the content band overflows the
    // space below the header — on a short viewport the band wins
    const usable = Math.max(120, sticky.clientHeight - top - GUTTER);
    const height = Math.max(1, band.bottom - band.top);
    const middle = (band.top + band.bottom) / 2;
    const scale = Math.min(sticky.clientWidth / ART_W, usable / height);
    // The canvas is laid out from the sticky's left edge with transform-origin
    // left top, so a canvas narrower than the screen leaves the captions and
    // the cube hard left with dead space down the right. Centre it on the
    // viewport. Both shifts are in viewport pixels: the transform list applies
    // scale first, then the translate.
    const stickyLeft = sticky.getBoundingClientRect().left;
    const viewport = document.documentElement.clientWidth;
    const centred = (viewport - ART_W * scale) / 2 - stickyLeft;
    sticky.style.setProperty('--mm-fit', String(scale));
    sticky.style.setProperty('--mm-shift', `${Math.round(top + usable / 2 - middle * scale)}px`);
    sticky.style.setProperty('--mm-shift-x', `${Math.round(centred)}px`);
    return scale;
  };

  // The captions' real extent, in art units. Converting through the scale that
  // is currently applied makes this scale-invariant, so one corrective pass
  // settles it. getBoundingClientRect works for SVG and HTML alike, which
  // offsetTop would not.
  const measureBand = (scale) => {
    if (!canvas || !tips.length || !scale) return null;
    const origin = canvas.getBoundingClientRect().top;
    let top = Infinity;
    let bottom = -Infinity;
    tips.forEach((tip) => {
      const rect = tip.getBoundingClientRect();
      if (!rect.height) return;
      top = Math.min(top, (rect.top - origin) / scale);
      bottom = Math.max(bottom, (rect.bottom - origin) / scale);
    });
    if (!Number.isFinite(top) || bottom <= top) return null;
    return { top: top - BAND_PAD, bottom: bottom + BAND_PAD };
  };

  // On a wide, short screen (a laptop) the captions cap the scale well below
  // what would fill the width, leaving the wave stopping short of the edges.
  // Widening the wave alone closes that gap; the dots are un-stretched back to
  // circles by the reciprocal.
  const MAX_STRETCH = 1.9;
  const BLEED = 48; // run past both edges rather than stopping exactly on them
  const stretchWave = () => {
    if (!waveSvg) return;
    // measure the wave unstretched, then solve for the scale and the offset
    // that centre it on the viewport — the path is not symmetric inside its
    // own viewBox, so scaling about the SVG's centre alone lands it off to one
    // side, long on the left and short on the right.
    sticky.style.setProperty('--mm-wave-x', '1');
    sticky.style.setProperty('--mm-wave-shift', '0px');
    const rect = line.getBoundingClientRect();
    if (!rect.width) return;

    // Every measurement here is viewport-relative, so the target has to be the
    // viewport's centre. Using the sticky's own width assumed it starts at x=0;
    // where it does not, the wave lands offset — on a 2560px screen that left
    // a 180px gap down one side while overshooting the other.
    const width = document.documentElement.clientWidth;
    const stretch = Math.min(MAX_STRETCH, Math.max(1, (width + BLEED * 2) / rect.width));
    const svgRect = waveSvg.getBoundingClientRect();
    const centre = svgRect.left + svgRect.width / 2;
    const midpoint = rect.left + rect.width / 2;
    // translateX is applied in the SVG's own coordinate space, which the canvas
    // then scales by --mm-fit — so a shift of t moves the wave t * scale on
    // screen. Divide by that scale or the correction overshoots.
    const scale = parseFloat(sticky.style.getPropertyValue('--mm-fit')) || 1;
    const shift = (width / 2 - (centre + (midpoint - centre) * stretch)) / scale;

    sticky.style.setProperty('--mm-wave-x', stretch.toFixed(4));
    sticky.style.setProperty('--mm-wave-shift', `${Math.round(shift)}px`);
    sticky.style.setProperty('--mm-dot-fix', (1 / stretch).toFixed(4));
  };

  const fit = () => {
    // provisional pass so the rects reflect a known scale, then correct
    const scale = applyScale({ top: BAND_TOP, bottom: BAND_BOTTOM });
    const measured = measureBand(scale);
    if (measured) applyScale(measured);
    stretchWave();
  };

  const clamp01 = (v) => Math.max(0, Math.min(v, 1));

  const setStep = (next) => {
    if (next === step) return;
    step = next;
    dots.forEach((d, i) => d.toggleAttribute('data-on', i === next));
    tips.forEach((t) => t.toggleAttribute('data-on', Number(t.dataset.mmTip) === next));
    shapes.forEach((s, i) => s.toggleAttribute('data-on', i === next));
    if (caption) caption.textContent = RENDERS[next]?.label ?? '';
  };

  const update = () => {
    frame = 0;
    fit();
    const box = pin.getBoundingClientRect();
    const travel = pin.offsetHeight - window.innerHeight;
    const p = travel > 0 ? clamp01(-box.top / travel) : 0;
    // hold at either end for a beat so the section does not start mid-flight
    const eased = clamp01((p - 0.08) / 0.84);
    const point = line.getPointAtLength(eased * length);
    if (marker) { marker.setAttribute('cx', point.x); marker.setAttribute('cy', point.y); }
    if (halo) { halo.setAttribute('cx', point.x); halo.setAttribute('cy', point.y); }
    setStep(Math.min(STEPS - 1, Math.floor(eased * STEPS)));
  };

  const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };

  if (reduced.matches) {
    fit();
    dots.forEach((d) => d.setAttribute('data-on', ''));
    tips.forEach((t) => t.setAttribute('data-on', ''));
    setStep(0);
    return () => stage?.remove();
  }

  update();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  return () => {
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
    if (frame) window.cancelAnimationFrame(frame);
    stage?.remove();
  };
}
