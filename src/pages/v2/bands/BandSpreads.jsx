// BandSpreads — Indicative live spreads table.
// Follows the project's band pattern: theme prop + per-theme S style objects.

import InstrumentIcon from '../../../components/InstrumentIcon.jsx';
import '../../../styles/landing-details.css';

const INSTRUMENTS = [
  { pair: 'EUR/USD',  category: 'FX Major',    typical: '0.2',  min: '0.0' },
  { pair: 'GBP/USD',  category: 'FX Major',    typical: '0.4',  min: '0.0' },
  { pair: 'USD/JPY',  category: 'FX Major',    typical: '0.3',  min: '0.0' },
  { pair: 'AUD/USD',  category: 'FX Major',    typical: '0.5',  min: '0.1' },
  { pair: 'XAU/USD',  category: 'Metals',      typical: '0.15', min: '0.10' },
  { pair: 'XAG/USD',  category: 'Metals',      typical: '0.02', min: '0.01' },
  { pair: 'US30',     category: 'Indices',     typical: '2.0',  min: '1.5' },
  { pair: 'NAS100',   category: 'Indices',     typical: '1.5',  min: '0.8' },
  { pair: 'BTC/USD',  category: 'Crypto CFDs', typical: '50',   min: '30'  },
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
              <th style={S.thRight[theme]}>Typical spread</th>
              <th style={S.thRight[theme]}>Min spread</th>
            </tr>
          </thead>
          <tbody>
            {INSTRUMENTS.map((inst, i) => (
              <tr key={inst.pair} style={i === INSTRUMENTS.length - 1 ? { borderBottom: 'none' } : {}}>
                <td style={S.td[theme]}>
                  <div style={S.pairCell}>
                    <InstrumentIcon symbol={inst.pair} />
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