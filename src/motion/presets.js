/**
 * Selector sets for the scroll-motion layer, one per page.
 *
 * These are module constants so their identity is stable across renders — the
 * layer's effect is keyed on the preset object.
 *
 * A note for anyone extending the v2 preset: on the design page, geometry
 * selectors (padding, border-radius, font-size, gap, width, grid-template) are
 * stable across the dark and light halves, but COLOUR is not — the two themes
 * use different rgb() values, so a colour substring matches one theme only.
 * The single exception is the brand lime rgb(176,240,0).
 */

export const V1 = {
  headings: [
    '.hero-copy h1',
    '.movement-bento-heading h2',
    '.section-heading h2',
    '.journey-intro h2',
    '.story-intro-copy h2',
    '.story-exit h2',
    '.report-board h2',
    '.platform-copy h2',
    '.funding-copy h2',
    '.cta-panel h2',
  ],
  groups: [
    '.movement-bento-grid',
    '.platform-grid',
    '.steps-grid',
    '.toc-card-grid',
    '.access-grid',
    '.achievement-grid',
    '.rates-table',
  ],
  cards: [
    '.bento-card',
    '.metric-card',
    '.tech-card',
    '.figure-card',
    '.platform-card',
    '.steps-grid article',
    '.toc-card-grid > a',
    '.deposit-card',
    '.access-data',
    '.rates-card',
  ],
  counters: [
    '.figure-card strong',
    '.metric-card strong',
    '.access-bar strong',
    '.terminal-bottom strong',
    '.amount-box strong',
    '.floating-status small',
  ],
  images: ['.report-board img'],
  scrub: ['.rates-card', '.funding-visual', '.deposit-card'],
  extras: false,
};

export const V2 = {
  headings: [
    '[data-fit="1200"] div[style*="font-size: 56px"]',
    '[data-fit="1200"] div[style*="font-size: 52px"]',
    '[data-fit="1200"] div[style*="font-size: 50px"]',
    'div[style*="clamp(30px, 4vw, 44px)"]',
    'div[style*="clamp(36px, 5vw, 64px)"]',
    'div[style*="font-size: 25px"]',
    '.gh-title',
    '.gh-sub',
  ],
  groups: [
    'div[style*="minmax(280px, 1fr)"]',
    'div[style*="minmax(400px, 1fr)"]',
    'div[style*="repeat(3, 64px)"]',
    'div[style*="margin-top: 44px"][style*="flex-wrap: wrap"]',
    'div[style*="gap: 14px 26px"]',
    '[data-screen-label="01"] div[style*="flex: 1 1 0%"][style*="gap: 14px"]',
    '[data-screen-label="02"] div[style*="height: 124px"]',
    '[data-screen-label="03"] div[style*="height: 196px"]',
    '[data-screen-label="05"] div[style*="gap: 12px"][style*="margin-top: 22px"]',
    '[data-screen-label="08"] div[style*="height: 212px"]',
    'div[style*="margin-top: 40px"][style*="gap: 18px"]',
    'div[style*="padding-top: 34px"][style*="gap: 20px 40px"]',
  ],
  cards: [
    'div[style*="minmax(280px, 1fr)"] > div',
    'div[style*="minmax(400px, 1fr)"] > div',
    '[data-screen-label="01"] div[style*="border-radius: 22px"]',
    '[data-screen-label="02"] div[style*="border-radius: 14px"][style*="padding: 16px 18px"]',
    '[data-screen-label="03"] div[style*="border-radius: 20px"][style*="padding: 20px 22px"]',
    '[data-screen-label="04"] div[style*="border-radius: 20px"][style*="padding: 20px 22px"]',
    '[data-screen-label="05"] div[style*="border-radius: 16px"][style*="padding: 14px 20px"]',
    '[data-screen-label="08"] div[style*="border-radius: 20px"][style*="padding: 18px 20px"]',
    '.gh-card',
  ],
  // A hand-written allowlist, never a font-size heuristic: the page is full of
  // leaf divs that parse as numbers but must not animate — "01"/"02" would
  // flicker through 0, "-5" would lose its minus, and "Nov. 10" is a date.
  counters: [
    '[data-screen-label="01"] div[style*="font-size: 30px"][style*="font-weight: 600"]',
    '[data-screen-label="03"] div[style*="font-size: 54px"]',
    '[data-screen-label="05"] div[style*="font-size: 30px"][style*="font-weight: 600"]',
    '.gh-trust-copy b',
  ],
  // The hatch panels, minus the round support avatars: a clip-path inset would
  // square off their border-radius: 999px.
  images: ['div[style*="repeating-linear-gradient(135deg"]:not([style*="border-radius: 999px"])'],
  // Deliberately excludes every [data-fit] frame: those are fixed-ratio
  // overflow:hidden boxes around a canvas that does not scale with them, so
  // scaling the frame would open a background gap.
  scrub: [
    'div[style*="border-radius: 30px"][style*="padding: clamp(48px, 6vw, 86px)"]',
    'div[style*="minmax(400px, 1fr)"] > div',
    'div[style*="minmax(280px, 1fr)"] > div',
    '[data-screen-label="05"] div[style*="border-radius: 16px"][style*="padding: 14px 20px"]',
  ],
  extras: true,
};
