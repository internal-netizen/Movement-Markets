// BandEducation — Education & resources teaser.
// Follows the project's band pattern: theme prop + per-theme S style objects.

const RESOURCES = [
  {
    tag: 'Getting started',
    title: 'How to open and fund your first account',
    desc: 'Step-by-step walkthrough from registration to your first trade in under an hour.',
    readTime: '5 min read',
    href: '/accounts',
  },
  {
    tag: 'Risk management',
    title: 'Understanding leverage and margin requirements',
    desc: 'Clear explanations of how leverage works, when margin calls happen, and how to manage risk.',
    readTime: '8 min read',
    href: '/insights/leverage-and-margin-explained',
  },
  {
    tag: 'Platforms',
    title: 'MetaTrader 5 vs WebTrader: which is right for you?',
    desc: 'Side-by-side comparison of both platforms across execution, charting and automation.',
    readTime: '6 min read',
    href: '/platforms',
  },
  {
    tag: 'Markets',
    title: 'Trading forex majors: spreads, sessions and timing',
    desc: 'When liquidity peaks, how session overlaps affect spreads, and the best times to trade major pairs.',
    readTime: '7 min read',
    href: '/insights/forex-sessions-and-volatility',
  },
];

const ARROW_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const S = {
  outer: { padding: '80px 40px', boxSizing: 'border-box' },
  inner: { width: 'min(1200px, 100%)', margin: '0 auto' },
  header: { display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '48px' },
  eyebrow: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' },
  dot: { width: '8px', height: '8px', borderRadius: '999px', background: 'rgb(176,240,0)', flexShrink: 0 },
  eyebrowText: {
    dark:  { fontSize: '13px', letterSpacing: '0.1em', color: 'rgb(176,240,0)', textTransform: 'uppercase' },
    light: { fontSize: '13px', letterSpacing: '0.1em', color: 'rgb(110,138,15)', textTransform: 'uppercase' },
  },
  headline: {
    dark:  { fontSize: 'clamp(26px,3.5vw,40px)', letterSpacing: '-0.03em', color: 'rgb(244,244,244)', lineHeight: 1.2, margin: 0 },
    light: { fontSize: 'clamp(26px,3.5vw,40px)', letterSpacing: '-0.03em', color: 'rgb(17,14,23)',    lineHeight: 1.2, margin: 0 },
  },
  viewAllBtn: {
    dark:  { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '11px 20px', background: 'transparent', border: '1px solid rgb(50,50,50)', borderRadius: '10px', color: 'rgb(176,240,0)', fontSize: '14px', fontWeight: '600', textDecoration: 'none', whiteSpace: 'nowrap' },
    light: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '11px 20px', background: 'transparent', border: '1px solid rgb(175,210,40)', borderRadius: '10px', color: 'rgb(110,138,15)', fontSize: '14px', fontWeight: '600', textDecoration: 'none', whiteSpace: 'nowrap' },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '20px',
  },
  card: {
    dark:  { background: 'rgb(16,16,16)', border: '1px solid rgb(28,28,28)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px', textDecoration: 'none' },
    light: { background: '#fff', border: '1px solid rgb(221,225,238)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px', textDecoration: 'none' },
  },
  tag: {
    dark:  { display: 'inline-block', fontSize: '11px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgb(176,240,0)', background: 'rgba(176,240,0,0.08)', borderRadius: '6px', padding: '3px 10px' },
    light: { display: 'inline-block', fontSize: '11px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgb(90,120,10)', background: 'rgba(110,138,15,0.08)', borderRadius: '6px', padding: '3px 10px' },
  },
  cardTitle: {
    dark:  { fontSize: '16px', fontWeight: '700', letterSpacing: '-0.02em', color: 'rgb(230,230,230)', lineHeight: '1.4', margin: 0 },
    light: { fontSize: '16px', fontWeight: '700', letterSpacing: '-0.02em', color: 'rgb(17,14,23)',    lineHeight: '1.4', margin: 0 },
  },
  cardDesc: {
    dark:  { fontSize: '13px', lineHeight: '1.65', color: 'rgb(110,110,110)', margin: 0 },
    light: { fontSize: '13px', lineHeight: '1.65', color: 'rgb(98,104,133)',  margin: 0 },
  },
  cardFooter: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '8px' },
  readTime: {
    dark:  { fontSize: '12px', color: 'rgb(80,80,80)' },
    light: { fontSize: '12px', color: 'rgb(150,158,180)' },
  },
  arrowLink: {
    dark:  { color: 'rgb(176,240,0)' },
    light: { color: 'rgb(110,138,15)' },
  },
};

export default function BandEducation({ theme = 'dark' }) {
  return (
    <div style={S.outer}>
      <div style={S.inner}>
        <div style={S.header}>
          <div>
            <div style={S.eyebrow}>
              <span style={S.dot} />
              <span style={S.eyebrowText[theme]}>Education</span>
            </div>
            <h2 style={S.headline[theme]}>Trade smarter,<br />not just faster</h2>
          </div>
          <a href="/insights" style={S.viewAllBtn[theme]}>
            View all guides {ARROW_ICON}
          </a>
        </div>
        <div className="mb-grid" style={S.grid}>
          {RESOURCES.map((r) => (
            <a key={r.href} href={r.href} style={S.card[theme]}>
              <span style={S.tag[theme]}>{r.tag}</span>
              <h3 style={S.cardTitle[theme]}>{r.title}</h3>
              <p style={S.cardDesc[theme]}>{r.desc}</p>
              <div style={S.cardFooter}>
                <span style={S.readTime[theme]}>{r.readTime}</span>
                <span style={S.arrowLink[theme]}>{ARROW_ICON}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}