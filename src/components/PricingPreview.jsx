// Indicative spreads table with instrument tabs.
export default function PricingPreview() {
  return (
    <section className="pricing-preview section-wrap" id="pricing">
      <div className="section-heading centered compact-heading">
        <div className="eyebrow"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dollar-sign" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg> Transparent pricing</div>
        <h2>Tighter spreads.<br />Cleaner execution.</h2>
        <p>See indicative pricing across our most popular instruments.</p>
      </div>
      <div className="rates-card">
        <div className="rates-tabs">
          <span className="active">FX Majors</span>
          <span>Metals</span>
          <span>Indices</span>
          <span>Crypto</span>
        </div>
        <div className="rates-table" role="table" aria-label="Indicative market prices">
          <div className="rate-row rate-head" role="row">
            <span>Instrument</span>
            <span>Bid</span>
            <span>Ask</span>
            <span>Move</span>
          </div>
          <div className="rate-row" role="row">
            <span>
              <b>EUR/USD</b>
              <small>Spot</small>
            </span>
            <span>1.16842</span>
            <span>1.16847</span>
            <span className="up">+0.18%</span>
          </div>
          <div className="rate-row" role="row">
            <span>
              <b>GBP/USD</b>
              <small>Spot</small>
            </span>
            <span>1.34771</span>
            <span>1.34779</span>
            <span className="up">+0.24%</span>
          </div>
          <div className="rate-row" role="row">
            <span>
              <b>USD/JPY</b>
              <small>Spot</small>
            </span>
            <span>147.286</span>
            <span>147.298</span>
            <span className="down">-0.11%</span>
          </div>
          <div className="rate-row" role="row">
            <span>
              <b>XAU/USD</b>
              <small>Spot</small>
            </span>
            <span>3,418.52</span>
            <span>3,419.14</span>
            <span className="up">+0.62%</span>
          </div>
        </div>
        <div className="rates-foot"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg> Illustrative prices shown for design preview only</div>
      </div>
    </section>
  );
}
