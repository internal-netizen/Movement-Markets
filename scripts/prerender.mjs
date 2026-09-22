import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { render } from '../.prerender-server/entry-server.js';
import { getSeo, INDEXABLE_ROUTES, PRERENDER_ROUTES, SITE_URL, SOCIAL_IMAGE } from '../src/seo/routes.js';

const output = resolve('dist');
const template = await readFile(resolve(output, 'index.html'), 'utf8');
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);

  async function writePage(path, filename = path === '/' ? 'index.html' : `${path.slice(1)}.html`) {
    const seo = getSeo(path);
    const body = render(path);
    if (!body.includes('<h1')) throw new Error(`Missing main heading in ${path}`);

    const head = [
      `<title>${escape(seo.title)}</title>`,
      `<meta name="description" content="${escape(seo.description)}">`,
      `<meta name="robots" content="${seo.index ? 'index, follow' : 'noindex, follow'}">`,
      '<meta property="og:type" content="website">',
      '<meta property="og:site_name" content="Movement Markets">',
      `<meta property="og:title" content="${escape(seo.title)}">`,
      `<meta property="og:description" content="${escape(seo.description)}">`,
      `<meta property="og:image" content="${SOCIAL_IMAGE}">`,
      '<meta name="twitter:card" content="summary_large_image">',
      `<meta name="twitter:title" content="${escape(seo.title)}">`,
      `<meta name="twitter:description" content="${escape(seo.description)}">`,
      `<meta name="twitter:image" content="${SOCIAL_IMAGE}">`,
    ];

    if (seo.canonical) {
      head.push(`<link rel="canonical" href="${escape(seo.canonical)}">`);
      head.push(`<meta property="og:url" content="${escape(seo.canonical)}">`);
    }

    if (path === '/') {
      head.push(`<script type="application/ld+json">${JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'Organization', name: 'Movement Markets', legalName: 'Movement Markets Ltd', url: SITE_URL },
          { '@type': 'WebSite', name: 'Movement Markets', url: SITE_URL },
        ],
      })}</script>`);
    }

    const html = template
      .replace(/<title>[\s\S]*?<\/title>/, '')
      .replace(/<meta\s+name="description"[\s\S]*?\/?>/, '')
      .replace('</head>', `${head.join('\n    ')}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

    if (!html.includes(`<div id="root">${body}</div>`)) throw new Error(`Failed to inject ${path}`);
    const target = resolve(output, filename);
    await mkdir(resolve(target, '..'), { recursive: true });
    await writeFile(target, html);
  }

  for (const path of PRERENDER_ROUTES) await writePage(path);
  await writePage('/not-found', '404.html');

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...INDEXABLE_ROUTES.map((path) => `  <url><loc>${escape(`${SITE_URL}${path}`)}</loc></url>`),
    '</urlset>',
  ].join('\n');
  await writeFile(resolve(output, 'sitemap.xml'), sitemap);
  console.log(`Pre-rendered ${PRERENDER_ROUTES.length} public routes and a 404 page.`);
