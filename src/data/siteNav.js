/**
 * The site's information architecture — one tree that feeds the header
 * dropdowns, the mobile menu and the footer columns, so a page added here
 * shows up everywhere at once.
 */
export const NAV = [
  {
    label: 'Trading',
    columns: [
      {
        title: 'Markets',
        links: [
          { to: '/markets/forex', label: 'Forex', hint: '60+ currency pairs' },
          { to: '/markets/indices', label: 'Indices', hint: 'Global stock indices' },
          { to: '/markets/commodities', label: 'Metals & Energy', hint: 'Gold, silver, oil, gas' },
          { to: '/markets/shares', label: 'Shares', hint: 'US & EU share CFDs' },
          { to: '/markets/crypto', label: 'Crypto', hint: 'Trade 24/7' },
          { to: '/markets', label: 'All markets', hint: 'Overview', muted: true },
        ],
      },
      {
        title: 'Platforms',
        links: [
          { to: '/platforms/metatrader-5', label: 'MetaTrader 5', hint: 'Desktop, web & mobile' },
          { to: '/platforms/webtrader', label: 'Movement WebTrader', hint: 'Trade in the browser' },
          { to: '/platforms', label: 'Compare platforms', hint: 'Which one fits', muted: true },
        ],
      },
      {
        title: 'Accounts',
        links: [
          { to: '/accounts', label: 'Account types', hint: 'Standard & Raw' },
          { to: '/accounts#compare', label: 'Spreads & commissions', hint: 'Full comparison' },
          { to: '/accounts#funding', label: 'Deposits & withdrawals', hint: 'Fast, fee-free funding' },
          { to: '/login', label: 'Open an account', hint: 'Takes a few minutes', muted: true },
        ],
      },
    ],
  },
  {
    label: 'Tools',
    columns: [
      {
        title: 'Market tools',
        links: [
          { to: '/tools/economic-calendar', label: 'Economic calendar', hint: 'Upcoming data releases' },
          { to: '/tools/market-hours', label: 'Market hours', hint: 'Sessions, live status & holidays' },
          { to: '/tools/calculators', label: 'Trading calculators', hint: 'Pip, position size, margin, P/L, pivots' },
        ],
      },
      {
        title: 'Learn',
        links: [
          { to: '/insights', label: 'Insights', hint: 'Guides for traders' },
          { to: '/help', label: 'Help centre', hint: 'Answers by topic' },
          { to: '/tools', label: 'All tools', hint: 'Overview', muted: true },
        ],
      },
    ],
  },
  {
    label: 'Company',
    columns: [
      {
        title: 'Movement Markets',
        links: [
          { to: '/about', label: 'About us', hint: 'Who we are and how we work' },
          { to: '/contact', label: 'Contact', hint: 'Support, 24/7' },
          { to: '/partners', label: 'Partners', hint: 'Introducing broker programme' },
          { to: '/legal', label: 'Legal', hint: 'Agreements, policies & disclosures' },
        ],
      },
    ],
  },
  { label: 'Partners', to: '/partners' },
];

/** Every route in the tree, flat — used for the footer and for title lookups. */
export function flattenNav() {
  const out = [];
  for (const item of NAV) {
    if (item.to) out.push({ to: item.to, label: item.label });
    for (const col of item.columns ?? []) for (const l of col.links) out.push(l);
  }
  return out;
}
