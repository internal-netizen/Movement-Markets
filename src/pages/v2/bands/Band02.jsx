// Band02 — "What you'll get" bento feature grid.
// Rebuilt: custom SVG icon set throughout, no emoji, improved copy,
// custom pair icon components, richer visual cards.

/* ─── Custom SVG icons ─────────────────────────────────────────────────── */
const Icon = {
  Spread: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" width="22" height="22">
      <path d="M3 18V9M8 18V5M13 18v-7M18 18V7" />
    </svg>
  ),
  Execution: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" />
    </svg>
  ),
  Scale: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4l3 3" />
    </svg>
  ),
  MT5: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <rect x="3" y="3" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 16v5" />
      <path d="M7 10l3-3 2 2 3-4" />
    </svg>
  ),
  cTrader: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 6.36 2.64" />
      <path d="M21 12a9 9 0 0 1-9 9" />
      <path d="M15 12H9l3-3m0 0 3 3m-3-3v6" />
    </svg>
  ),
  Mobile: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  API: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <path d="M8 6l-4 6 4 6M16 6l4 6-4 6M14 4l-4 16" />
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <circle cx="12" cy="12" r="9" />
      <path d="M2 12h20M12 2c-3 3-4.5 6-4.5 10s1.5 7 4.5 10M12 2c3 3 4.5 6 4.5 10s-1.5 7-4.5 10" />
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <path d="M12 3 20 6v6c0 4.5-3.2 7.7-8 9-4.8-1.3-8-4.5-8-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Support: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8A8.5 8.5 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 8.5 8.5Z" />
      <path d="M12 8v4l3 2" />
    </svg>
  ),
  Coins: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <circle cx="8" cy="8" r="5" />
      <path d="M19 15a5 5 0 0 1-5 5" />
      <path d="M14 10a5 5 0 0 1 5 5" />
      <path d="M6 13c2 .8 5 2.5 7 5" />
    </svg>
  ),
};

/* ─── Currency pair chip icon set ──────────────────────────────────────── */
const PairIcon = {
  EUR: () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="13" height="13">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="currentColor" fontFamily="system-ui,sans-serif">€</text>
    </svg>
  ),
  GBP: () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="13" height="13">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="currentColor" fontFamily="system-ui,sans-serif">£</text>
    </svg>
  ),
  USD: () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="13" height="13">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="currentColor" fontFamily="system-ui,sans-serif">$</text>
    </svg>
  ),
  XAU: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" width="13" height="13">
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

/* ─── Micro candlestick chart component ─────────────────────────────────── */
function MiniCandleChart({ theme }) {
  const accent = 'rgb(176,240,0)';
  const dim = theme === 'dark' ? 'rgba(176,240,0,0.25)' : 'rgba(110,138,15,0.25)';
  const candles = [
    { x: 4,  isUp: false, bodyH: 18, topWick: 4, botWick: 6 },
    { x: 18, isUp: true,  bodyH: 28, topWick: 5, botWick: 3 },
    { x: 32, isUp: false, bodyH: 12, topWick: 3, botWick: 8 },
    { x: 46, isUp: true,  bodyH: 34, topWick: 6, botWick: 2 },
    { x: 60, isUp: true,  bodyH: 22, topWick: 8, botWick: 4 },
    { x: 74, isUp: false, bodyH: 16, topWick: 4, botWick: 10 },
    { x: 88, isUp: true,  bodyH: 40, topWick: 5, botWick: 3 },
  ];
  const baseY = 90;
  return (
    <svg viewBox="0 0 104 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {candles.map((c) => {
        const bodyTop = baseY - (c.isUp ? c.bodyH : 0) - (c.isUp ? 0 : 0);
        const yStart = baseY - (c.isUp ? c.bodyH + c.topWick : c.topWick);
        const yEnd = baseY + c.botWick;
        const color = c.isUp ? accent : dim;
        return (
          <g key={c.x}>
            <line x1={c.x + 5} y1={yStart} x2={c.x + 5} y2={yEnd} stroke={color} strokeWidth="1.5" />
            <rect x={c.x} y={c.isUp ? baseY - c.bodyH : baseY} width="10" height={Math.max(c.bodyH, 2)} fill={color} rx="1.5" />
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Execution pulse animation card ───────────────────────────────────── */
function ExecutionCard({ theme }) {
  const styles = {
    wrap: { position: 'relative', height: '212px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '22px', boxSizing: 'border-box' },
    statusBar: {
      width: '82%',
      background: theme === 'dark' ? 'rgb(31,31,31)' : 'rgb(248,250,252)',
      border: `1px solid ${theme === 'dark' ? 'rgb(38,38,38)' : 'rgb(221,225,238)'}`,
      borderRadius: '16px',
      padding: '8px 14px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    dot: { width: '6px', height: '6px', borderRadius: '999px', background: 'rgb(138,138,138)', flexShrink: 0 },
    statusText: { fontSize: '8px', letterSpacing: '0.1em', color: theme === 'dark' ? 'rgb(138,138,138)' : 'rgb(98,104,133)' },
    card: {
      width: '100%',
      background: theme === 'dark' ? 'rgb(31,31,31)' : 'rgb(255,255,255)',
      border: `1px solid ${theme === 'dark' ? 'rgb(51,51,51)' : 'rgb(221,225,238)'}`,
      borderRadius: '18px',
      padding: '12px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      marginTop: '-8px',
      position: 'relative',
      zIndex: 2,
      boxShadow: theme === 'dark' ? 'rgba(0,0,0,0.45) 0px 12px 24px' : 'rgba(126,132,163,0.18) 0px 12px 24px',
    },
    iconBox: {
      width: '46px', height: '46px',
      borderRadius: '13px',
      background: theme === 'dark' ? 'rgb(15,15,15)' : 'rgb(239,243,249)',
      border: `1px solid ${theme === 'dark' ? 'rgb(38,38,38)' : 'rgb(221,225,238)'}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: theme === 'dark' ? 'rgb(176,240,0)' : 'rgb(110,138,15)',
      flex: '0 0 auto',
    },
    textGroup: { display: 'flex', flexDirection: 'column', gap: '3px' },
    newBadge: { display: 'flex', alignItems: 'center', gap: '6px' },
    newDot: { width: '6px', height: '6px', borderRadius: '999px', background: 'rgb(176,240,0)' },
    newText: { fontSize: '9px', letterSpacing: '0.08em', color: theme === 'dark' ? 'rgb(176,240,0)' : 'rgb(110,138,15)' },
    orderText: { fontSize: '16px', color: theme === 'dark' ? 'rgb(244,244,244)' : 'rgb(17,14,23)', letterSpacing: '-0.01em', fontWeight: 600 },
    timeText: { fontSize: '11px', color: theme === 'dark' ? 'rgb(138,138,138)' : 'rgb(98,104,133)' },
    latency: { marginTop: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' },
    latencyNum: { fontSize: '28px', fontWeight: 700, letterSpacing: '-0.04em', color: theme === 'dark' ? 'rgb(176,240,0)' : 'rgb(90,120,10)' },
    latencyLabel: { fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: theme === 'dark' ? 'rgb(80,80,80)' : 'rgb(150,158,180)' },
  };
  return (
    <div style={styles.wrap}>
      <div style={styles.statusBar}>
        <div style={styles.dot} />
        <div style={styles.statusText}>FILLED</div>
      </div>
      <div style={styles.card}>
        <div style={styles.iconBox}>
          <Icon.Execution />
        </div>
        <div style={styles.textGroup}>
          <div style={styles.newBadge}>
            <div style={styles.newDot} />
            <div style={styles.newText}>NEW</div>
          </div>
          <div style={styles.orderText}>Order executed</div>
          <div style={styles.timeText}>Today, 11:50:32 UTC</div>
        </div>
      </div>
      <div style={styles.latency}>
        <div style={styles.latencyNum}>12ms</div>
        <div style={styles.latencyLabel}>avg execution</div>
      </div>
    </div>
  );
}

/* ─── Platform grid card ─────────────────────────────────────────────────── */
const PLATFORM_ITEMS = [
  { label: 'MT5',       Icon: Icon.MT5 },
  { label: 'WebTrader', Icon: Icon.cTrader },
  { label: 'Mobile',    Icon: Icon.Mobile },
  { label: 'API / FIX', Icon: Icon.API },
  { label: 'Web',       Icon: Icon.Globe },
  { label: 'Custom',    Icon: Icon.Scale },
];

/* ─── Bottom tag pill data ───────────────────────────────────────────────── */
const FEATURE_PILLS = [
  { label: 'Raw spreads',         Icon: Icon.Spread },
  { label: 'Segregated funds',    Icon: Icon.Shield },
  { label: 'Named dealers',       Icon: Icon.Support },
  { label: 'Rollover clarity',    Icon: Icon.Coins },
  { label: 'Multi-platform',      Icon: Icon.MT5 },
  { label: 'Multilingual support',Icon: Icon.Globe },
  { label: 'Asset library 100+',  Icon: Icon.Scale },
];

/* ─── Pair chip data (bottom of spreads card) ────────────────────────────── */
const PAIRS = [
  { label: 'EUR/USD', Icon: PairIcon.EUR, spread: '0.2' },
  { label: 'GBP/USD', Icon: PairIcon.GBP, spread: '0.4' },
  { label: 'XAU/USD', Icon: PairIcon.XAU, spread: '0.15' },
];

/* ─── Styles ─────────────────────────────────────────────────────────────── */
const S = {
  s0: { padding: '120px 40px 0px', boxSizing: 'border-box' },
  s1: { width: 'min(1070px, 100%)', margin: '0px auto', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  eyebrowRow: { display: 'flex', alignItems: 'center', gap: '9px' },
  eyebrowDot: { width: '19px', height: '19px', borderRadius: '999px', background: 'rgb(176,240,0)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(12,12,12)', fontSize: '11px', lineHeight: '1', flexShrink: 0 },
  eyebrowText: {
    dark:  { fontSize: '16px', color: 'rgb(176,240,0)', whiteSpace: 'nowrap' },
    light: { fontSize: '16px', color: 'rgb(110,138,15)', whiteSpace: 'nowrap' },
  },
  headline: {
    dark:  { marginTop: '26px', fontSize: 'clamp(30px,4vw,44px)', lineHeight: '1.24', letterSpacing: '-0.03em', textAlign: 'center', color: 'rgb(244,244,244)', maxWidth: '760px', textWrap: 'pretty' },
    light: { marginTop: '26px', fontSize: 'clamp(30px,4vw,44px)', lineHeight: '1.24', letterSpacing: '-0.03em', textAlign: 'center', color: 'rgb(17,14,23)',    maxWidth: '760px', textWrap: 'pretty' },
  },
  headlineDim: {
    dark:  { color: 'rgb(138,138,138)' },
    light: { color: 'rgb(98,104,133)' },
  },
  /* top 3-card row */
  topGrid: { marginTop: '56px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '28px' },
  card: {
    dark:  { background: 'linear-gradient(rgb(28,28,28) 0%, rgb(20,20,20) 100%)', border: '1px solid rgb(38,38,38)', borderRadius: '26px', padding: '32px', display: 'flex', flexDirection: 'column' },
    light: { background: 'linear-gradient(rgb(255,255,255) 0%, rgb(248,250,252) 100%)', border: '1px solid rgb(221,225,238)', borderRadius: '26px', padding: '32px', display: 'flex', flexDirection: 'column' },
  },
  /* candlestick chart area */
  chartArea: { height: '212px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' },
  chartWrap: {
    dark:  { width: '100%', maxWidth: '236px', background: 'rgb(22,22,22)', border: '1px solid rgb(38,38,38)', borderRadius: '20px', padding: '16px 16px 12px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', height: '180px' },
    light: { width: '100%', maxWidth: '236px', background: 'rgb(255,255,255)', border: '1px solid rgb(221,225,238)', borderRadius: '20px', padding: '16px 16px 12px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', height: '180px' },
  },
  chartLabel: {
    dark:  { fontSize: '14px', fontWeight: '600', color: 'rgb(176,240,0)' },
    light: { fontSize: '14px', fontWeight: '600', color: 'rgb(110,138,15)' },
  },
  chartInner: { flex: 1, minHeight: 0 },
  /* pair chips below candle chart */
  pairChips: { display: 'flex', gap: '6px', marginTop: '8px', flexWrap: 'wrap' },
  pairChip: {
    dark:  { display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 600, color: 'rgb(180,180,180)', background: 'rgb(28,28,28)', border: '1px solid rgb(44,44,44)', borderRadius: '6px', padding: '3px 8px' },
    light: { display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 600, color: 'rgb(80,80,80)', background: 'rgb(235,240,255)', border: '1px solid rgb(210,218,238)', borderRadius: '6px', padding: '3px 8px' },
  },
  spreadNum: {
    dark:  { color: 'rgb(176,240,0)', fontVariantNumeric: 'tabular-nums' },
    light: { color: 'rgb(90,120,10)',  fontVariantNumeric: 'tabular-nums' },
  },
  /* card text */
  cardTitle: {
    dark:  { fontSize: '22px', letterSpacing: '-0.02em', color: 'rgb(244,244,244)', marginTop: '26px', fontWeight: 600 },
    light: { fontSize: '22px', letterSpacing: '-0.02em', color: 'rgb(17,14,23)',    marginTop: '26px', fontWeight: 600 },
  },
  cardDesc: {
    dark:  { fontSize: '14px', lineHeight: '1.55', color: 'rgb(138,138,138)', marginTop: '10px', maxWidth: '250px' },
    light: { fontSize: '14px', lineHeight: '1.55', color: 'rgb(98,104,133)',  marginTop: '10px', maxWidth: '250px' },
  },
  /* bottom 2-card row */
  botGrid: { marginTop: '28px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr))', gap: '28px' },
  wideCard: {
    dark:  { background: 'linear-gradient(rgb(28,28,28) 0%, rgb(20,20,20) 100%)', border: '1px solid rgb(38,38,38)', borderRadius: '26px', padding: '32px', display: 'flex', gap: '24px', overflow: 'hidden' },
    light: { background: 'linear-gradient(rgb(255,255,255) 0%, rgb(248,250,252) 100%)', border: '1px solid rgb(221,225,238)', borderRadius: '26px', padding: '32px', display: 'flex', gap: '24px', overflow: 'hidden' },
  },
  wideCardText: { flex: '1 1 0%', display: 'flex', flexDirection: 'column' },
  wideTitle: {
    dark:  { fontSize: '24px', lineHeight: '1.22', letterSpacing: '-0.02em', color: 'rgb(244,244,244)', fontWeight: 600 },
    light: { fontSize: '24px', lineHeight: '1.22', letterSpacing: '-0.02em', color: 'rgb(17,14,23)', fontWeight: 600 },
  },
  wideDesc: {
    dark:  { fontSize: '14px', lineHeight: '1.55', color: 'rgb(138,138,138)', marginTop: 'auto', paddingTop: '34px', maxWidth: '210px' },
    light: { fontSize: '14px', lineHeight: '1.55', color: 'rgb(98,104,133)',  marginTop: 'auto', paddingTop: '34px', maxWidth: '210px' },
  },
  /* platform grid */
  platformGrid: { width: '220px', flex: '0 0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,64px)', gap: '12px', placeContent: 'start end' },
  platformItem: {
    dark:  { width: '64px', height: '64px', borderRadius: '16px', background: 'rgb(22,22,22)', border: '1px solid rgb(38,38,38)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', color: 'rgb(120,120,120)' },
    light: { width: '64px', height: '64px', borderRadius: '16px', background: 'rgb(241,255,215)', border: '1px solid rgb(221,225,238)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', color: 'rgb(98,104,133)' },
  },
  platformLabel: { fontSize: '8px', letterSpacing: '0.04em', fontWeight: 600, textAlign: 'center', lineHeight: 1.2 },
  /* support card dealer icon */
  dealerIconWrap: { width: '220px', flex: '0 0 auto', display: 'flex', justifyContent: 'center', position: 'relative' },
  dealerIcon: {
    dark:  { width: '110px', height: '110px', borderRadius: '50%', background: 'rgb(22,22,22)', border: '1px solid rgb(44,44,44)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(176,240,0)', position: 'relative' },
    light: { width: '110px', height: '110px', borderRadius: '50%', background: 'rgb(248,250,252)', border: '1px solid rgb(221,225,238)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(110,138,15)', position: 'relative' },
  },
  onlineBadge: { position: 'absolute', bottom: '4px', right: '4px', zIndex: 3, display: 'flex', alignItems: 'center', gap: '6px' },
  onlineDot: { width: '8px', height: '8px', borderRadius: '999px', background: 'rgb(176,240,0)' },
  onlineName: {
    dark:  { background: 'rgb(176,240,0)', color: 'rgb(12,12,12)', borderRadius: '8px', padding: '5px 12px', fontSize: '13px', fontWeight: 700 },
    light: { background: 'rgb(176,240,0)', color: 'rgb(12,12,12)', borderRadius: '8px', padding: '5px 12px', fontSize: '13px', fontWeight: 700 },
  },
  /* feature pills row */
  pillsRow: { marginTop: '44px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', maxWidth: '760px' },
  pill: {
    dark:  { background: 'rgb(20,20,20)', border: '1px solid rgb(38,38,38)', borderRadius: '999px', padding: '11px 20px', display: 'flex', alignItems: 'center', gap: '9px', fontSize: '14px', color: 'rgb(220,220,220)', flex: '0 0 auto', whiteSpace: 'nowrap' },
    light: { background: 'rgb(255,255,255)', border: '1px solid rgb(221,225,238)', borderRadius: '999px', padding: '11px 20px', display: 'flex', alignItems: 'center', gap: '9px', fontSize: '14px', color: 'rgb(17,14,23)', flex: '0 0 auto', whiteSpace: 'nowrap' },
  },
  pillIcon: {
    dark:  { width: '20px', height: '20px', borderRadius: '999px', background: 'rgb(176,240,0)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(12,12,12)', flex: '0 0 auto' },
    light: { width: '20px', height: '20px', borderRadius: '999px', background: 'rgb(176,240,0)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(12,12,12)', flex: '0 0 auto' },
  },
};

export default function Band02({ theme = 'dark' }) {
  const avatarBorder1 = theme === 'dark' ? '3px solid rgb(38,38,38)' : '3px solid rgb(221,225,238)';
  const avatarBorder2 = theme === 'dark' ? '4px solid rgb(176,240,0)' : '4px solid rgb(176,240,0)';
  const avatarBorder3 = theme === 'dark' ? '4px solid rgb(176,176,176)' : '4px solid rgb(182,186,208)';
  const avatarBorder4 = theme === 'dark' ? '4px solid rgb(86,95,37)'   : '4px solid rgb(201,220,140)';
  const avatarBg     = theme === 'dark' ? 'rgb(20,20,20)' : 'rgb(255,255,255)';

  return (
    <div style={S.s0}>
      <div style={S.s1}>
        {/* eyebrow */}
        <div style={S.eyebrowRow}>
          <div style={S.eyebrowDot}>✳</div>
          <div style={S.eyebrowText[theme]}>What you'll get</div>
        </div>

        {/* headline */}
        <div style={S.headline[theme]}>
          Removing every friction{' '}
          <span style={S.headlineDim[theme]}>that slows a trade down.</span>
        </div>

        {/* ── TOP 3 CARDS ── */}
        <div className="mb-grid3" style={S.topGrid}>

          {/* Card 1: Spreads with mini candlestick chart */}
          <div className="mb-card" style={S.card[theme]}>
            <div className="mb-chart" style={S.chartArea}>
              <div style={S.chartWrap[theme]}>
                <div style={S.chartLabel[theme]}>EUR/USD spreads</div>
                <div style={S.chartInner}>
                  <MiniCandleChart theme={theme} />
                </div>
                <div style={S.pairChips}>
                  {PAIRS.map((p) => (
                    <span key={p.label} style={S.pairChip[theme]}>
                      <p.Icon />
                      {p.label}
                      <span style={S.spreadNum[theme]}>{p.spread}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div style={S.cardTitle[theme]}>Cost-effective at every size</div>
            <div style={S.cardDesc[theme]}>Institutional pricing from your first lot. Raw spreads — no markup layer.</div>
          </div>

          {/* Card 2: Execution with animated card */}
          <div className="mb-card" style={S.card[theme]}>
            <ExecutionCard theme={theme} />
            <div style={S.cardTitle[theme]}>Execution you can time</div>
            <div style={S.cardDesc[theme]}>Around 12ms average fill across the major pairs during peak sessions.</div>
          </div>

          {/* Card 3: Growth / chart */}
          <div className="mb-card" style={S.card[theme]}>
            <div style={{ height: '212px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden', margin: '-32px -32px 0', padding: '32px', borderRadius: '26px 26px 0 0' }}>
              {/* vertical grid lines */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between', padding: '0 44px' }}>
                {[0,1,2,3,4].map(i => (
                  <div key={i} style={{ width: '0px', borderLeft: `1px dashed ${theme === 'dark' ? 'rgb(38,38,38)' : 'rgb(221,225,238)'}` }} />
                ))}
              </div>
              {/* price labels */}
              <div style={{ position: 'absolute', left: 0, right: 0, top: '118px', display: 'flex', justifyContent: 'space-between', padding: '0 34px', fontSize: '12px', color: theme === 'dark' ? 'rgb(74,74,74)' : 'rgb(98,104,133)' }}>
                <div>45</div><div>35</div><div>5</div><div>0</div><div>-5</div>
              </div>
              {/* SVG price line */}
              <svg viewBox="0 0 320 212" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <defs>
                  <filter id="lineGlow">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>
                <path d="M0 186 C 40 184, 62 176, 86 158 C 112 138, 126 126, 150 124 C 176 122, 186 104, 200 84 C 208 72, 214 66, 222 62" fill="none" stroke="#b0f000" strokeWidth="3" strokeLinecap="round" filter="url(#lineGlow)" />
                <path d="M240 -6 C 258 26, 268 60, 282 92 C 294 122, 306 150, 320 170" fill="none" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" />
                <circle cx="222" cy="62" r="9" fill="#b0f000" stroke={theme === 'dark' ? '#1c1c1c' : '#ffffff'} strokeWidth="4" vectorEffect="non-scaling-stroke" style={{ filter: `drop-shadow(rgba(176,240,0,${theme === 'dark' ? '0.7' : '0.55'}) 0px 0px 14px)` }} />
              </svg>
            </div>
            <div style={S.cardTitle[theme]}>Scalable as you grow</div>
            <div style={S.cardDesc[theme]}>From first lot to institutional size — same infrastructure, same pricing engine.</div>
          </div>
        </div>

        {/* ── BOTTOM 2 CARDS ── */}
        <div className="mb-grid2" style={S.botGrid}>

          {/* Wide card 1: Platforms */}
          <div className="mb-wide" style={S.wideCard[theme]}>
            <div className="mb-wide-text" style={S.wideCardText}>
              <div className="mb-wide-title" style={S.wideTitle[theme]}>Platform<br />integration</div>
              <div className="mb-p" style={S.wideDesc[theme]}>Trade from MetaTrader 5 or Movement WebTrader — one account, both platforms, always in sync.</div>
            </div>
            <div className="mb-tiles" style={S.platformGrid}>
              {PLATFORM_ITEMS.map(({ label, Icon: Ic }) => (
                <div key={label} className="mb-tile" style={S.platformItem[theme]}>
                  <Ic />
                  <span style={S.platformLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Wide card 2: Support */}
          <div className="mb-wide" style={S.wideCard[theme]}>
            <div className="mb-wide-text" style={S.wideCardText}>
              <div className="mb-wide-title" style={S.wideTitle[theme]}>Support in<br />real-time</div>
              <div className="mb-p" style={S.wideDesc[theme]}>A named dealer — reachable 24/7. Not a bot. Not a queue.</div>
            </div>
            <div className="mb-dealer" style={S.dealerIconWrap}>
              <div style={S.dealerIcon[theme]}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
                <div style={S.onlineBadge}>
                  <div style={S.onlineDot} />
                  <div style={S.onlineName[theme]}>Elia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FEATURE PILLS ── */}
        <div style={S.pillsRow}>
          {FEATURE_PILLS.map(({ label, Icon: Ic }) => (
            <div key={label} style={S.pill[theme]}>
              <div style={S.pillIcon[theme]}>
                <Ic />
              </div>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}