// Three-step account opening path.
export default function OpenAccount() {
  return (
    <section className="open-account-section section-wrap" id="open-account">
      <div className="section-heading centered">
        <div className="eyebrow"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" /></svg> Three simple steps</div>
        <h2>From account to market<br />in minutes.</h2>
        <p>A clear account-opening journey, designed to keep every step quick and understandable.</p>
      </div>
      <div className="steps-grid">
        <article>
          <span className="step-number">01</span>
          <div className="step-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check" aria-hidden="true">
              <path d="m16 11 2 2 4-4" />
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
          </div>
          <h3>Create your account</h3>
          <p>Enter your details and complete the secure verification process.</p>
        </article>
        <article>
          <span className="step-number">02</span>
          <div className="step-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card" aria-hidden="true">
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <h3>Add funds</h3>
          <p>Choose a supported payment method and fund your trading wallet.</p>
        </article>
        <article>
          <span className="step-number">03</span>
          <div className="step-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-candlestick" aria-hidden="true">
              <path d="M9 5v4" />
              <rect width="4" height="6" x="7" y="9" rx="1" />
              <path d="M9 15v2" />
              <path d="M17 3v2" />
              <rect width="4" height="8" x="15" y="5" rx="1" />
              <path d="M17 13v3" />
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
            </svg>
          </div>
          <h3>Start trading</h3>
          <p>Pick your platform, find your market and take your position.</p>
        </article>
      </div>
    </section>
  );
}
