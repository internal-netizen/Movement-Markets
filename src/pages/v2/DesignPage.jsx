import Nav from './bands/Nav.jsx';
import Band01 from './bands/Band01.jsx';
import Band02 from './bands/Band02.jsx';
import Band05 from './bands/Band05.jsx';
import Band06 from './bands/Band06.jsx';
import Band07 from './bands/Band07.jsx';
import Band09 from './bands/Band09.jsx';
import Band12 from './bands/Band12.jsx';
import Band13 from './bands/Band13.jsx';
import BandAccounts from './bands/BandAccounts.jsx';
import BandSpreads from './bands/BandSpreads.jsx';
import BandPlatformDeep from './bands/BandPlatformDeep.jsx';
import BandFunding from './bands/BandFunding.jsx';
import BandWhyUs from './bands/BandWhyUs.jsx';
import BandEducation from './bands/BandEducation.jsx';

/**
 * The design page, as components.
 *
 * The dark and light cuts share one structure and differ only in inline style
 * values, so each band takes a  and reads its own style table.
 *
 * Bands are addressed by key rather than position, so the page order is data:
 * pass  to arrange them,  to hold a band on one theme whatever the
 * page is set to.
 */
const BANDS = {
  trust: Band01,
  bento: Band02,      // "What you'll get" — bento feature grid
  metrics: Band05,    // availability + execution targets
  technology: Band06, // liquidity routing, connected platforms
  markets: Band07,    // forex / indices / shares coverage
  responsibility: Band09,
  manifesto: Band12,  // Human. Precise. Fast. Ahead.
  cta: Band13,
  // --- new forex-broker bands ---
  accounts: BandAccounts,       // account type comparison cards
  spreads: BandSpreads,         // indicative spreads table
  platformDeep: BandPlatformDeep, // FIX API / WebTrader / Mobile deep-dive
  funding: BandFunding,         // deposit & withdrawal methods
  whyUs: BandWhyUs,             // differentiator pillars
  education: BandEducation,     // learn / resources teaser
};

/** Landing-page order: conversion-optimised funnel.
 *  Hero → trust → features → markets → accounts → spreads → platforms
 *  → why us → testimonials → regulation → funding → education → CTA */
export const HOME_ORDER = [
  // Hero (Band01 = trust/stats strip)
  'trust',
  // Bento feature overview
  'bento',
  // Markets coverage
  'markets',
  // New: account types comparison
  'accounts',
  // New: indicative spreads table
  'spreads',
  // New: platform deep-dive
  'platformDeep',
  // Tech / execution proof
  'technology', 'metrics',
  // New: why Movement Markets
  'whyUs',
  // New: funding methods
  'funding',
  // Responsibility / safe trading
  'responsibility',
  // New: education teaser
  'education',
  // Brand manifesto
  'manifesto',
  // Final CTA
  'cta',
];

const PAGE_BACKGROUND = { dark: '#0c0c0c', light: '#f2f6fa' };

const SECTION_IDS = {
  markets: 'markets',
  platformDeep: 'platforms',
  accounts: 'pricing',
  whyUs: 'company',
  funding: 'funding',
};

export default function DesignPage({
  theme = 'dark',
  order = HOME_ORDER,
  pin = {},
  themes = null,
  nav = true,
  hero = null,
}) {
  return (
    <>
      {nav ? <Nav theme={theme} /> : null}
      {hero}
      {order.map((key, i) => {
        const Band = BANDS[key];
        if (!Band) return null;
        const base = themes ? themes[i] : theme;
        const bandTheme = pin[key] ?? base;
        const sectionId = SECTION_IDS[key];
        const needsGround = Boolean(themes) || bandTheme !== theme;
        return (
          <div
            key={key}
            id={sectionId}
            data-band={key}
            style={needsGround ? { background: PAGE_BACKGROUND[bandTheme] } : undefined}
          >
            <Band theme={bandTheme} />
          </div>
        );
      })}
    </>
  );
}
