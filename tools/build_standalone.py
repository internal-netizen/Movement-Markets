import base64, json, os, re, sys

"""
Build the two self-contained pages in standalone/ from the live dev server's
rendered DOM.

    npm run dev                  # in another shell, on :5180
    node tools/snapshot.mjs      # capture the rendered DOM
    python3 tools/build_standalone.py

Needs Pillow (`pip install pillow`); snapshot.mjs needs playwright-core and a
local Chrome (set CHROME=... to point at a different binary).
"""
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, 'tools', 'snapshot')
WEBP = os.path.join(ROOT, 'tools', 'snapshot', 'webp')

if not os.path.isdir(SITE) or not os.path.exists(f'{SITE}/home.html'):
    sys.exit('No DOM snapshot found. Start the dev server, then: node tools/snapshot.mjs')

# Re-encode the sculpture PNGs to WebP so they can be inlined as data URIs
# (5.05 MB of PNG becomes about 109 KB).
os.makedirs(WEBP, exist_ok=True)
from PIL import Image
for _n in ('movement-ribs', 'movement-dark-waves', 'movement-rise'):
    _im = Image.open(f'{ROOT}/public/{_n}.png').convert('RGB')
    _w, _h = _im.size
    if _w > 1400:
        _im = _im.resize((1400, round(_h * 1400 / _w)), Image.LANCZOS)
    _im.save(f'{WEBP}/{_n}.webp', 'WEBP', quality=78, method=6)

def read(p, enc='utf-8'):
    with open(p, encoding=enc) as f: return f.read()

def data_uri(path, mime):
    with open(path, 'rb') as f:
        return f'data:{mime};base64,' + base64.b64encode(f.read()).decode()

# ---------- assets ----------
IMG = {f'/{n}.png': data_uri(f'{WEBP}/{n}.webp', 'image/webp')
       for n in ('movement-ribs', 'movement-dark-waves', 'movement-rise')}
FAVICON = data_uri(f'{ROOT}/public/favicon.svg', 'image/svg+xml')

# ---------- css ----------
css = read(f'{ROOT}/src/styles/site.css') + '\n\n' + read(f'{ROOT}/src/styles/keycap.css')
for src, uri in IMG.items():
    css = css.replace(src, uri)

# ---------- scene ----------
scene = read(f'{ROOT}/src/components/keycap/keycapScene.js')
scene = re.sub(r'^import .*?;\n', '', scene, flags=re.M)
for name in ['EffectComposer','RenderPass','ShaderPass','BokehPass','UnrealBloomPass',
             'GammaCorrectionShader','FXAAShader']:
    scene = re.sub(rf'(?<![\w.]){name}(?![\w])', f'THREE.{name}', scene)
scene = re.sub(r'^export ', '', scene, flags=re.M)

CDN = 'https://cdn.jsdelivr.net/npm/three@0.128.0'
THREE_TAGS = '\n'.join(f'<script src="{CDN}/{p}"></script>' for p in [
    'build/three.min.js',
    'examples/js/shaders/CopyShader.js','examples/js/shaders/BokehShader.js',
    'examples/js/shaders/LuminosityHighPassShader.js','examples/js/shaders/GammaCorrectionShader.js',
    'examples/js/shaders/FXAAShader.js','examples/js/postprocessing/Pass.js',
    'examples/js/postprocessing/EffectComposer.js','examples/js/postprocessing/RenderPass.js',
    'examples/js/postprocessing/ShaderPass.js','examples/js/postprocessing/BokehPass.js',
    'examples/js/postprocessing/UnrealBloomPass.js'])

def clean(html, login_href):
    # strip classes/inline styles the runtime adds - our JS re-applies them
    html = re.sub(r'\s(?:class|className)="([^"]*)"',
                  lambda m: ' class="%s"' % ' '.join(
                      c for c in m.group(1).split() if c not in ('scroll-reveal','is-visible')).strip()
                  if any(c in m.group(1).split() for c in ('scroll-reveal','is-visible'))
                  else m.group(0), html)
    html = re.sub(r'\sstyle="[^"]*--(?:hero-copy-shift|hero-terminal-shift|drift|wave-slide|wave-lift|wave-dash)[^"]*"',
                  '', html)
    html = re.sub(r'<canvas[^>]*>.*?</canvas>', '', html, flags=re.S)  # scene rebuilds it
    for src, uri in IMG.items():
        html = html.replace(f'src="{src}"', f'src="{uri}"')
    html = html.replace('href="/login"', f'href="{login_href}"')
    return html

home  = clean(read(f'{SITE}/home.html'),  'login.html')
login = clean(read(f'{SITE}/login.html'), 'index.html').replace('href="/"', 'href="index.html"')
icons = json.load(open(f'{SITE}/icons.json'))

RUNTIME = """
/* ---- reveal on scroll + parallax (ports ScrollExperience.jsx) ---- */
(function () {
  var TARGETS = ['.report-board','.section-heading','.movement-bento-heading','.bento-card',
    '.movement-journey','.rates-card','.platform-card','.funding-copy','.funding-visual',
    '.steps-grid article','.cta-panel'].join(', ');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var boards = [].slice.call(document.querySelectorAll('.depth-board'));
  var hero = document.querySelector('.hero-section');
  var revealed = [].slice.call(document.querySelectorAll(TARGETS));
  var frame = 0;

  revealed.forEach(function (el) { el.classList.add('scroll-reveal'); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7%' });
  revealed.forEach(function (el) {
    if (reduced.matches) el.classList.add('is-visible'); else io.observe(el);
  });

  var journey = document.querySelector('.movement-journey');
  var card = document.querySelector('.journey-icon-card');
  var ticket = document.querySelector('.journey-glass-ticket');
  var counter = document.querySelector('.journey-topline span:last-child');
  var steps = [].slice.call(document.querySelectorAll('.journey-step'));
  var nodes = [].slice.call(document.querySelectorAll('.journey-node'));
  var ICONS = __ICONS__;
  var lastStep = -1;

  function setStep(i) {
    if (i === lastStep) return;
    lastStep = i;
    if (card) { card.setAttribute('class', ICONS[i].cls); card.innerHTML = ICONS[i].html; }
    if (ticket) ticket.innerHTML = ICONS[i].ticket;
    if (counter) counter.textContent = (i + 1) + '/4';
    steps.forEach(function (el, n) { el.classList.toggle('is-active', n === i); });
    nodes.forEach(function (el, n) { el.classList.toggle('is-active', n === i); });
  }

  function clamp01(v) { return Math.max(0, Math.min(v, 1)); }

  function update() {
    if (hero && !reduced.matches) {
      var r = hero.getBoundingClientRect();
      var travelled = Math.max(0, Math.min(-r.top, r.height));
      hero.style.setProperty('--hero-copy-shift', (travelled * -0.035) + 'px');
      hero.style.setProperty('--hero-terminal-shift', (travelled * 0.018) + 'px');
    }
    boards.forEach(function (b) {
      if (reduced.matches) { b.style.setProperty('--drift', '0px'); return; }
      var r = b.getBoundingClientRect();
      var span = window.innerHeight + r.height;
      var p = clamp01((window.innerHeight - r.top) / span);
      b.style.setProperty('--drift', ((p - 0.5) * -18) + 'px');
    });
    if (journey) {
      var p2;
      if (reduced.matches) { p2 = 0.55; setStep(1); }
      else {
        var jr = journey.getBoundingClientRect();
        p2 = clamp01((window.innerHeight - jr.top) / (window.innerHeight + jr.height));
        setStep(Math.min(3, Math.floor(p2 * 4)));
      }
      journey.style.setProperty('--wave-slide', ((p2 - 0.5) * -58) + 'px');
      journey.style.setProperty('--wave-lift', ((p2 - 0.5) * 34) + 'px');
      journey.style.setProperty('--wave-dash', String(1280 - p2 * 1280));
    }
    frame = 0;
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(update); }
  update();
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
})();

/* ---- the pressable keycap ---- */
__SCENE__
(function () {
  var stage = document.querySelector('.keycap-stage');
  if (!stage) return;
  var scene = null, muted = false, built = false;
  var soundBtn = document.querySelector('.keycap-sound');

  function activate() { window.location.href = 'login.html'; }

  function build() {
    if (built) return; built = true;
    try {
      scene = createKeycapScene(stage, { onActivate: activate });
      scene.start();
    } catch (err) {
      console.error('Keycap scene failed to start', err);
      stage.style.display = 'none';
    }
  }

  // Only build once the panel is near the viewport, and pause when it leaves.
  var io = new IntersectionObserver(function (entries) {
    var e = entries[0];
    if (e.isIntersecting) { build(); if (scene) scene.start(); }
    else if (scene) scene.stop();
  }, { rootMargin: '300px 0px' });
  io.observe(stage);

  document.addEventListener('visibilitychange', function () {
    if (!scene) return;
    document.visibilityState === 'hidden' ? scene.stop() : scene.start();
  });

  if (soundBtn) soundBtn.addEventListener('click', function () {
    muted = !muted;
    soundBtn.textContent = muted ? 'Sound off' : 'Sound on';
    soundBtn.setAttribute('aria-pressed', String(muted));
    if (scene) scene.setMuted(muted);
  });

  stage.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault(); if (scene) scene.press();
  });
  stage.addEventListener('keyup', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault(); if (scene) scene.release(true);
  });
  stage.addEventListener('blur', function () { if (scene) scene.release(false); });
})();
"""
runtime = RUNTIME.replace('__ICONS__', json.dumps(icons)).replace('__SCENE__', scene)

def page(title, desc, body, extra_js='', three=False):
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title}</title>
<meta name="description" content="{desc}" />
<link rel="icon" href="{FAVICON}" />
<style>
{css}
</style>
</head>
<body>
{body}
{THREE_TAGS if three else ''}
{f'<script>{extra_js}</script>' if extra_js else ''}
</body>
</html>
"""

home_html = page('Movement Markets — Trade the Move',
                 'A modern forex and CFD trading experience built for speed, precision and market movement.',
                 home, runtime, three=True)
login_html = page('Login | Movement Markets',
                  'Client login for Movement Markets.', login)

os.makedirs(f'{ROOT}/standalone', exist_ok=True)
open(f'{ROOT}/standalone/index.html','w',encoding='utf-8').write(home_html)
open(f'{ROOT}/standalone/login.html','w',encoding='utf-8').write(login_html)
for f in ('index.html','login.html'):
    print(f'  standalone/{f}  {os.path.getsize(f"{ROOT}/standalone/{f}")/1024:.0f} KB')
