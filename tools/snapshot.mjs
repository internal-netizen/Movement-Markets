/**
 * Capture the rendered DOM of the running dev server into tools/snapshot/,
 * for tools/build_standalone.py to assemble into standalone/.
 *
 *   npm run dev                 # in another shell, on :5180
 *   npm i -D playwright-core    # one-off; not needed to run the site itself
 *   node tools/snapshot.mjs
 *
 * Set CHROME=/path/to/chrome if your browser is somewhere else.
 */
let chromium;
try {
  ({ chromium } = await import('playwright-core'));
} catch {
  console.error('\nMissing playwright-core. This is a build-time tool only:\n\n  npm i -D playwright-core\n');
  process.exit(1);
}
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const OUT = fileURLToPath(new URL('./snapshot/', import.meta.url));
fs.mkdirSync(OUT, { recursive: true });
const B='http://localhost:5180';
const br=await chromium.launch({executablePath: process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--no-sandbox','--use-gl=angle','--enable-unsafe-swiftshader']});
const ctx=await br.newContext({viewport:{width:1440,height:900}});
const page=await ctx.newPage();
await page.goto(B,{waitUntil:'load'});
await page.waitForSelector('.site-header',{timeout:20000});
await page.waitForTimeout(2500);

// The four journey icon states: scroll the section through the viewport and
// grab the icon card each time.
const icons = [];
const tickets = [];
for (let i = 0; i < 4; i++) {
  await page.evaluate((i) => {
    const s = document.querySelector('.movement-journey');
    const rect = s.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    // travelled = (innerHeight - rect.top) / (innerHeight + height); solve for scrollY
    const span = window.innerHeight + rect.height;
    const want = (i + 0.5) / 4;
    window.scrollTo({ top: top - window.innerHeight + want * span, behavior: 'instant' });
  }, i);
  await page.waitForTimeout(500);
  const got = await page.evaluate(() => {
    const card = document.querySelector('.journey-icon-card');
    const ticket = document.querySelector('.journey-glass-ticket');
    return {
      cls: card.getAttribute('class'),
      html: card.innerHTML,
      ticket: ticket.innerHTML,
      step: document.querySelector('.journey-topline span:last-child')?.textContent,
    };
  });
  icons.push(got);
  console.log(`  icon state ${i}: class="${got.cls}" topline=${got.step}`);
}

await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
await page.waitForTimeout(800);

const home = await page.evaluate(() => {
  const root = document.getElementById('root');
  return root.innerHTML;
});
fs.writeFileSync(`${OUT}/home.html`, home);
fs.writeFileSync(`${OUT}/icons.json`, JSON.stringify(icons, null, 2));
console.log('home.html bytes:', home.length);

// login page
const p2 = await ctx.newPage();
await p2.goto(`${B}/login`,{waitUntil:'load'});
await p2.waitForSelector('.login-shell',{timeout:20000});
await p2.waitForTimeout(1200);
const login = await p2.evaluate(()=>document.getElementById('root').innerHTML);
fs.writeFileSync(`${OUT}/login.html`, login);
console.log('login.html bytes:', login.length);

await br.close();
