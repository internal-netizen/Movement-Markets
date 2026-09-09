/**
 * Capture reference images of every section, for art direction.
 *
 *   npm run dev            # in another shell, on :5180
 *   node tools/shots.mjs   # writes shots/
 *
 * The reveals are scroll-driven — progress is read from each element's
 * position — so anything below the fold sits at opacity 0 until scrolled to.
 * A plain full-page capture would therefore come out mostly blank. The motion
 * is neutralised first so every section is captured settled.
 */
let chromium;
try {
  ({ chromium } = await import('playwright-core'));
} catch {
  console.error('\nMissing playwright-core:  npm i -D playwright-core\n');
  process.exit(1);
}
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const OUT = fileURLToPath(new URL('../shots/', import.meta.url));
fs.mkdirSync(OUT, { recursive: true });

const SETTLED = `
  .mm-word,.mm-stagger-item,.mm-cascade-item,.mm-band,.mm-line{
    opacity:1!important;translate:none!important;clip-path:none!important;}
  .mm-image{clip-path:none!important;scale:1!important;}
  .mm-bars>*{transform:none!important;}
  .mm-draw{stroke-dashoffset:0!important;}
  .mm-scrub{scale:1!important;}
  .mm-theme-switch{display:none!important;}
`;

// Bands in the order the home page lays them out.
const NAMES = ['trust', 'what-you-get', 'journey', 'markets', 'technology', 'metrics',
               'responsibility', 'partners', 'connections', 'standard', 'contents',
               'manifesto', 'cta'];

const browser = await chromium.launch({
  executablePath: process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--use-gl=angle', '--enable-unsafe-swiftshader'],
});

async function capture(theme) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto('http://localhost:5180', { waitUntil: 'load' });
  await page.waitForSelector('.site-header', { timeout: 20000 });
  await page.waitForTimeout(2500);

  const current = await page.getAttribute('.mm-design', 'data-theme');
  if (current !== theme) {
    await page.click('.mm-theme-switch');
    await page.waitForTimeout(1500);
  }
  await page.addStyleTag({ content: SETTLED });
  await page.waitForTimeout(600);

  const tag = theme === 'light' ? '-light' : '';
  await page.screenshot({ path: `${OUT}full-page${tag}.png`, fullPage: true });
  console.log(`  full-page${tag}.png`);

  const hero = await page.$('.gh');
  if (hero) {
    await hero.screenshot({ path: `${OUT}00-hero${tag}.png` });
    console.log(`  00-hero${tag}.png`);
  }

  const bands = await page.$$('.mm-band');
  for (let i = 0; i < bands.length; i += 1) {
    const box = await bands[i].boundingBox();
    if (!box || box.height < 40) continue;
    const name = `${String(i + 1).padStart(2, '0')}-${NAMES[i] || 'band'}${tag}.png`;
    await bands[i].screenshot({ path: OUT + name });
    console.log(`  ${name}  (${Math.round(box.width)}x${Math.round(box.height)})`);
  }

  // The carousel is 420vh of sticky scroll; capture it locked rather than as a
  // tall empty band.
  const pin = await page.$('[data-mm-pin]');
  if (pin) {
    const box = await pin.boundingBox();
    await page.evaluate((y) => window.scrollTo(0, y), box.y + 700);
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `${OUT}journey-locked${tag}.png` });
    console.log(`  journey-locked${tag}.png`);
  }
  await ctx.close();
}

console.log('dark:');
await capture('dark');
console.log('light:');
await capture('light');
await browser.close();
console.log(`\nwritten to shots/`);
