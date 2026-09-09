/**
 * Build the shipped theme halves from the pristine artboard capture.
 *
 *   src/design/_artboard.html   ->  movement-home-dark.html
 *                                   movement-home-light.html
 *
 * Two stages, both run in a real browser so layout is resolved for us:
 *
 *   split    the artboard stacks a dark copy then a light copy; cut them apart
 *            and drop each one's "DARK/LIGHT THEME — MOVEMENT MARKETS"
 *            annotation row, which only labelled which variant followed.
 *
 *   reshape  turn the canvas into site sections:
 *              - drop the icon rail between the hero and "what you'll get"
 *              - strip the annual-report slides' own ©COMPANY nav, their
 *                "NN — LABEL" annotations, and the card frame around each,
 *                so they read as page sections rather than a pasted-in deck
 *              - keep a single panel in the social carousel
 *
 * Usage:
 *   npm run dev                 # serving on :5180
 *   npm i -D playwright-core    # build-time only
 *   node tools/build-design.mjs
 *
 * Set CHROME=/path/to/chrome if your browser is elsewhere.
 */
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

let chromium;
try {
  ({ chromium } = await import('playwright-core'));
} catch {
  console.error('\nMissing playwright-core. This is a build-time tool only:\n\n  npm i -D playwright-core\n');
  process.exit(1);
}

const DESIGN = fileURLToPath(new URL('../src/design/', import.meta.url));
const artboard = fs.readFileSync(`${DESIGN}_artboard.html`, 'utf8');

/* Section switches. Set one to false and that whole section is left out of the
   generated markup, replaced by an HTML comment saying where it went. Flip it
   back to true and re-run this script to restore it. */
const SECTIONS = {
  carousel: false, // the pinned social carousel — curve, dots, tips, render slot
};

/* ---------------------------------------------------------------- split -- */
function splitThemes() {
  let outer = document.querySelector('#stage');
  while (outer.children.length === 1) outer = outer.children[0];
  const halves = [...outer.children];
  if (halves.length !== 2) throw new Error(`expected 2 theme halves, found ${halves.length}`);
  return halves.map((half) => {
    const label = [...half.querySelectorAll('div')]
      .find((d) => /THEME — MOVEMENT MARKETS$/.test(d.textContent.trim()));
    if (label) (label.closest('div[style*="padding: 44px"]') || label.parentElement).remove();
    return half.innerHTML;
  });
}

/* -------------------------------------------------------------- reshape -- */
function reshape(SECTIONS) {
  const host = document.querySelector('#stage');
  const all = () => [...host.querySelectorAll('div')];
  const log = {};

  // 1. the icon rail
  const rail = all().find((d) => {
    const t = d.textContent.replace(/\s+/g, ' ').trim();
    return t.startsWith('Live markets Research All instruments') && t.length < 220;
  });
  if (rail) {
    let block = rail;
    while (block.parentElement && block.parentElement !== host &&
      block.parentElement.textContent.replace(/\s+/g, ' ').trim().startsWith('Live markets')) {
      block = block.parentElement;
    }
    log.rail = Math.round(block.getBoundingClientRect().height);
    block.remove();
  }

  // 1b. The hero is replaced by a purpose-built section. A marker is left in
  //     its place; HomeGrid splits the HTML here and renders <GridHero />
  //     between the halves. The nav block above it is left untouched.
  {
    let outer = host;
    while (outer.children.length === 1) outer = outer.children[0];
    const hero = [...outer.children].find((c) =>
      /Markets move\./.test(c.textContent) && /INSTITUTIONAL TECHNOLOGY/.test(c.textContent));
    if (hero) {
      hero.replaceWith(document.createComment('MM_HERO'));
      log.heroReplaced = true;
    }
  }

  // 2a. the card frame around each slide. Structural, not text-based: the frame
  //     is the only thing with both a 14px radius and the slide aspect ratio.
  //     The slide canvas inside is transparent, so dropping the frame's paint
  //     lets the page background run straight through.
  const frames = all().filter((d) => {
    const st = d.getAttribute('style') || '';
    return /border-radius:\s*14px/.test(st) && /aspect-ratio:\s*1200\s*\/\s*675/.test(st);
  });
  log.frames = frames.length;
  frames.forEach((f) => {
    let st = f.getAttribute('style') || '';
    st = st
      .replace(/background:[^;]+;?/g, '')
      .replace(/border:\s*1px[^;]+;?/g, '')
      .replace(/border-radius:\s*14px;?/g, '')
      .replace(/box-shadow:[^;]+;?/g, '');
    // the slide is 1200px inside a 1320px shell and the frame carries no
    // margin, so without this every annual-report section hugs the left edge
    // and leaves 120px of dead space on the right.
    // Centre it. The 1200px cap has to stay: the canvas inside carries a fixed
    // scale computed for a 1200px frame, so widening the frame does NOT widen
    // the canvas — it just leaves the artwork pinned left with a gap on the
    // right, which is exactly what "drifting left" looked like.
    f.setAttribute('style', st + ';margin-left:auto;margin-right:auto');
  });

  // 2b. the "NN — LABEL" canvas annotations
  const labels = all().filter((d) => /^\d\d\s—\s[A-Z]/.test(d.textContent.trim()) && d.children.length === 0);
  log.labels = labels.length;
  labels.forEach((l) => {
    let holder = l;
    while (holder.parentElement && holder.parentElement !== host &&
      holder.parentElement.children.length === 1) holder = holder.parentElement;
    holder.remove();
  });

  // 2c. each slide's own ©COMPANY nav
  const navs = all().filter((d) => {
    const t = d.textContent.replace(/\s+/g, ' ').trim();
    return t.startsWith('©COMPANY') && /ANNUAL REPORT/.test(t) && t.length < 90 && d.children.length >= 2;
  });
  const outerNavs = navs.filter((n) => !navs.some((o) => o !== n && o.contains(n)));
  log.navs = outerNavs.length;
  outerNavs.forEach((n) => n.remove());

  // 3. one carousel panel
  const holders = all().filter((d) => (d.textContent.match(/@via\.masi/g) || []).length >= 2);
  const card = holders[holders.length - 1];
  if (card) {
    log.panels = `${card.children.length} -> 1`;
    while (card.children.length > 1) card.lastElementChild.remove();
    card.setAttribute('style',
      (card.getAttribute('style') || '').replace(/flex-wrap:\s*wrap;?/, '') + ';justify-content:center');
  }

  // 4. The social carousel keeps its own artwork — the curve, the dots, the
  //    render slot, the type treatment. Only three things change: the post
  //    chrome comes off, the filler copy is replaced with the brand's route,
  //    and it gets pinned so scroll walks the line dot to dot.
  const line = [...host.querySelectorAll('svg')].find((s) => s.getAttribute('viewBox') === '0 0 1080 1350');
  if (line && !SECTIONS.carousel) {
    // Section switched off: drop it and leave a note in its place.
    let section = line.closest('div');
    while (section.parentElement && section.parentElement !== host &&
      !/padding:\s*96px/.test(section.getAttribute('style') || '')) section = section.parentElement;
    section.replaceWith(document.createComment(
      ' pinned carousel section removed — set SECTIONS.carousel = true in tools/build-design.mjs and re-run to restore '));
    log.carouselRemoved = true;
  } else if (line) {
    const paths = [...line.querySelectorAll('path')];
    // the four paths are one curve drawn four times at falling opacity; the
    // first is the one a marker should ride.
    paths[0].setAttribute('data-mm-line', '');
    [...line.querySelectorAll('circle')].forEach((c, i) => c.setAttribute('data-mm-dot', String(i)));

    const NS = 'http://www.w3.org/2000/svg';
    const halo = document.createElementNS(NS, 'circle');
    halo.setAttribute('data-mm-marker-halo', '');
    halo.setAttribute('r', '26');
    const marker = document.createElementNS(NS, 'circle');
    marker.setAttribute('data-mm-marker', '');
    marker.setAttribute('r', '13');
    line.append(halo, marker);

    const canvas = line.closest('div');
    canvas.setAttribute('data-mm-canvas', '');

    // the "@via.masi / Swipe / 6/10" header and the "Via Masi / Viral Video
    // Maker" byline with its bookmark button: post furniture, not page content
    const chrome = [...canvas.children].filter((k) => {
      const t = k.textContent.replace(/\s+/g, ' ').trim();
      const st = k.getAttribute('style') || '';
      return t.startsWith('@via.masi') || /Viral Video Maker/.test(t) ||
        (/bottom:\s*54px/.test(st) && /right:\s*58px/.test(st));
    });
    log.chrome = chrome.length;
    chrome.forEach((c) => c.remove());

    const slot = [...canvas.querySelectorAll('div')].find((d) => d.textContent.trim() === '3D RENDER');
    if (slot) {
      slot.setAttribute('data-mm-render', '');
      slot.textContent = '';
    }

    // Swap the template's Instagram growth tips for the brand's own route,
    // keeping the design's numbered-tip treatment exactly as authored.
    const COPY = [
      ['01.', 'Scan the move before it gets crowded.'],
      ['02.', 'Shape your setup around how you trade.'],
      ['03.', 'Execute through a focused interface.'],
      ['04.', 'Protect the account with clear controls.'],
    ];
    const tips = [...canvas.querySelectorAll('div')]
      .filter((d) => /^\d\d\./.test(d.textContent.trim()) && d.textContent.trim().length < 90);
    tips.forEach((t, i) => {
      t.setAttribute('data-mm-tip', String(i));
      const [n, rest] = COPY[i] || [];
      if (!n) return;
      // the design bolds the number in its own span; keep that structure
      const strong = t.querySelector('b, strong, span');
      if (strong) {
        strong.textContent = n;
        const tail = [...t.childNodes].filter((c) => c !== strong);
        tail.forEach((c, j) => { c.textContent = j === 0 ? ` ${rest}` : ''; });
      } else {
        t.textContent = `${n} ${rest}`;
      }
    });
    log.tips = tips.length;
    log.dots = line.querySelectorAll('[data-mm-dot]').length;

    // Pull the tip rows in vertically. Authored 4:5 portrait with rows at y=286
    // and y=1032; run edge to edge on a landscape viewport and that 894-unit
    // band is taller than the locked height, so both rows clip.
    tips.forEach((t) => {
      const st = t.getAttribute('style') || '';
      const top = parseInt((st.match(/top:\s*(\d+)px/) || [])[1], 10);
      if (!Number.isFinite(top)) return;
      t.setAttribute('style', st.replace(/top:\s*\d+px/, `top: ${top < 660 ? 430 : 916}px`));
    });

    let section = canvas;
    while (section.parentElement && section.parentElement !== host &&
      !/padding:\s*96px/.test(section.getAttribute('style') || '')) section = section.parentElement;
    const spacer = document.createElement('div');
    spacer.setAttribute('data-mm-pin', '');
    const sticky = document.createElement('div');
    sticky.setAttribute('data-mm-pin-inner', '');
    section.replaceWith(spacer);
    sticky.appendChild(section);
    spacer.appendChild(sticky);
    log.pinned = true;

    // Tag every wrapper between canvas and sticky so CSS can unclamp the
    // 648px column and let the artwork run edge to edge. Bounded by `sticky`.
    let up = canvas;
    let depth = 0;
    while (up && up !== sticky) {
      up.setAttribute('data-mm-cwrap', String(depth));
      up = up.parentElement;
      depth += 1;
    }
    log.wrappers = depth;
  }

  return { html: host.innerHTML, log };
}

/* ------------------------------------------------------------------ run -- */
const br = await chromium.launch({
  executablePath: process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
});
const ctx = await br.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await ctx.newPage();

// a bare harness so nothing from the app's stylesheet perturbs the geometry
const harness = (body) => `<!doctype html><meta charset="utf-8">
<style>
  html,body{margin:0;padding:0}
  body{background:#0c0c0c;font-family:'Space Grotesk','General Sans','Helvetica Neue',sans-serif;line-height:normal}
  #stage,#stage *,#stage *::before,#stage *::after{box-sizing:content-box}
</style>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap">
<div id="stage">${body}</div>`;

await page.setContent(harness(artboard), { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
const halves = await page.evaluate(splitThemes);
console.log(`split: dark ${(halves[0].length / 1024).toFixed(0)} KB, light ${(halves[1].length / 1024).toFixed(0)} KB`);

const themes = ['dark', 'light'];
for (let i = 0; i < 2; i += 1) {
  await page.setContent(harness(halves[i]), { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  const { html, log } = await page.evaluate(reshape, SECTIONS);
  const header = `<!--
  Movement Markets — Home, ${themes[i].toUpperCase()} theme.

  Generated from src/design/_artboard.html — do not hand-edit, it is rewritten
  by tools/build-design.mjs. See that file for what the reshape step changes.
-->\n`;
  fs.writeFileSync(`${DESIGN}movement-home-${themes[i]}.html`, header + html);
  console.log(`${themes[i].padEnd(5)} ${JSON.stringify(log)}  -> ${(html.length / 1024).toFixed(0)} KB`);
}

/* ------------------------------------------------------------------ mix -- */
// A third build: alternate the two themes band by band. Each top-level block
// is taken from whichever half that band should be, and wrapped in a element
// carrying the matching page background. The blocks' own inline styles already
// belong to their theme, so a light block dropped on a light band is correct.
//
// The nav block is dropped — the mixed page uses the site's own <SiteHeader />.
const BANDS = [
  'dark',   // trust strip, continuing the hero
  'light',  // what you'll get
  'dark',   // annual: title
  'light',  // annual: CEO reflection
  'dark',   // annual: revenue growth
  'light',  // annual: our company
  'dark',   // annual: revenue breakdown
  'light',  // annual: partnerships
  'dark',   // annual: carbon footprint
  'light',  // annual: strategic partnerships
  // (the pinned carousel sat here; removed via SECTIONS.carousel)
  'light',  // word row
  'dark',   // final CTA
  'dark',   // footer
];

const mixed = await page.evaluate(({ darkHtml, lightHtml, BANDS, HERO }) => {
  const parse = (html) => {
    const host = document.createElement('div');
    host.innerHTML = html;
    let outer = host;
    while (outer.children.length === 1) outer = outer.children[0];
    return outer;
  };
  const dark = parse(darkHtml);
  const light = parse(lightHtml);

  // the hero marker is a comment node, so walk childNodes not children
  const blocksOf = (root) => [...root.childNodes].filter((n) =>
    n.nodeType === 1 || (n.nodeType === 8 && n.nodeValue.trim() === HERO));

  const dBlocks = blocksOf(dark);
  const lBlocks = blocksOf(light);

  const out = document.createElement('div');
  let band = 0;
  let navDropped = false;
  const BG = { dark: '#0c0c0c', light: '#f2f6fa' };

  dBlocks.forEach((node, i) => {
    // the hero marker passes straight through; React renders the hero there
    if (node.nodeType === 8) { out.appendChild(document.createComment(HERO)); return; }
    // Drop the canvas nav — the mixed page uses the site header instead. Match
    // the FIRST such block only: the footer opens with the same brand-and-links
    // text, so an unanchored test swallows it too.
    const text = node.textContent.replace(/\s+/g, ' ').trim();
    if (!navDropped && /^movementmarkets\s*Markets\s*Platforms/i.test(text)) {
      navDropped = true;
      return;
    }

    const theme = BANDS[band] || 'dark';
    const source = theme === 'light' ? (lBlocks[i] || node) : node;
    const wrap = document.createElement('div');
    wrap.setAttribute('data-band', theme);
    wrap.setAttribute('style', `background:${BG[theme]}`);
    wrap.appendChild(source.cloneNode(true));
    out.appendChild(wrap);
    band += 1;
  });

  return { html: out.innerHTML, bands: band };
}, {
  darkHtml: fs.readFileSync(`${DESIGN}movement-home-dark.html`, 'utf8'),
  lightHtml: fs.readFileSync(`${DESIGN}movement-home-light.html`, 'utf8'),
  BANDS,
  HERO: 'MM_HERO',
});

fs.writeFileSync(`${DESIGN}movement-home-mixed.html`, `<!--
  Movement Markets — Home, MIXED bands.

  The dark and light halves interleaved section by section, each band wrapped
  in its own page background. Generated by tools/build-design.mjs — do not
  hand-edit. The canvas nav is dropped here; the mixed page renders the site's
  own <SiteHeader /> instead.
-->\n` + mixed.html);
console.log(`mixed ${mixed.bands} bands -> ${(mixed.html.length / 1024).toFixed(0)} KB`);

await br.close();
