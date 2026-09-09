import { createContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from '../SiteHeader.jsx';
import SiteFooter from '../SiteFooter.jsx';
import ChatWidget from '../ChatWidget.jsx';
import { CtaBand } from './Blocks.jsx';
import { startReveal } from '../../motion/reveal.js';
import '../../styles/site.css';
import '../../styles/movement-home.css';
import '../../styles/pages.css';

const STORE_KEY = 'mm-design-theme';

/** The active theme, for children that render third-party embeds. */
export const ThemeContext = createContext('dark');

function initialTheme() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // storage unavailable — fall through to the system preference
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

/**
 * Chrome shared by every inner page: the site header with the theme switch,
 * the page body, the closing call to action and the footer. Theme choice is
 * the same key the home page uses, so it follows the visitor between pages.
 */
export default function PageShell({ title, children, cta = true }) {
  const [theme, setTheme] = useState(initialTheme);
  const { pathname, hash } = useLocation();
  const rootRef = useRef(null);

  // Reveal, count-up and parallax — re-armed whenever the route changes.
  useEffect(() => startReveal(rootRef.current), [pathname]);

  useEffect(() => {
    if (title) document.title = `${title} | Movement Markets`;
  }, [title]);

  // New page: start at the top, unless the URL points at a section.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ block: 'start' }); return; }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, theme);
      document.documentElement.setAttribute('data-theme', theme);
    } catch {
      // the choice just will not persist
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="mm-design mm-page" data-theme={theme} ref={rootRef}>
        <SiteHeader theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        <main className="pg">{children}</main>
        {cta ? <CtaBand /> : null}
        <SiteFooter />
        <ChatWidget />
      </div>
    </ThemeContext.Provider>
  );
}
