import { readFile } from 'node:fs/promises';
import { INDEXABLE_ROUTES, SITE_URL } from '../src/seo/routes.js';

const titleSet = new Set();
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const robots = await readFile('dist/robots.txt', 'utf8');

if (!sitemap.startsWith('<?xml') || !robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
  throw new Error('Crawler files are missing or invalid.');
}

for (const path of INDEXABLE_ROUTES) {
  const filename = path === '/' ? 'dist/index.html' : `dist${path}.html`;
  const html = await readFile(filename, 'utf8');
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const canonical = `${SITE_URL}${path}`;
  if (!title || titleSet.has(title)) throw new Error(`Missing or duplicate title: ${path}`);
  if (!html.includes('<h1') || html.includes('<div id="root"></div>')) {
    throw new Error(`Missing server-rendered content: ${path}`);
  }
  if (!html.includes(`<link rel="canonical" href="${canonical}">`)) {
    throw new Error(`Wrong canonical URL: ${path}`);
  }
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) throw new Error(`Missing from sitemap: ${path}`);
  titleSet.add(title);
}

const notFound = await readFile('dist/404.html', 'utf8');
if (!notFound.includes('noindex, follow') || notFound.includes('rel="canonical"')) {
  throw new Error('404 page must be noindex without a canonical URL.');
}

console.log(`SEO output checked: ${INDEXABLE_ROUTES.length} public pages, sitemap, robots.txt and 404.`);
