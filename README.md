# Movement Markets

A local, editable rebuild of the deployed landing site at
`movement-markets.komalfulwar47.chatgpt.site`, turned into a plain
**Vite + React + React Router** project.

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Routes

| Path     | Page                    |
| -------- | ----------------------- |
| `/`      | `src/pages/Home.jsx`    |
| `/login` | `src/pages/Login.jsx`   |

## Layout

```
public/                 favicon + the three sculpture images
src/
  main.jsx              app entry (router + stylesheet)
  App.jsx               routes and per-route document titles
  pages/
    Home.jsx            composes the landing sections in order
    Login.jsx           split art panel + credential form
  components/
    SiteHeader.jsx      brand, nav, auth actions, mobile menu
    Hero.jsx            headline, trade terminal mock, trust row, manifesto
    MarketsBento.jsx    "what you will get" bento grid
    MovementJourney.jsx scroll-driven four-step route (interactive)
    ReportSuite.jsx     the long scroll story boards
    PricingPreview.jsx  indicative spreads table
    Platforms.jsx       MT5 / cTrader platform line-up
    Funding.jsx         funding + withdrawals
    OpenAccount.jsx     three-step onboarding
    CtaPanel.jsx        closing call to action
    SiteFooter.jsx      sitemap, risk notice, legal line
    ScrollExperience.jsx  reveal-on-scroll + parallax custom properties
    KeycapButton.jsx    React shell for the WebGL keycap (lazy mount, a11y, sound)
    keycap/keycapScene.js  the three.js scene itself
    icons.jsx           inline Lucide icon stand-ins (no icon dependency)
  styles/
    site.css            the site stylesheet (Tailwind v4 build output, expanded)
    keycap.css          stage, vignette and caption for the keycap
```

## The keycap

The closing CTA panel is built around a pressable WebGL keycap, adapted from a
standalone "Keycap — WebGL hero" sketch. Press it (pointer, or focus it and hit
Enter/Space) and it routes to `/login`; the pill button below it is the path for
anyone without WebGL.

Restyled to the brand: the hero cap is an acid `#c9f01e`, the top legend is the
Movement Markets mark, the front wall reads "Trade the Move", the side strip
reads `EXECUTION / <30MS`, and the surrounding caps carry the manifesto words —
human, precise, fast, ahead, move. The canvas paints the same ink as
`.cta-panel` and a CSS vignette fades its edges, so it reads as part of the panel.

The caps ring the hero rather than sitting on a grid (`RING` / `OUTER` in
`keycapScene.js`), leaning outward at jittered angles so the cluster reads as a
pile. 0 degrees is deliberately left empty so nothing crosses the hero's front
legend. The stage is portrait (4:5) with the camera 42 degrees above the horizon.

Practicalities:

- three.js is pinned to **r128**, matching the sketch's pre-colour-management
  renderer API (`outputEncoding` / `sRGBEncoding`). Upgrading means porting the
  scene to `outputColorSpace` and retuning every light for physical units.
- Because the renderer outputs Linear and a gamma pass closes the chain, material
  colours are read as **linear**. Brand hexes are sRGB, so they go through
  `srgb()` on the way in — without it gamma lifts the dark channels and bleaches
  the acid cap toward pale sage.
- The scene is dynamically imported, so it downloads only when the panel nears
  the viewport, and the render loop stops whenever the panel scrolls away or the
  tab is hidden. Everything is disposed on unmount.
- Clicks make a mechanical key sound; the caption carries a sound toggle. Audio
  only ever starts from a press, so nothing plays unprompted.

### Standalone copy

`keycap-standalone.html` at the repo root is the same scene as a single
self-contained page — three.js and its post-processing passes load from jsDelivr,
the scene source is inlined, and it needs no build step. Open it directly in a
browser or upload it anywhere that takes an HTML file. Set the `TARGET` const at
the top of its script to make the key press navigate; it is `"#"` by default.

Regenerate it after changing the scene, since it carries its own copy of the
source.

## How this was produced

- The deployed pages were downloaded and their server-rendered markup converted
  into JSX components, split along the section boundaries of the original page.
  Class names, ids, copy, inline SVG and ARIA attributes are unchanged, so the
  stylesheet applies exactly as it does in production.
- `MovementJourney` and `ScrollExperience` are the two behavioural pieces. They
  were reconstructed from the site's own client chunks and read the same custom
  properties (`--wave-slide`, `--wave-lift`, `--wave-dash`, `--drift`,
  `--hero-copy-shift`, `--hero-terminal-shift`) that `site.css` animates.
- `styles/site.css` is the production stylesheet expanded back to a readable,
  editable form. It is a Tailwind v4 build, so it carries the design-system
  utilities alongside the hand-written component rules; there is no Tailwind
  build step wired up here, so edit the CSS directly.

## Differences from the deployed site

- The deployed site is server-rendered per route; this is a client-side SPA.
- The login form is a local mock — inputs are controlled and submitting is a
  no-op, since there is no auth backend.
- The three `<link rel="preload">` image hints were dropped: those images sit far
  below the fold and the browser warns about the unused preloads.
