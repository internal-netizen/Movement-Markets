import { useEffect, useRef, useState } from 'react';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import GridHero from '../components/GridHero.jsx';
import ChatWidget from '../components/ChatWidget.jsx';
import MotionExperience from '../components/MotionExperience.jsx';
import DesignPage, { HOME_ORDER } from './v2/DesignPage.jsx';
import { mountPinnedCarousel } from '../components/PinnedCarousel.js';
import { V2 } from '../motion/presets.js';
import { startReveal } from '../motion/reveal.js';
import '../styles/site.css';
import '../styles/movement-home.css';

/**
 * The home page.
 *
 * The bands under pages/v2/bands/ carry a style table per theme and render
 * whichever is selected, so one component tree serves both cuts behind the
 * switch. The chrome is the site's own <SiteHeader /> and <SiteFooter /> rather
 * than the canvas nav and its minimal legal strip, so the page matches the rest
 * of the site.
 *
 * "What you'll get" is pinned dark in both themes: it is the page's anchor
 * section and it was designed against a dark ground.
 */
const STORE_KEY = 'mm-design-theme';
const PIN = {};

function initialTheme() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // private mode, or storage disabled — fall through to the system preference
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

export default function HomeGrid() {
  const [theme, setTheme] = useState(initialTheme);
  const rootRef = useRef(null);
  const isDark = theme === 'dark';

  // The carousel drives nodes inside the bands, so it is re-mounted whenever a
  // theme swap re-renders them.
  useEffect(() => {
    if (!rootRef.current) return undefined;
    const stopCarousel = mountPinnedCarousel(rootRef.current);
    const stopReveal = startReveal(rootRef.current);
    return () => {
      if (stopCarousel) stopCarousel();
      stopReveal();
    };
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, theme);
      document.documentElement.setAttribute('data-theme', theme);
    } catch {
      // nothing to do — the choice just will not persist
    }
  }, [theme]);

  return (
    <div className="mm-design mm-home" data-theme={theme} ref={rootRef}>
      {/* Re-keyed on theme: a toggle re-renders every band. */}
      <MotionExperience key={theme} root={rootRef} preset={V2} />

      <ChatWidget />

      <SiteHeader theme={theme} onToggleTheme={() => setTheme(isDark ? 'light' : 'dark')} />
      <DesignPage theme={theme} order={HOME_ORDER} pin={PIN} nav={false} hero={<GridHero />} />
      <SiteFooter />
    </div>
  );
}
