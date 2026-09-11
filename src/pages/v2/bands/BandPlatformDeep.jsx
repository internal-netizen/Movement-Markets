// BandPlatformDeep — Platform deep-dive (FIX API / WebTrader / Mobile).
// Follows the project's band pattern: theme prop + per-theme S style objects.

const PLATFORMS = [
  {
    id: 'fix-api',
    name: 'FIX API',
    badge: 'Institutional execution',
    description: 'Direct market access over a FIX session. Low-latency connectivity for desks that run their own execution, risk and order management against our liquidity.',
    features: ['FIX 4.4 order and market data', 'Low-latency routing', 'Full depth of book', 'Bring your own OMS or EMS', 'Dedicated integration support'],
    cta: 'Talk to the desk',
    href: '/contact',
  },
  {
    id: 'webtrader',
    name: 'WebTrader',
    badge: 'No download',
    description: 'A full trading terminal in your browser. Your account, raw pricing and the same execution engine, on whatever machine is in front of you.',
    features: ['Nothing to install', 'One-click trading', 'Positions sync in real time', 'Two-factor login'],
    cta: 'Launch WebTrader',
    href: '/platforms/webtrader',
  },
  {
    id: 'mobile',
    name: 'Mobile Trading',
    badge: 'Always on',
    description: 'Full trading functionality on iOS and Android. Manage positions, receive alerts, and execute instantly — wherever you are in the world.',
    features: ['iOS & Android native apps', 'Push notifications & alerts', 'Biometric login', 'Full order management', 'Live charts & watchlists'],
    cta: 'Get the apps',
    href: '/platforms',
  },
];

const CHECK_ICON = (color) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const S = {
  outer: { padding: '80px 40px', boxSizing: 'border-box' },
  inner: { width: 'min(1200px, 100%)', margin: '0 auto' },
  eyebrow: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '14px' },
  dot: { width: '8px', height: '8px', borderRadius: '999px', background: 'rgb(176,240,0)', flexShrink: 0 },
  eyebrowText: {
    dark:  { fontSize: '13px', letterSpacing: '0.1em', color: 'rgb(176,240,0)', textTransform: 'uppercase' },
    light: { fontSize: '13px', letterSpacing: '0.1em', color: 'rgb(110,138,15)', textTransform: 'uppercase' },
  },
  headline: {
    dark:  { textAlign: 'center', fontSize: 'clamp(28px,3.5vw,42px)', letterSpacing: '-0.03em', color: 'rgb(244,244,244)', marginBottom: '10px', lineHeight: 1.2 },
    light: { textAlign: 'center', fontSize: 'clamp(28px,3.5vw,42px)', letterSpacing: '-0.03em', color: 'rgb(17,14,23)',    marginBottom: '10px', lineHeight: 1.2 },
  },
  sub: {
    dark:  { textAlign: 'center', fontSize: '15px', lineHeight: '1.6', color: 'rgb(138,138,138)', maxWidth: '520px', margin: '0 auto 56px' },
    light: { textAlign: 'center', fontSize: '15px', lineHeight: '1.6', color: 'rgb(98,104,133)',  maxWidth: '520px', margin: '0 auto 56px' },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    dark:  { background: 'linear-gradient(160deg, rgb(18,18,18) 0%, rgb(12,12,12) 100%)', border: '1px solid rgb(32,32,32)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '0' },
    light: { background: '#fff', border: '1px solid rgb(221,225,238)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '0' },
  },
  cardBadge: {
    dark:  { display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgb(176,240,0)', color: 'rgb(12,12,12)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 10px', marginBottom: '18px', alignSelf: 'flex-start' },
    light: { display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgb(176,240,0)', color: 'rgb(12,12,12)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 10px', marginBottom: '18px', alignSelf: 'flex-start' },
  },
  cardName: {
    dark:  { fontSize: '22px', fontWeight: '700', letterSpacing: '-0.02em', color: 'rgb(244,244,244)', marginBottom: '12px' },
    light: { fontSize: '22px', fontWeight: '700', letterSpacing: '-0.02em', color: 'rgb(17,14,23)',    marginBottom: '12px' },
  },
  cardDesc: {
    dark:  { fontSize: '14px', lineHeight: '1.65', color: 'rgb(130,130,130)', marginBottom: '24px' },
    light: { fontSize: '14px', lineHeight: '1.65', color: 'rgb(98,104,133)',  marginBottom: '24px' },
  },
  featureList: { listStyle: 'none', margin: '0 0 28px', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' },
  featureItem: { display: 'flex', alignItems: 'center', gap: '10px' },
  featureText: {
    dark:  { fontSize: '13px', color: 'rgb(200,200,200)' },
    light: { fontSize: '13px', color: 'rgb(50,55,70)'   },
  },
  ctaBtn: {
    dark:  { marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 22px', background: 'transparent', border: '1px solid rgb(50,50,50)', borderRadius: '10px', color: 'rgb(176,240,0)', fontSize: '14px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', alignSelf: 'flex-start' },
    light: { marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 22px', background: 'transparent', border: '1px solid rgb(175,210,40)', borderRadius: '10px', color: 'rgb(110,138,15)', fontSize: '14px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', alignSelf: 'flex-start' },
  },
};

export default function BandPlatformDeep({ theme = 'dark' }) {
  const checkColor = theme === 'dark' ? 'rgb(176,240,0)' : 'rgb(110,138,15)';
  return (
    <div style={S.outer}>
      <div style={S.inner}>
        <div style={S.eyebrow}>
          <span style={S.dot} />
          <span style={S.eyebrowText[theme]}>Platforms</span>
        </div>
        <h2 style={S.headline[theme]}>Trade on the platform<br />built for your style</h2>
        <p style={S.sub[theme]}>
          Two terminals and the mobile apps, all connected to the same raw pricing and liquidity.
        </p>
        <div className="mb-grid" style={S.grid}>
          {PLATFORMS.map((p) => (
            <div key={p.id} style={S.card[theme]}>
              <div style={S.cardBadge[theme]}>{p.badge}</div>
              <div style={S.cardName[theme]}>{p.name}</div>
              <p style={S.cardDesc[theme]}>{p.description}</p>
              <ul style={S.featureList}>
                {p.features.map((f) => (
                  <li key={f} style={S.featureItem}>
                    {CHECK_ICON(checkColor)}
                    <span style={S.featureText[theme]}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={p.href} style={S.ctaBtn[theme]}>
                {p.cta}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}