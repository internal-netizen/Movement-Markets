// BandTestimonials — Social proof / testimonials.
// Follows the project's band pattern: theme prop + per-theme S style objects.

const REVIEWS = [
  {
    id: 1,
    quote: "Tightest spreads I've seen on EUR/USD without hidden markups. Switched from my old broker six months ago and haven't looked back.",
    author: 'James T.',
    role: 'Prop trader, London',
    stars: 5,
  },
  {
    id: 2,
    quote: "The named dealer model is a game-changer. I actually know who picks up the phone when markets move fast.",
    author: 'Priya S.',
    role: 'Fund manager, Singapore',
    stars: 5,
  },
  {
    id: 3,
    quote: "Onboarding was done in under an hour — KYC, funding, first trade. Not what I expected from an institutional-grade broker.",
    author: 'Marco L.',
    role: 'Independent trader, Milan',
    stars: 5,
  },
  {
    id: 4,
    quote: "Execution is fast. Fills in around 12ms on NAS100 even during the open — I've tested it with timestamps.",
    author: 'Sarah K.',
    role: 'Algo trader, Sydney',
    stars: 5,
  },
  {
    id: 5,
    quote: "Segregated funds and documents you can actually read gave me confidence. The reporting and funding transparency is excellent.",
    author: 'Tobias W.',
    role: 'Family office, Zurich',
    stars: 5,
  },
  {
    id: 6,
    quote: "I've traded with five brokers. Movement Markets is the first one where I feel like the platform was built for traders, not against them.",
    author: 'Chen B.',
    role: 'Day trader, Hong Kong',
    stars: 5,
  },
];

const STATS = [
  { value: '32K+', label: 'Active traders' },
  { value: '40+',  label: 'Countries served' },
  { value: '24/7', label: 'Human support' },
];

const StarIcon = ({ filled, color }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
  statsRow: {
    display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', margin: '40px 0 56px',
  },
  statBlock: { textAlign: 'center' },
  statValue: {
    dark:  { fontSize: 'clamp(32px,4vw,48px)', fontWeight: '700', letterSpacing: '-0.04em', color: 'rgb(176,240,0)', lineHeight: 1 },
    light: { fontSize: 'clamp(32px,4vw,48px)', fontWeight: '700', letterSpacing: '-0.04em', color: 'rgb(90,120,10)', lineHeight: 1 },
  },
  statLabel: {
    dark:  { fontSize: '13px', color: 'rgb(100,100,100)', marginTop: '6px' },
    light: { fontSize: '13px', color: 'rgb(130,138,155)', marginTop: '6px' },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '20px',
  },
  card: {
    dark:  { background: 'rgb(16,16,16)', border: '1px solid rgb(30,30,30)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' },
    light: { background: '#fff', border: '1px solid rgb(221,225,238)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' },
  },
  stars: { display: 'flex', gap: '3px' },
  quote: {
    dark:  { fontSize: '15px', lineHeight: '1.65', color: 'rgb(200,200,200)', fontStyle: 'italic' },
    light: { fontSize: '15px', lineHeight: '1.65', color: 'rgb(50,55,70)',    fontStyle: 'italic' },
  },
  authorRow: { display: 'flex', flexDirection: 'column', gap: '2px', marginTop: 'auto' },
  authorName: {
    dark:  { fontSize: '13px', fontWeight: '700', color: 'rgb(244,244,244)' },
    light: { fontSize: '13px', fontWeight: '700', color: 'rgb(17,14,23)'   },
  },
  authorRole: {
    dark:  { fontSize: '12px', color: 'rgb(100,100,100)' },
    light: { fontSize: '12px', color: 'rgb(150,158,180)' },
  },
};

export default function BandTestimonials({ theme = 'dark' }) {
  const starColor = theme === 'dark' ? 'rgb(176,240,0)' : 'rgb(110,138,15)';
  return (
    <div style={S.outer}>
      <div style={S.inner}>
        <div style={S.eyebrow}>
          <span style={S.dot} />
          <span style={S.eyebrowText[theme]}>Trusted by traders</span>
        </div>
        <h2 style={S.headline[theme]}>What our traders say</h2>
        <div style={S.statsRow}>
          {STATS.map((s) => (
            <div key={s.label} style={S.statBlock}>
              <div style={S.statValue[theme]}>{s.value}</div>
              <div style={S.statLabel[theme]}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mb-grid" style={S.grid}>
          {REVIEWS.map((r) => (
            <div key={r.id} style={S.card[theme]}>
              <div style={S.stars}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < r.stars} color={starColor} />
                ))}
              </div>
              <p style={S.quote[theme]}>&ldquo;{r.quote}&rdquo;</p>
              <div style={S.authorRow}>
                <span style={S.authorName[theme]}>{r.author}</span>
                <span style={S.authorRole[theme]}>{r.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}