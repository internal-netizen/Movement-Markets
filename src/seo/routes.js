import { MARKETS } from '../data/markets.js';
import { ARTICLES, PLATFORMS } from '../data/content.js';
import { LEGAL_DOCUMENTS } from '../data/legalDocuments.js';

export const SITE_URL = 'https://movementmarkets.com';
export const SOCIAL_IMAGE = `${SITE_URL}/art/brand-gateway-hero.png`;

const pages = [
  ['/', 'Movement Markets — Trade the Move', 'Explore forex and CFD markets, account types, trading platforms and practical trading resources at Movement Markets.'],
  ['/markets', 'Markets | Movement Markets', 'Explore forex, indices, commodities, shares and crypto CFD markets available through Movement Markets.'],
  ['/platforms', 'Trading Platforms | Movement Markets', 'Explore Xpert Trader and WebTrader platform information, features and device access.'],
  ['/accounts', 'Trading Accounts | Movement Markets', 'Compare Movement Markets trading account types, pricing models and account features.'],
  ['/tools', 'Trading Tools | Movement Markets', 'Explore trading calculators, market hours and the economic calendar.'],
  ['/tools/economic-calendar', 'Economic Calendar | Movement Markets', 'Follow scheduled economic events and their potential market impact.'],
  ['/tools/market-hours', 'Market Hours | Movement Markets', 'Check global trading sessions and market hours in your local time.'],
  ['/tools/calculators', 'Trading Calculators | Movement Markets', 'Use practical tools for pip values, position sizing, margin and trading calculations.'],
  ['/insights', 'Trading Insights | Movement Markets', 'Read practical guides to forex trading mechanics, costs, sessions and risk.'],
  ['/help', 'Help & Support | Movement Markets', 'Find answers to common questions about Movement Markets accounts, trading and support.'],
  ['/about', 'About Movement Markets', 'Learn about Movement Markets, its trading approach and company information.'],
  ['/contact', 'Contact Movement Markets', 'Find ways to contact the Movement Markets team.'],
  ['/partners', 'Partnerships | Movement Markets', 'Explore the Movement Markets introducing broker partnership programme.'],
];

for (const market of MARKETS) {
  pages.push([`/markets/${market.slug}`, `${market.name} Trading | Movement Markets`, market.lead]);
}
for (const platform of PLATFORMS) {
  pages.push([`/platforms/${platform.slug}`, `${platform.name} | Movement Markets`, platform.lead]);
}
for (const article of ARTICLES) {
  pages.push([`/insights/${article.slug}`, `${article.title} | Movement Markets`, article.summary]);
}
for (const doc of LEGAL_DOCUMENTS) {
  pages.push([`/legal/${doc.id}`, `${doc.title} | Movement Markets`, doc.description]);
}

const LEGAL_ALIASES = {
  '/legal': 'client-agreement',
  '/terms': 'terms-of-use',
  '/privacy': 'privacy-policy',
  '/cookies': 'cookie-policy',
  '/cookie-policy': 'cookie-policy',
  '/risk-disclosure': 'risk-disclosure',
  '/aml-kyc': 'aml-kyc',
  '/client-agreement': 'client-agreement',
  '/affiliate-agreement': 'affiliate-agreement',
  '/affiliates': 'affiliate-agreement',
  '/general-business-terms': 'general-business-terms',
};

const canonicalPages = new Map(pages.map(([path, title, description]) => [path, {
  path, title, description, canonical: `${SITE_URL}${path}`, index: true,
}]));

const aliases = new Map(Object.entries(LEGAL_ALIASES).map(([path, id]) => {
  const target = canonicalPages.get(`/legal/${id}`);
  return [path, { ...target, path, canonical: target.canonical, index: false }];
}));

export const INDEXABLE_ROUTES = [...canonicalPages.keys()];
export const PRERENDER_ROUTES = [...INDEXABLE_ROUTES, ...aliases.keys()];

export function getSeo(path) {
  return canonicalPages.get(path) || aliases.get(path) || {
    path, title: 'Page not found | Movement Markets',
    description: 'This Movement Markets page could not be found.',
    canonical: null, index: false,
  };
}
