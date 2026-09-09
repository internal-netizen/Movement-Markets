import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { COMPANY_DETAILS, LEGAL_DOCUMENTS, COOKIE_CATEGORIES } from '../data/legalDocuments.js';
import '../styles/site.css';
import '../styles/movement-home.css';

const STORE_KEY = 'mm-design-theme';

function initialTheme() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // fallback
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

export default function Legal({ defaultDoc }) {
  const { docId } = useParams();
  const [theme, setTheme] = useState(initialTheme);
  const isDark = theme === 'dark';
  const [consentData, setConsentData] = useState(null);

  // Determine active document from URL or prop
  const activeId = docId || defaultDoc || 'client-agreement';
  const activeDoc = LEGAL_DOCUMENTS.find(d => d.id === activeId) || LEGAL_DOCUMENTS[0];

  // Filter out internal alias from sidebar
  const sidebarDocs = LEGAL_DOCUMENTS.filter(d => d.id !== 'order-execution');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${activeDoc.title} | ${COMPANY_DETAILS.shortName}`;
  }, [activeDoc]);

  // Load and listen for cookie consent updates
  useEffect(() => {
    const loadConsent = () => {
      try {
        const raw = localStorage.getItem('mm_cookie_consent');
        if (raw) setConsentData(JSON.parse(raw));
        else setConsentData(null);
      } catch {
        setConsentData(null);
      }
    };
    loadConsent();

    const handleUpdated = (e) => {
      if (e.detail && e.detail.consentId && e.detail.consentId !== 'mm-withdrawn') {
        setConsentData(e.detail);
      } else {
        setConsentData(null);
      }
    };

    window.addEventListener('cookie-consent-updated', handleUpdated);
    return () => window.removeEventListener('cookie-consent-updated', handleUpdated);
  }, []);

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem(STORE_KEY, next);
      document.documentElement.setAttribute('data-theme', next);
      window.dispatchEvent(new CustomEvent('mm-theme-change', { detail: next }));
    } catch {
      // ignore
    }
  };

  const handleOpenCookieSettings = () => {
    if (typeof window !== 'undefined') {
      if (window.Cookiebot && typeof window.Cookiebot.renew === 'function') {
        window.Cookiebot.renew();
      }
      window.dispatchEvent(new CustomEvent('open-cookie-settings'));
    }
  };

  const handleWithdrawConsent = () => {
    if (window.Cookiebot && window.Cookiebot.withdraw) {
      window.Cookiebot.withdraw();
    } else {
      try {
        localStorage.removeItem('mm_cookie_consent');
      } catch {
        // ignore
      }
      setConsentData(null);
      window.dispatchEvent(new CustomEvent('open-cookie-settings'));
    }
  };

  return (
    <div className="mm-design" data-theme={theme} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: isDark ? '#0c0c0c' : '#f4f6fa', color: isDark ? '#fff' : '#111' }}>
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />

      {/* Hero Banner */}
      <section style={{
        padding: '130px 24px 48px',
        background: isDark 
          ? 'radial-gradient(circle at 50% -20%, rgba(176,240,0,0.08) 0%, rgba(12,12,12,0) 70%), #0c0c0c' 
          : 'radial-gradient(circle at 50% -20%, rgba(176,240,0,0.2) 0%, rgba(244,246,250,0) 70%), #f4f6fa',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px', borderRadius: '999px',
            background: isDark ? 'rgba(176,240,0,0.12)' : 'rgba(110,138,15,0.12)',
            color: isDark ? '#b0f000' : '#4d630a',
            fontSize: '13px', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Regulatory & Legal Compliance
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 4vw, 54px)',
            fontWeight: '600',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            margin: '0 0 16px 0',
          }}>
            Legal Documents & Policies
          </h1>

          <p style={{
            fontSize: '16px',
            color: isDark ? '#a0a0a0' : '#555',
            maxWidth: '780px',
            lineHeight: '1.6',
            margin: '0 0 24px 0',
          }}>
            Review the terms, policies, and regulatory disclosures governing trading accounts, safety of funds, and execution operations with {COMPANY_DETAILS.legalName}.
          </p>

        </div>
      </section>

      {/* Main Content Layout: Sidebar + Document */}
      <div style={{ maxWidth: '1240px', width: '100%', margin: '0 auto', padding: '48px 24px 80px', flex: '1 0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 320px) 1fr',
          gap: '40px',
          alignItems: 'start',
        }} className="legal-layout-grid">

          {/* Left Navigation Sidebar */}
          <aside style={{
            position: 'sticky',
            top: '110px',
            background: isDark ? '#141414' : '#fff',
            borderRadius: '20px',
            padding: '24px',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
            boxShadow: isDark ? '0 12px 32px rgba(0,0,0,0.4)' : '0 8px 24px rgba(0,0,0,0.05)',
          }}>
            <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: isDark ? '#777' : '#888', marginBottom: '16px' }}>
              Documents & Policies
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sidebarDocs.map((doc) => {
                const isActive = doc.id === activeDoc.id || (activeDoc.id === 'order-execution' && doc.id === 'general-business-terms');
                return (
                  <Link
                    key={doc.id}
                    to={`/legal/${doc.id}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: isActive ? '600' : '400',
                      transition: 'all 0.2s',
                      background: isActive 
                        ? (isDark ? 'rgba(176,240,0,0.12)' : '#0c0c0c')
                        : 'transparent',
                      color: isActive 
                        ? (isDark ? '#b0f000' : '#ffffff')
                        : (isDark ? '#aaa' : '#555'),
                      border: isActive 
                        ? (isDark ? '1px solid rgba(176,240,0,0.3)' : '1px solid #0c0c0c')
                        : '1px solid transparent',
                      boxShadow: isActive && !isDark ? '0 4px 12px rgba(0,0,0,0.12)' : 'none',
                    }}
                  >
                    <span>{doc.shortTitle}</span>
                    {isActive && (
                      <span style={{ fontSize: '16px' }}>→</span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)' }}>
              <p style={{ fontSize: '12px', color: isDark ? '#777' : '#888', margin: '0 0 12px 0', lineHeight: '1.5' }}>
                Need help or clarification regarding our legal documents?
              </p>
              <a
                href={`mailto:${COMPANY_DETAILS.supportEmail}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontSize: '13px', fontWeight: '600',
                  color: isDark ? '#b0f000' : '#0c0c0c',
                  textDecoration: 'none',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                {COMPANY_DETAILS.supportEmail}
              </a>
            </div>
          </aside>

          {/* Right Main Document Content */}
          <main style={{
            background: isDark ? '#141414' : '#fff',
            borderRadius: '24px',
            padding: 'clamp(24px, 4vw, 44px)',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
            boxShadow: isDark ? '0 12px 40px rgba(0,0,0,0.4)' : '0 8px 30px rgba(0,0,0,0.04)',
          }}>
            {/* Document Header */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start',
              gap: '16px', paddingBottom: '24px',
              borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
              marginBottom: '32px',
            }}>
              <div>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em',
                  color: isDark ? '#b0f000' : '#2b3a03',
                  background: isDark ? 'rgba(176,240,0,0.12)' : 'rgba(176,240,0,0.22)',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  marginBottom: '10px',
                }}>
                  {activeDoc.category}
                </span>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '600', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>
                  {activeDoc.title}
                </h2>
                <div style={{ fontSize: '13px', color: isDark ? '#888' : '#777' }}>
                  Last Updated: {activeDoc.lastUpdated} · Official Policy Document
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {activeDoc.id === 'cookie-policy' && (
                  <button
                    type="button"
                    onClick={handleOpenCookieSettings}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '10px 20px', borderRadius: '999px',
                      background: isDark ? 'rgba(176,240,0,0.15)' : '#0c0c0c',
                      border: isDark ? '1px solid rgba(176,240,0,0.3)' : '1px solid #0c0c0c',
                      color: isDark ? '#b0f000' : '#ffffff',
                      fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                      boxShadow: isDark ? '0 0 16px rgba(176,240,0,0.18)' : '0 4px 14px rgba(0,0,0,0.15)',
                      transition: 'all 0.2s',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    Cookie Settings
                  </button>
                )}

              </div>
            </div>

            {/* Document Overview Callout */}
            <div style={{
              padding: '18px 22px', borderRadius: '14px',
              background: isDark ? 'rgba(176,240,0,0.06)' : 'rgba(176,240,0,0.18)',
              border: isDark ? '1px solid rgba(176,240,0,0.2)' : '1px solid rgba(160,195,30,0.3)',
              marginBottom: '36px',
            }}>
              <p style={{
                margin: 0, fontSize: '14px', lineHeight: '1.6',
                color: isDark ? '#b0f000' : '#2d3b04',
                fontWeight: '500',
              }}>
                {activeDoc.description}
              </p>
            </div>

            {/* If Cookie Policy: Render Interactive Cookiebot Status & Declaration */}
            {activeDoc.id === 'cookie-policy' && (
              <div style={{
                marginBottom: '40px',
                padding: '24px 28px',
                borderRadius: '20px',
                background: isDark ? 'radial-gradient(ellipse at 50% 0%, rgba(176,240,0,0.06) 0%, #141714 80%)' : '#ffffff',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                boxShadow: isDark ? '0 16px 40px rgba(0,0,0,0.45)' : '0 8px 24px rgba(0,0,0,0.04)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      background: isDark ? 'rgba(176,240,0,0.14)' : '#0c0c0c',
                      color: '#b0f000',
                      border: isDark ? '1px solid rgba(176,240,0,0.3)' : '1px solid #0c0c0c',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: isDark ? '0 0 16px rgba(176,240,0,0.2)' : '0 2px 8px rgba(0,0,0,0.2)',
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '17px', fontWeight: '700', letterSpacing: '-0.01em' }}>Your Current Cookie Consent</h3>
                      <span style={{ fontSize: '12px', color: isDark ? '#889088' : '#667085' }}>Movement Markets Consent Management Platform (CMP)</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      type="button"
                      onClick={handleOpenCookieSettings}
                      style={{
                        padding: '9px 20px', borderRadius: '999px',
                        background: isDark ? '#b0f000' : '#0c0c0c',
                        color: isDark ? '#0c0c0c' : '#ffffff',
                        border: 'none', fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                        boxShadow: isDark ? '0 4px 16px rgba(176,240,0,0.28)' : '0 4px 14px rgba(0,0,0,0.18)',
                        transition: 'all 0.2s',
                      }}
                    >
                      Change your consent
                    </button>
                    <button
                      type="button"
                      onClick={handleWithdrawConsent}
                      style={{
                        padding: '9px 18px', borderRadius: '999px',
                        background: isDark ? 'rgba(255,255,255,0.06)' : '#f2f4f7',
                        color: isDark ? '#d0d5dd' : '#344054',
                        border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)',
                        fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      Withdraw consent
                    </button>
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '12px',
                  padding: '14px',
                  borderRadius: '10px',
                  background: isDark ? 'rgba(0,0,0,0.2)' : '#fff',
                  border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)',
                  fontSize: '12px',
                }}>
                  <div>
                    <span style={{ color: '#888', display: 'block' }}>Consent ID:</span>
                    <strong style={{ fontFamily: 'monospace' }}>{consentData?.consentId || 'mm-cb-default'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#888', display: 'block' }}>Consent Date:</span>
                    <strong>{consentData?.timestamp ? new Date(consentData.timestamp).toLocaleDateString() : 'Active'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#888', display: 'block' }}>Preferences Allowed:</span>
                    <strong style={{ color: consentData?.preferences ? '#22c55e' : '#888' }}>
                      {consentData?.preferences ? 'Yes' : 'No'}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: '#888', display: 'block' }}>Statistics Allowed:</span>
                    <strong style={{ color: consentData?.statistics ? '#22c55e' : '#888' }}>
                      {consentData?.statistics ? 'Yes' : 'No'}
                    </strong>
                  </div>
                </div>

                {/* Declarations Tables */}
                <div style={{ marginTop: '28px' }}>
                  <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: isDark ? '#b0f000' : '#0c0c0c' }}>
                    Cookie Declaration (Movement Markets Registry)
                  </h4>

                  {COOKIE_CATEGORIES.map(cat => (
                    <div key={cat.id} style={{ marginBottom: '22px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)', marginBottom: '10px' }}>
                        <span style={{ fontWeight: '600', fontSize: '14px' }}>{cat.title} ({cat.cookies.length})</span>
                        <span style={{
                          fontSize: '11px', fontWeight: '600',
                          padding: '2px 8px', borderRadius: '999px',
                          background: cat.required 
                            ? (isDark ? 'rgba(176,240,0,0.12)' : 'rgba(0,0,0,0.05)')
                            : (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'),
                          color: cat.required ? (isDark ? '#b0f000' : '#0c0c0c') : (isDark ? '#888' : '#666'),
                        }}>
                          {cat.required ? 'Always active' : 'Consent-based'}
                        </span>
                      </div>
                      <p style={{ margin: '0 0 12px 0', fontSize: '12.5px', color: isDark ? '#98a2b3' : '#667085', lineHeight: '1.55' }}>
                        {cat.description}
                      </p>
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                          <thead>
                            <tr style={{ background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)', textAlign: 'left' }}>
                              <th style={{ padding: '9px 12px', borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)' }}>Cookie</th>
                              <th style={{ padding: '9px 12px', borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)' }}>Provider</th>
                              <th style={{ padding: '9px 12px', borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)' }}>Purpose</th>
                              <th style={{ padding: '9px 12px', borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)' }}>Expiry</th>
                              <th style={{ padding: '9px 12px', borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)' }}>Type</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cat.cookies.map((c, i) => (
                              <tr key={i} style={{ borderBottom: isDark ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(0,0,0,0.04)' }}>
                                <td style={{ padding: '9px 12px' }}>
                                  <span style={{
                                    fontFamily: 'monospace',
                                    fontSize: '11.5px',
                                    fontWeight: '600',
                                    color: isDark ? '#b0f000' : '#0c0c0c',
                                    background: isDark ? 'rgba(176,240,0,0.08)' : 'rgba(0,0,0,0.04)',
                                    padding: '2px 8px',
                                    borderRadius: '5px',
                                  }}>
                                    {c.name}
                                  </span>
                                </td>
                                <td style={{ padding: '9px 12px' }}>{c.provider}</td>
                                <td style={{ padding: '9px 12px', color: isDark ? '#ced4da' : '#344054' }}>{c.purpose}</td>
                                <td style={{ padding: '9px 12px' }}>{c.expiry}</td>
                                <td style={{ padding: '9px 12px' }}>{c.type}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Document Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {activeDoc.sections.map((sec, idx) => (
                <section key={idx} style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                  border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    letterSpacing: '-0.01em',
                    margin: '0 0 14px 0',
                    color: isDark ? '#f4f4f4' : '#111',
                    display: 'flex', alignItems: 'center', gap: '8px'
                  }}>
                    {sec.heading}
                  </h3>
                  <div style={{
                    fontSize: '14px',
                    lineHeight: '1.75',
                    color: isDark ? '#b5b5b5' : '#4a4a4a',
                    whiteSpace: 'pre-line',
                  }}>
                    {sec.content}
                  </div>
                </section>
              ))}
            </div>

            <p style={{ marginTop: '40px', fontSize: '12px', lineHeight: '1.6', color: isDark ? '#6f7772' : '#8b929c' }}>
              Issued by {COMPANY_DETAILS.legalName} (Reg. {COMPANY_DETAILS.registrationNo}), {COMPANY_DETAILS.registeredAddress}. Governed by the {COMPANY_DETAILS.governingLaw}.
            </p>
          </main>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
