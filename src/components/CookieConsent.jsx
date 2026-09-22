import useSiteTheme from '../hooks/useSiteTheme.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COOKIE_CATEGORIES, COMPANY_DETAILS } from '../data/legalDocuments.js';
import {
  STORAGE_KEY,
  getStoredConsent,
  persistConsent,
  clearConsent,
  syncGoogleConsentMode,
} from '../utils/cookieConsent.js';
import '../styles/cookie-consent.css';


export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('consent'); // 'consent' | 'details' | 'about'
  const [theme] = useSiteTheme();
  const [preferences, setPreferences] = useState({
    necessary: true,
    preferences: true,
    statistics: true,
    marketing: false,
  });

  // Initialize consent state, establish Google Consent Mode default, and register window.Cookiebot API
  useEffect(() => {
    const savedConsent = getStoredConsent();

    // Initialize Google Consent Mode v2 default state
    syncGoogleConsentMode(savedConsent, true);

    if (savedConsent) {
      setPreferences({
        necessary: true,
        preferences: !!savedConsent.preferences,
        statistics: !!savedConsent.statistics,
        marketing: !!savedConsent.marketing,
      });
      // Do not auto open if already saved
      setIsOpen(false);
    } else {
      // First time visitor: show the banner after a short delay — and if the
      // load intro is playing, only once its curtain has lifted.
      let timer = null;
      const open = () => { timer = setTimeout(() => setIsOpen(true), 600); };
      const introActive = document.documentElement.classList.contains('intro-active');
      if (introActive) window.addEventListener('mm-intro-done', open, { once: true });
      else open();
      return () => {
        if (timer) clearTimeout(timer);
        window.removeEventListener('mm-intro-done', open);
      };
    }

    // Register global Cookiebot API for seamless external/script integration
    window.Cookiebot = {
      consent: savedConsent || {
        necessary: true,
        preferences: true,
        statistics: true,
        marketing: false,
      },
      consented: !!savedConsent,
      renew: () => {
        setIsOpen(true);
        setActiveTab('consent');
      },
      show: () => {
        setIsOpen(true);
      },
      withdraw: () => {
        clearConsent();
        setPreferences({
          necessary: true,
          preferences: false,
          statistics: false,
          marketing: false,
        });
        setIsOpen(true);
      },
    };

    // Custom event listener for "Cookie Settings" triggers anywhere in the app
    const handleOpenSettings = () => {
      setIsOpen(true);
      setActiveTab('consent');
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => {
      window.removeEventListener('open-cookie-settings', handleOpenSettings);
    };
  }, []);

  const saveConsent = (updated) => {
    persistConsent(updated);
    setPreferences(updated);
    setIsOpen(false);
  };

  const handleAllowAll = () => {
    saveConsent({
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    });
  };

  const handleDeny = () => {
    saveConsent({
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
    });
  };

  const handleAllowSelection = () => {
    saveConsent(preferences);
  };

  const toggleCategory = (catId) => {
    if (catId === 'necessary') return; // locked
    setPreferences(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`cookiebot-backdrop ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(false)} 
        aria-hidden="true" 
      />

      {/* Main Cookiebot Dialog */}
      <div 
        className={`cookiebot-modal-container ${isOpen ? 'open' : ''}`}
        data-theme={theme}
        role="dialog"
        aria-labelledby="cookiebot-modal-title"
        aria-modal="true"
      >
        {/* Header */}
        <div className="cookiebot-header">
          <div className="cookiebot-header-left">
            <div className="cookiebot-logo-badge" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h2 id="cookiebot-modal-title" className="cookiebot-title">
                Movement Markets Cookie Preferences
              </h2>
              <div className="cookiebot-powered">
                Movement Markets Ltd · Institutional Privacy & Compliance
              </div>
            </div>
          </div>

          <button 
            type="button" 
            className="cookiebot-close-btn" 
            onClick={() => setIsOpen(false)}
            aria-label="Close cookie consent window"
          >
            ✕
          </button>
        </div>

        {/* Tab Bar */}
        <div className="cookiebot-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'consent'}
            className={`cookiebot-tab ${activeTab === 'consent' ? 'active' : ''}`}
            onClick={() => setActiveTab('consent')}
          >
            Consent
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'details'}
            className={`cookiebot-tab ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'about'}
            className={`cookiebot-tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About Cookies
          </button>
        </div>

        {/* Tab Body */}
        <div className="cookiebot-body">
          {activeTab === 'consent' && (
            <div>
              <p className="cookiebot-intro-text">
                We use cookies to personalise content and features, to provide institutional trading security, and to analyze our trade routing latency and traffic. We also share information about your usage with authorized compliance and analytics partners in accordance with our <Link to="/cookies" onClick={() => setIsOpen(false)}>Cookie Policy</Link> and <Link to="/privacy" onClick={() => setIsOpen(false)}>Privacy Policy</Link>.
              </p>

              <div className="cookiebot-categories-grid">
                {COOKIE_CATEGORIES.map(cat => {
                  const isChecked = preferences[cat.id];
                  const isLocked = cat.required;
                  return (
                    <div
                      key={cat.id}
                      className={`cookiebot-category-card ${isChecked ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                      onClick={() => toggleCategory(cat.id)}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={isLocked ? -1 : 0}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          toggleCategory(cat.id);
                        }
                      }}
                    >
                      <div className="cookiebot-cat-top">
                        <span className="cookiebot-cat-label">{cat.title}</span>
                        <div className="cookiebot-checkbox-custom">
                          {isChecked && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="cookiebot-cat-sub">
                        {isLocked ? 'Always active' : (isChecked ? 'Enabled' : 'Disabled')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div>
              <p className="cookiebot-intro-text">
                A full declaration of all cookies utilized on {COMPANY_DETAILS.shortName}. Select categories above to adjust which cookies are permitted on your device.
              </p>

              {COOKIE_CATEGORIES.map(cat => (
                <div key={cat.id} className="cookiebot-detail-cat">
                  <div className="cookiebot-detail-head">
                    <span className="cookiebot-detail-title">{cat.title}</span>
                    <span className="cookiebot-detail-count">{cat.cookies.length} Cookies</span>
                  </div>
                  <p className="cookiebot-detail-desc">{cat.description}</p>
                  
                  <div style={{ overflowX: 'auto' }}>
                    <table className="cookiebot-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Provider</th>
                          <th>Purpose</th>
                          <th>Expiry</th>
                          <th>Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.cookies.map((c, i) => (
                          <tr key={i}>
                            <td><span className="cookiebot-code">{c.name}</span></td>
                            <td>{c.provider}</td>
                            <td>{c.purpose}</td>
                            <td>{c.expiry}</td>
                            <td>{c.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'about' && (
            <div>
              <p className="cookiebot-intro-text">
                Cookies are small text files that can be used by websites to make a user's experience more efficient.
              </p>
              <p className="cookiebot-intro-text">
                The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission.
              </p>
              <p className="cookiebot-intro-text">
                This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages. You can at any time change or withdraw your consent from the Cookie Declaration on our website.
              </p>
              <p className="cookiebot-intro-text">
                Learn more about who we are, how you can contact us and how we process personal data in our <Link to="/privacy" onClick={() => setIsOpen(false)}>Privacy Policy</Link>.
              </p>
              <p className="cookiebot-intro-text" style={{ fontSize: '12px', color: '#888' }}>
                Please state your consent ID and date when you contact us regarding your consent.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="cookiebot-footer">
          <div className="cookiebot-footer-links">
            <Link to="/cookies" className="cookiebot-footer-link" onClick={() => setIsOpen(false)}>
              Cookie Policy
            </Link>
            <span>·</span>
            <Link to="/privacy" className="cookiebot-footer-link" onClick={() => setIsOpen(false)}>
              Privacy Policy
            </Link>
          </div>

          <div className="cookiebot-actions">
            <button
              type="button"
              className="cookiebot-btn cookiebot-btn-deny"
              onClick={handleDeny}
            >
              Deny
            </button>
            <button
              type="button"
              className="cookiebot-btn cookiebot-btn-selection"
              onClick={handleAllowSelection}
            >
              Allow selection
            </button>
            <button
              type="button"
              className="cookiebot-btn cookiebot-btn-allow-all"
              onClick={handleAllowAll}
            >
              Allow all
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
