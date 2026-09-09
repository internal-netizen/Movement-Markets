// Long-form scroll story: cover, table of contents and the themed boards.
export default function ReportSuite() {
  return (
    <section className="report-suite" aria-label="Movement Markets trading capabilities">
      <div className="story-intro">
        <div className="story-intro-copy">
          <span className="story-kicker">The Movement belief</span>
          <h2>A broker should help<br />you act—not slow you down.</h2>
          <p>That means plain language when things are complex, serious technology when markets accelerate, and a real person when you need help.</p>
        </div>
        <div className="story-route" aria-label="Trading experience journey">
          <span>Learn</span>
          <i />
          <span>Move</span>
          <i />
          <span>Execute</span>
          <i />
          <span>Protect</span>
          <i />
          <span>Grow</span>
        </div>
        <div className="story-scroll">
          <span>01</span>
          <i />
          <small>Begin the story</small>
        </div>
      </div>
      <div className="report-cover report-board depth-board" data-chapter="01 · The idea">
        <div className="report-label">The Movement Standard · 2026</div>
        <div className="report-cover-grid">
          <div className="report-title-card">
            <span className="micro-pill">Designed around traders</span>
            <h2>Human by default.<br />Fast by design.</h2>
            <p>Institutional-grade foundations without the institutional distance.</p>
            <span className="round-action">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </span>
          </div>
          <figure className="report-image tall-image depth-media">
            <img src="/movement-ribs.png" alt="Silver ribbed abstract sculpture suggesting continuous market movement" />
          </figure>
          <figure className="report-image small-image depth-media">
            <img src="/movement-dark-waves.png" alt="Dark sculptural waves in premium studio lighting" />
          </figure>
        </div>
        <div className="report-cover-stats">
          <article className="lime-card">
            <span>Support philosophy</span>
            <strong>Talk to a trader-minded human</strong>
            <p>Clear answers, without the support maze.</p>
          </article>
          <article className="figure-card">
            <strong>6</strong>
            <span>global asset classes</span>
          </article>
          <article className="forest-card">
            <span>Performance philosophy</span>
            <strong>Fast. Calm. Reliable.</strong>
            <p>Technology that stays out of your way.</p>
          </article>
        </div>
      </div>
      <div className="report-toc report-board depth-board" data-chapter="02 · The route">
        <div className="report-label">Explore the ecosystem</div>
        <div className="toc-card-grid">
          <a href="#markets">
            <small>01 · Access</small>
            <strong>Global Markets</strong>
            <span>FX, metals, indices, energy, shares and crypto.</span>
          </a>
          <a href="#platforms">
            <small>02 · Platforms</small>
            <strong>Trading Technology</strong>
            <span>MT5 and cTrader across desktop and mobile.</span>
          </a>
          <a href="#pricing" className="toc-lime">
            <small>03 · Pricing</small>
            <strong>Clear Conditions</strong>
            <span>Indicative spreads and transparent account terms.</span>
          </a>
          <a href="#execution" className="toc-forest">
            <small>04 · Execution</small>
            <strong>Built for Speed</strong>
            <span>Responsive infrastructure for active markets.</span>
          </a>
          <a href="#responsibility">
            <small>05 · Protection</small>
            <strong>Responsible Trading</strong>
            <span>Clear risk information and account safeguards.</span>
          </a>
          <a href="/login">
            <small>06 · Start</small>
            <strong>Open an Account</strong>
            <span>A simple path from verification to your first trade.</span>
          </a>
        </div>
        <div className="toc-bottom">
          <h2>Your trading<br />table of content.</h2>
          <p>Everything a modern trader needs, structured into one coherent experience.</p>
          <span className="mini-orbit">
            <span className="brand-mark " aria-hidden="true">
              <span />
              <span />
            </span>
          </span>
        </div>
      </div>
      <div className="achievement-board report-board depth-board" data-chapter="03 · Performance" id="execution">
        <div className="report-label">Performance snapshot · Illustrative metrics</div>
        <div className="achievement-grid">
          <figure className="portrait-visual depth-media">
            <img src="/movement-rise.png" alt="Chrome folded ribbon rising upward on a dark background" />
            <span className="round-action">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up" aria-hidden="true">
                <path d="M16 7h6v6" />
                <path d="m22 7-8.5 8.5-5-5L2 17" />
              </svg>
            </span>
          </figure>
          <article className="metric-card metric-white">
            <span>Platform availability</span>
            <strong>99.9%</strong>
            <p>Infrastructure designed to stay ready when markets move.</p>
          </article>
          <article className="metric-card metric-lime">
            <span>Average execution</span>
            <strong>{'<'}30ms</strong>
            <p>Illustrative performance target for rapid trade routing.</p>
          </article>
          <div className="achievement-title">
            <h2>Performance<br />built into every click.</h2>
            <p>From infrastructure availability to fast trade routing, every layer is designed around trader momentum.</p>
          </div>
        </div>
      </div>
      <div className="innovation-board report-board depth-board" data-chapter="04 · Technology">
        <div className="innovation-topline">
          <div>
            <span className="inline-chip"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu" aria-hidden="true"><path d="M12 20v2" /><path d="M12 2v2" /><path d="M17 20v2" /><path d="M17 2v2" /><path d="M2 12h2" /><path d="M2 17h2" /><path d="M2 7h2" /><path d="M20 12h2" /><path d="M20 17h2" /><path d="M20 7h2" /><path d="M7 20v2" /><path d="M7 2v2" /><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="8" y="8" width="8" height="8" rx="1" /></svg> Our technology</span>
            <p>Purpose-built systems connect pricing, platforms and execution in one coordinated trading environment.</p>
          </div>
          <h2>Technology<br />& execution.</h2>
        </div>
        <div className="innovation-grid">
          <article className="tech-card tech-lime">
            <small>01</small>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network" aria-hidden="true">
              <rect x="16" y="16" width="6" height="6" rx="1" />
              <rect x="2" y="16" width="6" height="6" rx="1" />
              <rect x="9" y="2" width="6" height="6" rx="1" />
              <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
              <path d="M12 12V8" />
            </svg>
            <h3>Smart liquidity routing</h3>
            <p>Orders are directed through connected liquidity pathways to support efficient execution.</p>
          </article>
          <article className="tech-card tech-forest">
            <small>02</small>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-radio-tower" aria-hidden="true">
              <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
              <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
              <circle cx="12" cy="9" r="2" />
              <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
              <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
              <path d="M9.5 18h5" />
              <path d="m8 22 4-11 4 11" />
            </svg>
            <h3>Connected platforms</h3>
            <p>Keep your account, watchlists and trading access consistent across supported devices.</p>
          </article>
          <figure className="innovation-visual depth-media">
            <img src="/movement-ribs.png" alt="Monochrome ribbed loops representing connected trading systems" />
          </figure>
        </div>
      </div>
      <div className="access-board report-board depth-board" data-chapter="05 · Access">
        <div className="report-label">Market access breakdown</div>
        <div className="access-grid">
          <div className="access-intro">
            <h2>Global access.<br />One account.</h2>
            <p>Move across the world's most actively traded markets without leaving your Movement Markets account.</p>
            <small>Product availability varies by jurisdiction and account type.</small>
          </div>
          <div className="access-data">
            <figure className="depth-media">
              <img src="/movement-dark-waves.png" alt="Dark flowing forms representing global market liquidity" />
              <span className="round-action">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </figure>
            <div className="access-bar bar-lime">
              <span>Forex</span>
              <strong>60+ pairs</strong>
            </div>
            <div className="access-bar bar-forest">
              <span>Indices & commodities</span>
              <strong>30+ markets</strong>
            </div>
            <div className="access-bar bar-fog">
              <span>Shares & crypto CFDs</span>
              <strong>100+ instruments</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="partnership-board report-board depth-board" data-chapter="06 · Liquidity">
        <div className="report-label">Relationships that power execution</div>
        <div className="partnership-grid">
          <div className="partnership-copy">
            <h2>Partnerships that<br />deliver value.</h2>
            <blockquote>“Strong technology matters. Strong market access makes it useful.”</blockquote>
            <p>Our model is built around reliable infrastructure, connected pricing and relationships designed to keep the trading experience responsive.</p>
            <span className="forest-badge"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake" aria-hidden="true"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg> Liquidity-led execution</span>
          </div>
          <figure className="depth-media">
            <img src="/movement-dark-waves.png" alt="Premium black sculptural folds symbolising liquidity partnerships" />
          </figure>
        </div>
      </div>
      <div className="responsibility-board report-board depth-board" data-chapter="07 · Control" id="responsibility">
        <div className="report-label">Technology with responsibility</div>
        <div className="responsibility-grid">
          <div className="responsibility-list">
            <article>
              <strong>Clear risk information</strong>
              <p>Understand leverage, margin requirements and product risk before trading.</p>
            </article>
            <article>
              <strong>Account safeguards</strong>
              <p>Secure access, verification and risk controls support a more informed trading experience.</p>
            </article>
            <h2>Move with<br />more awareness.</h2>
          </div>
          <figure className="depth-media">
            <img src="/movement-rise.png" alt="Silver rising sculpture representing disciplined trading progress" />
            <span className="round-action">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
          </figure>
        </div>
      </div>
      <div className="strategy-board report-board depth-board" data-chapter="08 · Connection">
        <div className="report-label">A connected trading ecosystem</div>
        <div className="strategy-grid">
          <figure className="depth-media">
            <img src="/movement-ribs.png" alt="Silver connected loops symbolising strategic platform partnerships" />
            <span className="lime-sticker">Built to connect</span>
          </figure>
          <div className="strategy-content">
            <h2>Strategic<br />connections.</h2>
            <div className="strategy-cards">
              <article className="lime-card">
                <small>01</small>
                <strong>Liquidity network</strong>
                <p>Connected access designed to support consistent pricing.</p>
              </article>
              <article>
                <small>02</small>
                <strong>Platform ecosystem</strong>
                <p>Professional tools selected for flexible, modern trading.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="story-exit">
        <span>Next</span>
        <h2>See the conditions<br />behind the movement.</h2>
        <a href="#pricing">Explore pricing <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
      </div>
    </section>
  );
}
