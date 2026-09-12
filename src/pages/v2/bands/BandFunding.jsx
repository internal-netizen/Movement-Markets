// BandFunding — Funding & withdrawal methods.
// Follows the project's band pattern: theme prop + per-theme S style objects.

const Icon = {
  Bank: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>,
  Card: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>,
  Wallet: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/><path d="M21 12H13a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h8"/></svg>,
  Crypto: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  Shield: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Zap: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Globe: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>,
  Lock: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
};

const METHODS = [
  { name: 'Bank Transfer',   time: '1–3 business days', fee: 'Free',   min: '$50',    icon: <Icon.Bank /> },
  { name: 'Visa / Mastercard', time: 'Instant',          fee: 'Free',   min: '$50',    icon: <Icon.Card /> },
  { name: 'PayPal',          time: 'Instant',            fee: 'Free',   min: '$50',    icon: <Icon.Wallet /> },
  { name: 'Skrill',          time: 'Instant',            fee: 'Free',   min: '$50',    icon: <Icon.Wallet /> },
  { name: 'Neteller',        time: 'Instant',            fee: 'Free',   min: '$50',    icon: <Icon.Wallet /> },
  { name: 'USDT (TRC-20)',   time: '~10 min',            fee: 'Network','min': '$50',  icon: <Icon.Crypto /> },
];

const FEATURES = [
  { icon: <Icon.Lock />, title: 'Segregated client funds', desc: 'Your money is held separately from company funds at Tier-1 banks.' },
  { icon: <Icon.Zap />, title: 'Fast processing', desc: 'Requests are processed within a few hours during business days; card and e-wallet usually same day, bank transfers one to three days.' },
  { icon: <Icon.Globe />, title: '20+ base currencies', desc: 'Fund in your local currency and avoid conversion costs.' },
  { icon: <Icon.Shield />, title: 'SSL-encrypted transactions', desc: '256-bit encryption on every deposit and withdrawal request.' },
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
    dark:  { textAlign: 'center', fontSize: '15px', lineHeight: '1.6', color: 'rgb(138,138,138)', maxWidth: '520px', margin: '0 auto 56px' },
    light: { textAlign: 'center', fontSize: '15px', lineHeight: '1.6', color: 'rgb(98,104,133)',  maxWidth: '520px', margin: '0 auto 56px' },
  },
  methodsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
    marginBottom: '56px',
  },
  methodCard: {
    dark:  { background: 'rgb(16,16,16)', border: '1px solid rgb(30,30,30)', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' },
    light: { background: '#fff', border: '1px solid rgb(221,225,238)', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' },
  },
  methodIconBox: {
    dark:  { width: '40px', height: '40px', borderRadius: '10px', background: 'rgb(24,24,24)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(176,240,0)' },
    light: { width: '40px', height: '40px', borderRadius: '10px', background: 'rgb(244,248,240)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(110,138,15)' },
  },
  methodInfo: { flex: 1 },
  methodName: {
    dark:  { fontSize: '14px', fontWeight: '700', color: 'rgb(230,230,230)', marginBottom: '4px' },
    light: { fontSize: '14px', fontWeight: '700', color: 'rgb(17,14,23)',    marginBottom: '4px' },
  },
  methodMeta: {
    dark:  { fontSize: '12px', color: 'rgb(100,100,100)' },
    light: { fontSize: '12px', color: 'rgb(130,138,155)' },
  },
  methodFee: {
    dark:  { fontSize: '13px', fontWeight: '600', color: 'rgb(176,240,0)', whiteSpace: 'nowrap' },
    light: { fontSize: '13px', fontWeight: '600', color: 'rgb(90,120,10)',  whiteSpace: 'nowrap' },
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '20px',
  },
  featureCard: {
    dark:  { background: 'linear-gradient(135deg, rgb(22,22,22) 0%, rgb(16,16,16) 100%)', border: '1px solid rgb(36,36,36)', borderRadius: '16px', padding: '24px' },
    light: { background: 'linear-gradient(135deg, rgb(250,252,255) 0%, rgb(244,246,252) 100%)', border: '1px solid rgb(221,225,238)', borderRadius: '16px', padding: '24px' },
  },
  featureIcon: { 
    dark:  { marginBottom: '16px', color: 'rgb(176,240,0)' },
    light: { marginBottom: '16px', color: 'rgb(110,138,15)' },
  },
  featureTitle: {
    dark:  { fontSize: '14px', fontWeight: '700', color: 'rgb(230,230,230)', marginBottom: '8px' },
    light: { fontSize: '14px', fontWeight: '700', color: 'rgb(17,14,23)',    marginBottom: '8px' },
  },
  featureDesc: {
    dark:  { fontSize: '13px', lineHeight: '1.6', color: 'rgb(110,110,110)' },
    light: { fontSize: '13px', lineHeight: '1.6', color: 'rgb(98,104,133)'  },
  },
};

export default function BandFunding({ theme = 'dark' }) {
  return (
    <div style={S.outer}>
      <div style={S.inner}>
        <div style={S.eyebrow}>
          <span style={S.dot} />
          <span style={S.eyebrowText[theme]}>Funding & Withdrawals</span>
        </div>
        <h2 style={S.headline[theme]}>Fast deposits,<br />frictionless withdrawals</h2>
        <p style={S.sub[theme]}>
          No deposit fees. Multiple methods. Your money moves when you need it to.
        </p>
        <div className="mb-grid" style={S.methodsGrid}>
          {METHODS.map((m) => (
            <div key={m.name} style={S.methodCard[theme]}>
              <div style={S.methodIconBox[theme]}>{m.icon}</div>
              <div style={S.methodInfo}>
                <div style={S.methodName[theme]}>{m.name}</div>
                <div style={S.methodMeta[theme]}>{m.time} · Min {m.min}</div>
              </div>
              <span style={S.methodFee[theme]}>{m.fee}</span>
            </div>
          ))}
        </div>
        <div className="mb-grid" style={S.featuresGrid}>
          {FEATURES.map((f) => (
            <div key={f.title} style={S.featureCard[theme]}>
              <div style={S.featureIcon[theme]}>{f.icon}</div>
              <div style={S.featureTitle[theme]}>{f.title}</div>
              <div style={S.featureDesc[theme]}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}