// BandAccounts — Account type tier comparison.
// Follows the project's band pattern: theme prop + per-theme S style objects.

const ACCOUNTS = [
  {
    name: 'Standard',
    badge: null,
    tagline: 'Best for getting started',
    minDeposit: '$50',
    spread: 'From 1.0 pip',
    commission: 'No commission',
    leverage: 'Up to 1:500',
    platforms: 'XT · WebTrader',
    support: '24/7 desk',
    cta: 'Open Standard',
  },
  {
    name: 'Raw',
    badge: 'Most popular',
    tagline: 'For active traders',
    minDeposit: '$1,000',
    spread: 'From 0.0 pips',
    commission: 'From $3 / lot per side',
    leverage: 'Up to 1:500',
    platforms: 'XT · WebTrader',
    support: 'Named dealer',
    cta: 'Open Raw',
  },
  {
    name: 'Institutional',
    badge: null,
    tagline: 'Prime access & custom terms',
    minDeposit: '$20,000',
    spread: 'Raw interbank',
    commission: 'From $5 / lot per side',
    leverage: 'Up to 1:200',
    platforms: 'XT · WebTrader · FIX',
    support: 'Dedicated desk',
    cta: 'Get in touch',
  },
];

const ROWS = [
  { key: 'minDeposit', label: 'Min. deposit' },
  { key: 'spread',     label: 'Spread' },
  { key: 'commission', label: 'Commission' },
  { key: 'leverage',   label: 'Leverage' },
  { key: 'platforms',  label: 'Platforms' },
  { key: 'support',    label: 'Support' },
];

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
    dark:  { textAlign: 'center', fontSize: '15px', lineHeight: '1.6', color: 'rgb(138,138,138)', marginBottom: '56px', maxWidth: '520px', margin: '0 auto 56px' },
    light: { textAlign: 'center', fontSize: '15px', lineHeight: '1.6', color: 'rgb(98,104,133)',  marginBottom: '56px', maxWidth: '520px', margin: '0 auto 56px' },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    alignItems: 'start',
  },
  card: {
    dark: {
      background: 'linear-gradient(160deg, rgb(20,20,20) 0%, rgb(14,14,14) 100%)',
      border: '1px solid rgb(38,38,38)', borderRadius: '24px', overflow: 'hidden',
    },
    light: {
      background: '#fff',
      border: '1px solid rgb(221,225,238)', borderRadius: '24px', overflow: 'hidden',
    },
    pro_dark: {
      background: 'linear-gradient(160deg, rgb(30,38,12) 0%, rgb(18,24,6) 100%)',
      border: '1px solid rgb(176,240,0)', borderRadius: '24px', overflow: 'hidden',
    },
    pro_light: {
      background: 'linear-gradient(160deg, rgb(241,255,215) 0%, rgb(230,250,190) 100%)',
      border: '1px solid rgb(175,210,40)', borderRadius: '24px', overflow: 'hidden',
    },
  },
  cardHead: { padding: '28px 28px 24px' },
  badgePill: {
    dark:  { display: 'inline-block', background: 'rgb(176,240,0)', color: 'rgb(12,12,12)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 12px', marginBottom: '14px' },
    light: { display: 'inline-block', background: 'rgb(110,138,15)', color: '#fff',          fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 12px', marginBottom: '14px' },
  },
  accountName: {
    dark:  { fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', color: 'rgb(244,244,244)', marginBottom: '6px' },
    light: { fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', color: 'rgb(17,14,23)',    marginBottom: '6px' },
  },
  tagline: {
    dark:  { fontSize: '13px', color: 'rgb(138,138,138)' },
    light: { fontSize: '13px', color: 'rgb(98,104,133)'  },
  },
  divider: {
    dark:  { height: '1px', background: 'rgb(38,38,38)',    margin: '0 28px' },
    light: { height: '1px', background: 'rgb(221,225,238)', margin: '0 28px' },
  },
  rows: { padding: '20px 28px' },
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0', gap: '12px' },
  rowLabel: {
    dark:  { fontSize: '13px', color: 'rgb(138,138,138)' },
    light: { fontSize: '13px', color: 'rgb(98,104,133)'  },
  },
  rowValue: {
    dark:  { fontSize: '13px', fontWeight: 600, color: 'rgb(220,220,220)', textAlign: 'right' },
    light: { fontSize: '13px', fontWeight: 600, color: 'rgb(30,30,30)',    textAlign: 'right' },
  },
  rowDivider: {
    dark:  { borderBottom: '1px solid rgb(30,30,30)' },
    light: { borderBottom: '1px solid rgb(240,242,248)' },
  },
  ctaWrap: { padding: '20px 28px 28px' },
  ctaBtn: {
    dark:  { boxSizing: 'border-box', display: 'block', width: '100%', padding: '14px', background: 'rgb(176,240,0)', color: 'rgb(12,12,12)', fontWeight: 700, fontSize: '14px', borderRadius: '12px', textAlign: 'center', cursor: 'pointer', border: 'none', letterSpacing: '-0.01em', textDecoration: 'none' },
    light: { boxSizing: 'border-box', display: 'block', width: '100%', padding: '14px', background: 'rgb(176,240,0)', color: 'rgb(12,12,12)', fontWeight: 700, fontSize: '14px', borderRadius: '12px', textAlign: 'center', cursor: 'pointer', border: 'none', letterSpacing: '-0.01em', textDecoration: 'none' },
    dark_ghost:  { boxSizing: 'border-box', display: 'block', width: '100%', padding: '14px', background: 'transparent', color: 'rgb(176,240,0)', fontWeight: 600, fontSize: '14px', borderRadius: '12px', textAlign: 'center', cursor: 'pointer', border: '1px solid rgb(60,60,60)', letterSpacing: '-0.01em', textDecoration: 'none' },
    light_ghost: { boxSizing: 'border-box', display: 'block', width: '100%', padding: '14px', background: 'transparent', color: 'rgb(110,138,15)', fontWeight: 600, fontSize: '14px', borderRadius: '12px', textAlign: 'center', cursor: 'pointer', border: '1px solid rgb(175,210,40)', letterSpacing: '-0.01em', textDecoration: 'none' },
  },
};

export default function BandAccounts({ theme = 'dark' }) {
  return (
    <div style={S.outer}>
      <div style={S.inner}>
        <div style={S.eyebrow}>
          <span style={S.dot} />
          <span style={S.eyebrowText[theme]}>Account Types</span>
        </div>
        <h2 style={S.headline[theme]}>Find your fit</h2>
        <p style={S.sub[theme]}>
          From first trade to institutional scale — every account on the same infrastructure, different terms.
        </p>
        <div className="mb-grid" style={S.grid}>
          {ACCOUNTS.map((acc) => {
            const isPro = acc.name === 'Raw';
            const cardStyle = isPro ? S.card[`pro_${theme}`] : S.card[theme];
            const btnStyle  = isPro ? S.ctaBtn[theme] : S.ctaBtn[`${theme}_ghost`];
            return (
              <div key={acc.name} style={cardStyle}>
                <div style={S.cardHead}>
                  {acc.badge && <div style={S.badgePill[theme]}>{acc.badge}</div>}
                  <div style={S.accountName[theme]}>{acc.name}</div>
                  <div style={S.tagline[theme]}>{acc.tagline}</div>
                </div>
                <div style={S.divider[theme]} />
                <div style={S.rows}>
                  {ROWS.map((row, i) => (
                    <div key={row.key} style={{ ...S.row, ...(i < ROWS.length - 1 ? S.rowDivider[theme] : {}) }}>
                      <span style={S.rowLabel[theme]}>{row.label}</span>
                      <span style={S.rowValue[theme]}>{acc[row.key]}</span>
                    </div>
                  ))}
                </div>
                <div style={S.divider[theme]} />
                <div style={S.ctaWrap}>
                  <a href="/login" style={btnStyle}>{acc.cta}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
