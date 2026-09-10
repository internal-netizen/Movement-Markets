// BandRegulation — Regulation & licensing trust strip.
// Follows the project's band pattern: theme prop + per-theme S style objects.

const REGULATORS = [
  { code: 'ASIC', label: 'Australian Securities\n& Investments Commission', flag: 'AU' },
  { code: 'FCA',  label: 'Financial Conduct\nAuthority',               flag: 'GB' },
  { code: 'CySEC',label: 'Cyprus Securities\n& Exchange Commission',   flag: 'CY' },
  { code: 'FSCA', label: 'Financial Sector\nConduct Authority',        flag: 'ZA' },
];

const S = {
  outer: {
    padding: '72px 40px',
    boxSizing: 'border-box',
  },
  inner: {
    width: 'min(1320px, 100%)',
    margin: '0 auto',
  },
  eyebrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '14px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '999px',
    background: 'rgb(176,240,0)',
    flexShrink: 0,
  },
  eyebrowText: {
    dark:  { fontSize: '13px', letterSpacing: '0.1em', color: 'rgb(176,240,0)', textTransform: 'uppercase' },
    light: { fontSize: '13px', letterSpacing: '0.1em', color: 'rgb(110, 138, 15)', textTransform: 'uppercase' },
  },
  headline: {
    dark:  { textAlign: 'center', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-0.03em', color: 'rgb(244,244,244)', marginBottom: '8px' },
    light: { textAlign: 'center', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-0.03em', color: 'rgb(17,14,23)',    marginBottom: '8px' },
  },
  sub: {
    dark:  { textAlign: 'center', fontSize: '15px', lineHeight: '1.6', color: 'rgb(138,138,138)', marginBottom: '48px' },
    light: { textAlign: 'center', fontSize: '15px', lineHeight: '1.6', color: 'rgb(98,104,133)',  marginBottom: '48px' },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
  },
  card: {
    dark: {
      background: 'linear-gradient(135deg, rgb(22,22,22) 0%, rgb(18,18,18) 100%)',
      border: '1px solid rgb(38,38,38)',
      borderRadius: '20px',
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '12px',
    },
    light: {
      background: 'linear-gradient(135deg, rgb(255,255,255) 0%, rgb(248,250,252) 100%)',
      border: '1px solid rgb(221,225,238)',
      borderRadius: '20px',
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '12px',
    },
  },
  badge: {
    dark: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgb(30,30,30)',
      border: '1px solid rgb(176,240,0)',
      borderRadius: '8px',
      padding: '6px 12px',
    },
    light: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgb(241,255,215)',
      border: '1px solid rgb(175,210,40)',
      borderRadius: '8px',
      padding: '6px 12px',
    },
  },
  badgeCode: {
    dark:  { fontSize: '14px', fontWeight: '700', letterSpacing: '0.04em', color: 'rgb(176,240,0)' },
    light: { fontSize: '14px', fontWeight: '700', letterSpacing: '0.04em', color: 'rgb(110,138,15)' },
  },
  flag: {
    fontSize: '18px',
    lineHeight: '1',
  },
  cardLabel: {
    dark:  { fontSize: '13px', lineHeight: '1.5', color: 'rgb(138,138,138)', whiteSpace: 'pre-line' },
    light: { fontSize: '13px', lineHeight: '1.5', color: 'rgb(98,104,133)',  whiteSpace: 'pre-line' },
  },
  shieldRow: {
    marginTop: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  shieldText: {
    dark:  { fontSize: '14px', color: 'rgb(138,138,138)' },
    light: { fontSize: '14px', color: 'rgb(98,104,133)'  },
  },
};

const FLAG_MAP = { AU: '🇦🇺', GB: '🇬🇧', CY: '🇨🇾', ZA: '🇿🇦' };

export default function BandRegulation({ theme = 'dark' }) {
  return (
    <div style={S.outer}>
      <div style={S.inner}>
        <div style={S.eyebrow}>
          <span style={S.dot} />
          <span style={S.eyebrowText[theme]}>Regulated &amp; Licensed</span>
        </div>
        <h2 style={S.headline[theme]}>Your funds are protected</h2>
        <p style={S.sub[theme]}>
          Movement Markets operates under oversight from multiple tier-1 financial regulators,
          <br />ensuring your account is held to the highest industry standards.
        </p>
        <div className="mb-grid" style={S.grid}>
          {REGULATORS.map((r) => (
            <div key={r.code} style={S.card[theme]}>
              <div style={S.badge[theme]}>
                <span style={S.flag}>{FLAG_MAP[r.flag]}</span>
                <span style={S.badgeCode[theme]}>{r.code}</span>
              </div>
              <span style={S.cardLabel[theme]}>{r.label}</span>
            </div>
          ))}
        </div>
        <div style={S.shieldRow}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? 'rgb(176,240,0)' : 'rgb(110,138,15)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span style={S.shieldText[theme]}>Negative balance protection · Segregated client funds · SSL encrypted</span>
        </div>
      </div>
    </div>
  );
}
