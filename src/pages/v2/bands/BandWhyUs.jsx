// BandWhyUs — Why Movement Markets differentiators.
// Follows the project's band pattern: theme prop + per-theme S style objects.

const PILLARS = [
  {
    number: '01',
    title: 'Institutional pricing, no minimums',
    body: 'Raw interbank spreads from your first lot — the same feed institutional desks use, from a $50 deposit.',
    accent: true,
  },
  {
    number: '02',
    title: 'Named dealers, not bots',
    body: 'Every Raw and Institutional account gets a named dealer. A real person who knows your account, reachable 24/7.',
    accent: false,
  },
  {
    number: '03',
    title: 'Execution in about 12ms',
    body: 'Purpose-built infrastructure routes orders in milliseconds. Speed isn\'t a selling point — it\'s our baseline.',
    accent: false,
  },
  {
    number: '04',
    title: 'Terms you can read',
    body: 'The client agreement, order execution policy and risk disclosure are published in full, and they say what they mean.',
    accent: false,
  },
  {
    number: '05',
    title: 'Transparent, predictable costs',
    body: 'No hidden markups. No conversion fees on 20+ base currencies. Funding and rollover costs published in full.',
    accent: false,
  },
  {
    number: '06',
    title: 'One account, every market',
    body: 'Forex, metals, indices, energies, shares, and crypto CFDs — all from a single account and one margin pool.',
    accent: false,
  },
];

const S = {
  outer: { padding: '80px 40px', boxSizing: 'border-box' },
  inner: { width: 'min(1200px, 100%)', margin: '0 auto' },
  top: { display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px', marginBottom: '60px' },
  eyebrow: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' },
  dot: { width: '8px', height: '8px', borderRadius: '999px', background: 'rgb(176,240,0)', flexShrink: 0 },
  eyebrowText: {
    dark:  { fontSize: '13px', letterSpacing: '0.1em', color: 'rgb(176,240,0)', textTransform: 'uppercase' },
    light: { fontSize: '13px', letterSpacing: '0.1em', color: 'rgb(110,138,15)', textTransform: 'uppercase' },
  },
  headline: {
    dark:  { fontSize: 'clamp(28px,4vw,52px)', letterSpacing: '-0.04em', color: 'rgb(244,244,244)', lineHeight: 1.1, maxWidth: '560px', margin: 0 },
    light: { fontSize: 'clamp(28px,4vw,52px)', letterSpacing: '-0.04em', color: 'rgb(17,14,23)',    lineHeight: 1.1, maxWidth: '560px', margin: 0 },
  },
  subBlock: { maxWidth: '340px' },
  subText: {
    dark:  { fontSize: '15px', lineHeight: '1.65', color: 'rgb(138,138,138)', marginBottom: '28px' },
    light: { fontSize: '15px', lineHeight: '1.65', color: 'rgb(98,104,133)',  marginBottom: '28px' },
  },
  ctaBtn: {
    dark:  { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', background: 'rgb(176,240,0)', color: 'rgb(12,12,12)', fontWeight: '700', fontSize: '14px', borderRadius: '10px', textDecoration: 'none' },
    light: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', background: 'rgb(176,240,0)', color: 'rgb(12,12,12)', fontWeight: '700', fontSize: '14px', borderRadius: '10px', textDecoration: 'none' },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '2px',
  },
  pillar: {
    dark:  { borderTop: '1px solid rgb(28,28,28)', padding: '32px 4px 32px 0' },
    light: { borderTop: '1px solid rgb(221,225,238)', padding: '32px 4px 32px 0' },
  },
  pillarAccent: {
    dark:  { borderTop: '2px solid rgb(176,240,0)', padding: '32px 4px 32px 0' },
    light: { borderTop: '2px solid rgb(110,138,15)', padding: '32px 4px 32px 0' },
  },
  pillarNum: {
    dark:  { fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', color: 'rgb(60,60,60)', marginBottom: '16px' },
    light: { fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', color: 'rgb(180,188,200)', marginBottom: '16px' },
    accent_dark:  { fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', color: 'rgb(176,240,0)', marginBottom: '16px' },
    accent_light: { fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', color: 'rgb(110,138,15)', marginBottom: '16px' },
  },
  pillarTitle: {
    dark:  { fontSize: '18px', fontWeight: '700', letterSpacing: '-0.02em', color: 'rgb(230,230,230)', marginBottom: '10px', lineHeight: 1.3 },
    light: { fontSize: '18px', fontWeight: '700', letterSpacing: '-0.02em', color: 'rgb(17,14,23)',    marginBottom: '10px', lineHeight: 1.3 },
  },
  pillarBody: {
    dark:  { fontSize: '14px', lineHeight: '1.65', color: 'rgb(120,120,120)' },
    light: { fontSize: '14px', lineHeight: '1.65', color: 'rgb(98,104,133)'  },
  },
};

export default function BandWhyUs({ theme = 'dark' }) {
  return (
    <div style={S.outer}>
      <div style={S.inner}>
        <div style={S.top}>
          <div>
            <div style={S.eyebrow}>
              <span style={S.dot} />
              <span style={S.eyebrowText[theme]}>Why Movement Markets</span>
            </div>
            <h2 style={S.headline[theme]}>Built differently.<br />For traders who notice.</h2>
          </div>
          <div style={S.subBlock}>
            <p style={S.subText[theme]}>
              Every decision we make is optimised for the trader — not the margin sheet. Here's what that looks like in practice.
            </p>
            <a href="/login" style={S.ctaBtn[theme]}>
              Open account
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
        <div style={S.grid}>
          {PILLARS.map((p) => (
            <div key={p.number} style={p.accent ? S.pillarAccent[theme] : S.pillar[theme]}>
              <div style={p.accent ? S.pillarNum[`accent_${theme}`] : S.pillarNum[theme]}>{p.number}</div>
              <div style={S.pillarTitle[theme]}>{p.title}</div>
              <div style={S.pillarBody[theme]}>{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}