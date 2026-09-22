import { useEffect, useRef } from 'react';
import useSiteTheme from '../hooks/useSiteTheme.js';
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
 */
const PIN = {};

export default function HomeGrid() {
  const [theme, toggleTheme] = useSiteTheme();
  const rootRef = useRef(null);

  // Theme changes preserve the existing carousel and reveal state.
  useEffect(() => {
    if (!rootRef.current) return undefined;
    const stopCarousel = mountPinnedCarousel(rootRef.current);
    const stopReveal = startReveal(rootRef.current);
    return () => {
      if (stopCarousel) stopCarousel();
      stopReveal();
    };
  }, []);


  return (
    <div className="mm-design mm-home" data-theme={theme} ref={rootRef}>
      <MotionExperience root={rootRef} preset={V2} />

      <ChatWidget />

      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <DesignPage theme={theme} order={HOME_ORDER} pin={PIN} nav={false} hero={<GridHero />} />
      <SiteFooter />
    </div>
  );
}
