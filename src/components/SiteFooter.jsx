import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../data/legalDocuments.js';
import BrandLogo from './BrandLogo.jsx';
import { CLIENT_LOGIN_URL, CLIENT_SIGNUP_URL, PARTNER_PORTAL_URL } from '../config/portalLinks.js';

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCookieSettings = () => {
    if (typeof window !== 'undefined') {
      if (window.Cookiebot && typeof window.Cookiebot.renew === 'function') {
        window.Cookiebot.renew();
      }
      window.dispatchEvent(new CustomEvent('open-cookie-settings'));
    }
  };

  return (
    <footer className="site-footer" id="company">
      <div className="footer-inner">
        
        {/* Brand Column */}
        <div className="footer-brand-column">
          <Link className="brand brand-dark" to="/" aria-label="Movement Markets home">
            <BrandLogo />
          </Link>
          <p className="footer-brand-desc">
            Next-generation execution technology and ultra-tight raw spreads, built for traders who notice the difference.
          </p>

          <a className="support-link" href={`mailto:${COMPANY_DETAILS.supportEmail}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            {COMPANY_DETAILS.supportEmail}
          </a>
        </div>

        {/* 5 Navigation Columns */}
        <div className="footer-links">
          <h3>Markets</h3>
          <Link to="/markets/forex">Forex</Link>
          <Link to="/markets/indices">Indices</Link>
          <Link to="/markets/commodities">Metals & Energy</Link>
          <Link to="/markets/shares">Shares</Link>
          <Link to="/markets/crypto">Crypto</Link>
        </div>

        <div className="footer-links">
          <h3>Trading</h3>
          <Link to="/accounts">Account Types</Link>
          <Link to="/accounts#compare">Spreads & Commissions</Link>
          <Link to="/#funding">Deposits &amp; Withdrawals</Link>
          <Link to="/partners">Partner Programme</Link>
          <a href={PARTNER_PORTAL_URL}>Partner Portal</a>
          <a href={CLIENT_SIGNUP_URL}>Open an Account</a>
        </div>

        <div className="footer-links">
          <h3>Platforms & Tools</h3>
          <Link to="/platforms/xpert-trader">Xpert Trader</Link>
          <Link to="/platforms/webtrader">WebTrader</Link>
          <Link to="/tools/economic-calendar">Economic Calendar</Link>
          <Link to="/tools/market-hours">Market Hours</Link>
          <Link to="/tools/calculators">Trading Calculators</Link>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/help">Help Centre</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/legal">Regulatory Compliance</Link>
          <a href={CLIENT_LOGIN_URL}>Client Portal Login</a>
        </div>

        {/* Footer Top Links Bar */}
        <div className="footer-links-bar">
          <div className="footer-bar-left">
            <span>© 2026 · ALL RIGHTS RESERVED</span>
          </div>
          <div className="footer-bar-right">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="footer-cookie-link-btn"
            >
              Cookie Settings
            </button>
            <Link to="/risk-disclosure">Risk Disclosure</Link>
            <Link to="/legal">Legal Hub</Link>
            <button
              type="button"
              className="scroll-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              ↑ Top
            </button>
          </div>
        </div>

        {/* Elefin-Style Clean Typographic Disclaimers (No Boxes) */}
        <div className="footer-disclaimers">

          {/* RISK WARNING */}
          <div className="footer-disclaimer-group">
            <p className="disclaimer-title">RISK WARNING</p>
            <div className="disclaimer-text">
              <p>
                <strong>RISK WARNING:</strong> Trading derivatives, including Contracts for Difference (CFDs), foreign exchange (Forex), commodities, indices, stocks, and cryptocurrencies, involves a high level of risk and may not be suitable for all investors. Leveraged trading can result in losses exceeding your initial deposit. Before engaging in trading activities, you should carefully consider your investment objectives, level of experience, and risk appetite.
              </p>
              <p>
                The information provided on this website is for informational purposes only and should not be considered investment advice, financial advice, trading advice, or any other form of recommendation. {COMPANY_DETAILS.shortName} does not guarantee the accuracy or completeness of any information presented on this website.
              </p>
              <p>
                You should not invest money that you cannot afford to lose. We strongly recommend seeking independent financial, legal, and tax advice before making any trading or investment decisions.
              </p>
              <p>
                Past performance does not guarantee future results. Financial markets are volatile and trading may result in partial or total loss of funds.
              </p>
            </div>
          </div>

          {/* RESTRICTED REGIONS */}
          <div className="footer-disclaimer-group">
            <p className="disclaimer-title">RESTRICTED REGIONS</p>
            <div className="disclaimer-text">
              <p>
                <strong>Restricted Regions:</strong> {COMPANY_DETAILS.shortName} does not provide services to residents or citizens of jurisdictions where such services would be contrary to local laws or regulations, including but not limited to the United States, Cuba, North Korea, Sudan, Syria, Iran, Myanmar, United Arab Emirates (UAE), and other restricted jurisdictions.
              </p>
              <p>
                The information on this website is not directed at residents of any country or jurisdiction where the distribution or use of such information would be contrary to local law or regulation.
              </p>
              <p>
                Users are responsible for ensuring that accessing and using {COMPANY_DETAILS.shortName}'s services is compliant with the laws and regulations applicable in their country of residence.
              </p>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="footer-corporate-divider" />

        {/* Corporate Statement Block (Exact Elefin Format) */}
        <div className="footer-corporate-block">
          <p className="corporate-heading">© 2026 {COMPANY_DETAILS.legalName}. All Rights Reserved.</p>
          <p>
            {COMPANY_DETAILS.legalName} is registered in {COMPANY_DETAILS.jurisdiction} (Registration No. {COMPANY_DETAILS.registrationNo}). Registered office: {COMPANY_DETAILS.registeredAddress}. Governed by the {COMPANY_DETAILS.governingLaw}.
          </p>
          <p className="corporate-platform-summary">
            Movement Markets is an online trading platform offering access to global financial markets through derivative products and CFDs.
          </p>
        </div>

      </div>
    </footer>
  );
}
