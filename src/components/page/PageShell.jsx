import useSiteTheme from '../../hooks/useSiteTheme.js';
import { createContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from '../SiteHeader.jsx';
import SiteFooter from '../SiteFooter.jsx';
import ChatWidget from '../ChatWidget.jsx';
import { CtaBand } from './Blocks.jsx';
import { startReveal } from '../../motion/reveal.js';
import '../../styles/site.css';
import '../../styles/movement-home.css';
import '../../styles/pages.css';


/** The active theme, for children that render third-party embeds. */
export const ThemeContext = createContext('dark');

/**
 * Chrome shared by every inner page: the site header with the theme switch,
 * the page body, the closing call to action and the footer. Theme choice is
 * the same key the home page uses, so it follows the visitor between pages.
 */
export default function PageShell({ title, children, cta = true }) {
  const [theme, toggleTheme] = useSiteTheme();
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


  return (
    <ThemeContext.Provider value={theme}>
      <div className="mm-design mm-page" data-theme={theme} ref={rootRef}>
        <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
        <main className="pg">{children}</main>
        {cta ? <CtaBand /> : null}
        <SiteFooter />
        <ChatWidget />
      </div>
    </ThemeContext.Provider>
  );
}
