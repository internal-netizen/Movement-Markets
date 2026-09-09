// Trading platform line-up (MT5, cTrader, mobile, web).
export default function Platforms() {
  return (
    <section className="platforms-shell" id="platforms">
      <div className="platforms-inner">
        <div className="platform-glow platform-glow-a" />
        <div className="platform-glow platform-glow-b" />
        <div className="platform-copy">
          <div className="eyebrow dark-eyebrow"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-smartphone" aria-hidden="true"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" /><path d="M10 19v-3.96 3.15" /><path d="M7 19h5" /><rect width="6" height="10" x="16" y="12" rx="2" /></svg> Your choice of platform</div>
          <h2>Two powerful platforms.<br /><span>One seamless experience.</span></h2>
          <p>Trade at your desk or on the move with professional tools, clean execution and your account always in sync.</p>
        </div>
        <div className="platform-grid">
          <article className="platform-card">
            <div className="platform-card-top">
              <div className="platform-icon">5</div>
              <span className="platform-chip"><i /> Available now</span>
            </div>
            <div className="platform-screen mt-screen">
              <div className="screen-head">
                <span>EURUSD</span>
                <b>1.16842</b>
              </div>
              <svg className="mini-chart" viewBox="0 0 520 128" role="img" aria-label="Illustrative upward market price chart">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#b0f000" stopOpacity=".32" />
                    <stop offset="1" stopColor="#b0f000" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="chart-area" d="M0 111 C43 103 53 87 89 91 S142 112 176 82 S225 63 259 75 S313 48 350 55 S398 61 427 31 S482 36 520 12 L520 128 L0 128Z" />
                <path className="chart-line" d="M0 111 C43 103 53 87 89 91 S142 112 176 82 S225 63 259 75 S313 48 350 55 S398 61 427 31 S482 36 520 12" />
              </svg>
            </div>
            <h3>MetaTrader 5</h3>
            <p>Advanced charting, automated strategies and multi-asset access on the industry standard platform.</p>
            <a href="/login">Learn about MT5 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </article>
          <div className="platform-orbit" aria-hidden="true">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-core">
              <span className="brand-mark brand-mark-dark" aria-hidden="true">
                <span />
                <span />
              </span>
            </div>
            <span className="orbit-stat stat-top">{'<'}30ms<small>execution</small></span>
            <span className="orbit-stat stat-bottom">99.9%<small>uptime</small></span>
          </div>
          <article className="platform-card">
            <div className="platform-card-top">
              <div className="platform-icon c-icon">c</div>
              <span className="platform-chip"><i /> Available now</span>
            </div>
            <div className="platform-screen ctrader-screen">
              <div className="depth-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="screen-orders">
                <span>Market depth</span>
                <b>EUR / USD</b>
                <em>Buy 1.16847</em>
              </div>
            </div>
            <h3>cTrader</h3>
            <p>Direct market access, depth-of-market views and a polished interface designed for active traders.</p>
            <a href="/login">Explore cTrader <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </article>
        </div>
        <div className="glass-ticket platform-glass-ticket" aria-label="Platform access details">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-smartphone" aria-hidden="true">
            <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
            <path d="M10 19v-3.96 3.15" />
            <path d="M7 19h5" />
            <rect width="6" height="10" x="16" y="12" rx="2" />
          </svg>
          <span>
            <small>Synced platform access</small>
            <strong>MT5, cTrader and mobile in one account</strong>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check" aria-hidden="true">
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
