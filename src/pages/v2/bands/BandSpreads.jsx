// BandSpreads — Indicative live spreads table.
// Follows the project's band pattern: theme prop + per-theme S style objects.

const Icon = {
  EUR: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M14 8h-2.5a3.5 3.5 0 1 0 0 7H14M9 12h5"/></svg>,
  GBP: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 8.5C15 7.12 13.88 6 12.5 6h-1c-1.38 0-2.5 1.12-2.5 2.5v2C9 11.88 10.12 13 11.5 13h1c1.38 0 2.5 1.12 2.5 2.5v2C15 18.88 13.88 20 12.5 20h-1C10.12 20 9 18.88 9 17.5M8 10h8M8 16h8"/></svg>,
  JPY: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20v-8M8 6l4 6 4-6M9 12h6M9 16h6"/></svg>,
  AUD: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M8 12h8"/></svg>, // Generic placeholder for AUD/globe
  Metal: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  Chart: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  BTC: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
};

const INSTRUMENTS = [
  { pair: 'EUR/USD',  category: 'FX Major',    typical: '0.2',  min: '0.0',  icon: <Icon.EUR /> },
  { pair: 'GBP/USD',  category: 'FX Major',    typical: '0.4',  min: '0.0',  icon: <Icon.GBP /> },
  { pair: 'USD/JPY',  category: 'FX Major',    typical: '0.3',  min: '0.0',  icon: <Icon.JPY /> },
  { pair: 'AUD/USD',  category: 'FX Major',    typical: '0.5',  min: '0.1',  icon: <Icon.AUD /> },
  { pair: 'XAU/USD',  category: 'Metals',      typical: '0.15', min: '0.10', icon: <Icon.Metal /> },
  { pair: 'XAG/USD',  category: 'Metals',      typical: '0.02', min: '0.01', icon: <Icon.Metal /> },
  { pair: 'US30',     category: 'Indices',     typical: '2.0',  min: '1.5',  icon: <Icon.Chart /> },
  { pair: 'NAS100',   category: 'Indices',     typical: '1.5',  min: '0.8',  icon: <Icon.Chart /> },
  { pair: 'BTC/USD',  category: 'Crypto CFDs', typical: '50',   min: '30',   icon: <Icon.BTC />  },
];

const S = {
  outer: { padding: '80px 40px', boxSizing: 'border-box' },
  inner: { width: 'min(1200px, 100%)', margin: '0 auto' },
  header: { display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '40px' },
  eyebrow: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' },
  dot: { width: '8px', height: '8px', borderRadius: '999px', background: 'rgb(176,240,0)', flexShrink: 0 },
  eyebrowText: {
    dark:  { fontSize: '13px', letterSpacing: '0.1em', color: 'rgb(176,240,0)', textTransform: 'uppercase' },
    light: { fontSize: '13px', letterSpacing: '0.1em', color: 'rgb(110,138,15)', textTransform: 'uppercase' },
  },
  headline: {
    dark:  { fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-0.03em', color: 'rgb(244,244,244)', lineHeight: 1.2, margin: 0 },
    light: { fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-0.03em', color: 'rgb(17,14,23)',    lineHeight: 1.2, margin: 0 },
  },
  sub: {
    dark:  { fontSize: '14px', lineHeight: 1.6, color: 'rgb(138,138,138)', maxWidth: '340px', textAlign: 'right' },
    light: { fontSize: '14px', lineHeight: 1.6, color: 'rgb(98,104,133)',  maxWidth: '340px', textAlign: 'right' },
  },
  table: {
    dark:  { width: '100%', borderCollapse: 'collapse', background: 'rgb(14,14,14)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgb(38,38,38)' },
    light: { width: '100%', borderCollapse: 'collapse', background: '#fff',          borderRadius: '20px', overflow: 'hidden', border: '1px solid rgb(221,225,238)' },
  },
  th: {
    dark:  { padding: '14px 20px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgb(80,80,80)', textAlign: 'left', borderBottom: '1px solid rgb(28,28,28)', background: 'rgb(10,10,10)' },
    light: { padding: '14px 20px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgb(150,158,180)', textAlign: 'left', borderBottom: '1px solid rgb(235,238,248)', background: 'rgb(248,250,254)' },
  },
  thRight: {
    dark:  { padding: '14px 20px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgb(80,80,80)', textAlign: 'right', borderBottom: '1px solid rgb(28,28,28)', background: 'rgb(10,10,10)' },
    light: { padding: '14px 20px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgb(150,158,180)', textAlign: 'right', borderBottom: '1px solid rgb(235,238,248)', background: 'rgb(248,250,254)' },
  },
  td: {
    dark:  { padding: '16px 20px', fontSize: '14px', color: 'rgb(210,210,210)', borderBottom: '1px solid rgb(22,22,22)', verticalAlign: 'middle' },
    light: { padding: '16px 20px', fontSize: '14px', color: 'rgb(40,45,60)',    borderBottom: '1px solid rgb(240,243,252)', verticalAlign: 'middle' },
  },
  tdRight: {
    dark:  { padding: '16px 20px', fontSize: '14px', color: 'rgb(210,210,210)', borderBottom: '1px solid rgb(22,22,22)', verticalAlign: 'middle', textAlign: 'right' },
    light: { padding: '16px 20px', fontSize: '14px', color: 'rgb(40,45,60)',    borderBottom: '1px solid rgb(240,243,252)', verticalAlign: 'middle', textAlign: 'right' },
  },
  pairCell: { display: 'flex', alignItems: 'center', gap: '12px' },
  flagIcon: { 
    dark:  { width: '32px', height: '32px', borderRadius: '8px', background: 'rgb(24,24,24)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(176,240,0)' },
    light: { width: '32px', height: '32px', borderRadius: '8px', background: 'rgb(244,248,240)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(110,138,15)' },
  },
  pairName: {
    dark:  { fontWeight: '700', fontSize: '14px', color: 'rgb(244,244,244)' },
    light: { fontWeight: '700', fontSize: '14px', color: 'rgb(17,14,23)'   },
  },
  categoryPill: {
    dark:  { fontSize: '11px', color: 'rgb(100,100,100)', background: 'rgb(22,22,22)', borderRadius: '6px', padding: '2px 8px', display: 'inline-block', marginTop: '2px' },
    light: { fontSize: '11px', color: 'rgb(120,130,155)', background: 'rgb(241,244,252)', borderRadius: '6px', padding: '2px 8px', display: 'inline-block', marginTop: '2px' },
  },
  spreadValue: {
    dark:  { fontWeight: '700', fontSize: '15px', fontVariantNumeric: 'tabular-nums', color: 'rgb(176,240,0)' },
    light: { fontWeight: '700', fontSize: '15px', fontVariantNumeric: 'tabular-nums', color: 'rgb(90,120,10)' },
  },
  disclaimer: {
    dark:  { marginTop: '16px', fontSize: '12px', color: 'rgb(70,70,70)', lineHeight: 1.6 },
    light: { marginTop: '16px', fontSize: '12px', color: 'rgb(150,158,180)', lineHeight: 1.6 },
  },
};

export default function BandSpreads({ theme = 'dark' }) {
  return (
    <div style={S.outer}>
      <div style={S.inner}>
        <div style={S.header}>
          <div>
            <div style={S.eyebrow}>
              <span style={S.dot} />
              <span style={S.eyebrowText[theme]}>Indicative Spreads</span>
            </div>
            <h2 style={S.headline[theme]}>Tight pricing,<br />across every market</h2>
          </div>
          <p className="mb-sub-left" style={S.sub[theme]}>
            Raw interbank feeds, routed through our liquidity network. No markup on Raw accounts.
          </p>
        </div>
        <table className="mb-table" style={S.table[theme]}>
          <thead>
            <tr>
              <th style={S.th[theme]}>Instrument</th>
              <th className="mb-hide-sm" style={S.th[theme]}>Category</th>
              <th style={S.thRight[theme]}>Typical spread (pips)</th>
              <th style={S.thRight[theme]}>Min spread</th>
            </tr>
          </thead>
          <tbody>
            {INSTRUMENTS.map((inst, i) => (
              <tr key={inst.pair} style={i === INSTRUMENTS.length - 1 ? { borderBottom: 'none' } : {}}>
                <td style={S.td[theme]}>
                  <div style={S.pairCell}>
                    <span style={S.flagIcon[theme]}>{inst.icon}</span>
                    <div>
                      <div style={S.pairName[theme]}>{inst.pair}</div>
                    </div>
                  </div>
                </td>
                <td className="mb-hide-sm" style={S.td[theme]}>
                  <span style={S.categoryPill[theme]}>{inst.category}</span>
                </td>
                <td style={S.tdRight[theme]}>
                  <span style={S.spreadValue[theme]}>{inst.typical}</span>
                </td>
                <td style={S.tdRight[theme]}>{inst.min}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={S.disclaimer[theme]}>
          * Spreads are indicative only and will vary with market conditions. Displayed spreads are based on Raw account conditions during peak liquidity hours.
        </p>
      </div>
    </div>
  );
}