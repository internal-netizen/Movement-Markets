import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV } from '../data/siteNav.js';
import BrandLogo from './BrandLogo.jsx';
import '../styles/nav.css';

const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

const Chevron = () => (
  <svg className="nav-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
);

/**
 * Sticky top bar: brand, primary nav with dropdown panels, auth actions and
 * the mobile menu. The look is unchanged from the original bar; only the
 * items and the panels under them are new. Panels open on hover and on
 * click/focus so they work with a keyboard and on touch screens.
 */
export default function SiteHeader({ theme, onToggleTheme }) {
  const isDark = theme === 'dark';
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);
  const rootRef = useRef(null);
  const { pathname } = useLocation();

  // Route change closes everything.
  useEffect(() => { setOpen(null); setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    if (open === null && !mobileOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(null);
        setMobileOpen(false);
        if (mobileOpen) rootRef.current?.querySelector('.mobile-toggle')?.focus();
      }
    };
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('pointerdown', onDown); };
  }, [open, mobileOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1181px)');
    const resetMenus = () => { setOpen(null); setMobileOpen(false); };
    desktop.addEventListener('change', resetMenus);
    return () => { desktop.removeEventListener('change', resetMenus); clearTimeout(closeTimer.current); };
  }, []);

  const show = (i) => { clearTimeout(closeTimer.current); setOpen(i); };
  const hide = () => { clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setOpen(null), 140); };

  return (
    <header className={`site-header${open !== null ? ' has-open-menu' : ''}`} ref={rootRef}>
      <Link className="brand" to="/" aria-label="Movement Markets home">
        <BrandLogo />
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {NAV.map((item, i) => item.to ? (
          <Link key={item.label} to={item.to}>{item.label}</Link>
        ) : (
          <div
            key={item.label}
            className={`nav-item${open === i ? ' is-open' : ''}`}
            onMouseEnter={() => show(i)}
            onMouseLeave={hide}
          >
            <button
              type="button"
              className="nav-trigger"
              aria-expanded={open === i}
              aria-haspopup="true"
              onClick={() => setOpen(open === i ? null : i)}
              onFocus={() => show(i)}
            >
              {item.label} <Chevron />
            </button>
            <div className="nav-panel" role="menu" aria-label={`${item.label} menu`} onFocus={() => show(i)}>
              <div className={`nav-panel-grid cols-${item.columns.length}`}>
                {item.columns.map((col) => (
                  <div className="nav-col" key={col.title}>
                    <div className="nav-col-title">{col.title}</div>
                    {col.links.map((l) => (
                      <Link key={l.to} to={l.to} className={`nav-link${l.muted ? ' is-muted' : ''}`} role="menuitem">
                        <span className="nav-link-label">{l.label}</span>
                        {l.hint ? <span className="nav-link-hint">{l.hint}</span> : null}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </nav>

      <div className="header-actions">
        {onToggleTheme && (
          <button
            type="button"
            className="mm-theme-switch-nav"
            onClick={onToggleTheme}
            aria-pressed={!isDark}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            style={{ marginRight: '16px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span className="mm-theme-track" style={{ position: 'relative', display: 'inline-block', width: '40px', height: '22px', borderRadius: '12px', background: isDark ? '#333' : '#d0d4e2', transition: 'background 0.2s' }}>
              <span className="mm-theme-knob" style={{ position: 'absolute', top: '3px', left: isDark ? '21px' : '3px', width: '16px', height: '16px', borderRadius: '8px', background: isDark ? '#b0f000' : '#fff', transition: 'left 0.2s' }} />
            </span>
            <span className="mm-theme-label" style={{ fontSize: '13px', fontWeight: 600, color: isDark ? '#aaa' : '#666' }}>{isDark ? 'Dark' : 'Light'}</span>
          </button>
        )}
        <Link className="login-link" to="/login">Log in</Link>
        <Link className="pill-button pill-dark" to="/login">Open account <Arrow /></Link>
      </div>

      <div className={`mobile-menu${mobileOpen ? ' is-open' : ''}`}>
        <button type="button" className="mobile-toggle" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
          )}
        </button>
        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {NAV.map((item) => item.to ? (
              <Link key={item.label} to={item.to} className="mobile-top">{item.label}</Link>
            ) : (
              <details key={item.label} className="mobile-group">
                <summary>{item.label} <Chevron /></summary>
                {item.columns.map((col) => (
                  <div className="mobile-col" key={col.title}>
                    <div className="mobile-col-title">{col.title}</div>
                    {col.links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
                  </div>
                ))}
              </details>
            ))}
            <div className="mobile-actions">
              {onToggleTheme && (
                <button type="button" className="mobile-theme" onClick={onToggleTheme}>
                  Switch to {isDark ? 'light' : 'dark'} theme
                </button>
              )}
              <Link to="/login">Log in</Link>
              <Link className="pill-button pill-dark" to="/login">Open account <Arrow /></Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
