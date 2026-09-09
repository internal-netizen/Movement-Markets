// "What you will get" bento grid of product highlights.
export default function MarketsBento() {
  return (
    <section className="movement-bento-section" id="markets">
      <div className="movement-bento-inner">
        <div className="movement-bento-heading">
          <div className="eyebrow bento-eyebrow"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></svg> What you will get</div>
          <h2>Everything traders need to move with confidence.</h2>
          <p>Movement Markets turns pricing, platforms, funding and support into one fast, human trading environment.</p>
        </div>
        <div className="movement-bento-grid">
          <article className="bento-card bento-growth">
            <div className="bento-visual bento-bars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <h3>Market access with depth</h3>
            <p>Forex, metals, indices, commodities, shares and crypto CFDs in one account.</p>
          </article>
          <article className="bento-card bento-latest">
            <div className="ticket-stack" aria-hidden="true">
              <div>
                <small>Reviewed</small>
                <strong>EUR/USD spread alert</strong>
                <span>Today, 11:50</span>
              </div>
              <div>
                <small>New</small>
                <strong>Gold momentum setup</strong>
                <span>Live signal</span>
              </div>
            </div>
            <h3>Clear signals, less noise</h3>
            <p>Designed to make the next useful action obvious when markets speed up.</p>
          </article>
          <article className="bento-card bento-scale">
            <div className="trajectory-map" aria-hidden="true">
              <span className="grid-line" />
              <span className="grid-line" />
              <span className="grid-line" />
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
              <i />
            </div>
            <h3>Scalable as you grow</h3>
            <p>Start simple, then graduate into professional platforms and deeper tools.</p>
          </article>
          <article className="bento-card bento-wide bento-platforms">
            <div>
              <h3>Connected workflow</h3>
              <p>Move between MetaTrader 5, cTrader, funding, watchlists and support without losing context.</p>
            </div>
            <div className="platform-bubbles" aria-hidden="true">
              <span>MT5</span>
              <span>cT</span>
              <span>FX</span>
              <span>API</span>
              <span>Pay</span>
            </div>
          </article>
          <article className="bento-card bento-wide bento-humans">
            <div>
              <h3>Human help in real time</h3>
              <p>Approachable support and clear trading guidance, backed by institutional-grade systems.</p>
            </div>
            <div className="support-orbits" aria-hidden="true">
              <span>MM</span>
              <span>24/5</span>
              <span>VIP</span>
              <i>Desk online</i>
            </div>
          </article>
        </div>
        <a className="glass-ticket bento-glass-ticket" href="/login">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fingerprint-pattern" aria-hidden="true">
            <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
            <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
            <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
            <path d="M2 12a10 10 0 0 1 18-6" />
            <path d="M2 16h.01" />
            <path d="M21.8 16c.2-2 .131-5.354 0-6" />
            <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
            <path d="M8.65 22c.21-.66.45-1.32.57-2" />
            <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
          </svg>
          <span>
            <small>One secure trading desk</small>
            <strong>Open account access</strong>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
        <div className="bento-tags" aria-label="Movement Markets capabilities">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap" aria-hidden="true"><path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z" /></svg> Fast execution</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> Risk controls</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth" aria-hidden="true"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg> Global assets</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones" aria-hidden="true"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" /></svg> Real support</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock3 lucide-clock-3" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> 24/5 access</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-candlestick" aria-hidden="true"><path d="M9 5v4" /><rect width="4" height="6" x="7" y="9" rx="1" /><path d="M9 15v2" /><path d="M17 3v2" /><rect width="4" height="8" x="15" y="5" rx="1" /><path d="M17 13v3" /><path d="M3 3v16a2 2 0 0 0 2 2h16" /></svg> Pro tools</span>
        </div>
      </div>
    </section>
  );
}
