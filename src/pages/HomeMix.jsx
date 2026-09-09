import { useEffect, useRef } from 'react';
import SiteHeader from '../components/SiteHeader.jsx';
import GridHero from '../components/GridHero.jsx';
import MotionExperience from '../components/MotionExperience.jsx';
import DesignPage, { CANVAS_ORDER, MIXED_THEMES } from './v2/DesignPage.jsx';
// The pinned carousel section is switched off in tools/build-design.mjs, so
// there is nothing to mount. Uncomment both lines to bring it back.
// import { mountPinnedCarousel } from '../components/PinnedCarousel.js';
import { fitSlides } from '../components/fitSlides.js';
import { V2 } from '../motion/presets.js';
import '../styles/site.css';
import '../styles/movement-home.css';

/**
 * The mixed-band cut of the grid home.
 *
 * Same bands as /v2, but the themes alternate band by band rather than the
 * whole page committing to one, and each band sits on its own theme's page
 * background. The nav is the site's own <SiteHeader /> rather than the canvas
 * nav. The root stays data-theme="dark" so the rules keyed off it (the
 * carousel cube, the hero) resolve to their dark treatment.
 */
export default function HomeMix() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return undefined;
    // const stopCarousel = mountPinnedCarousel(rootRef.current);
    const stopCarousel = null;
    const stopSlides = fitSlides(rootRef.current);
    return () => {
      if (stopCarousel) stopCarousel();
      stopSlides();
    };
  }, []);

  return (
    <div className="mm-design mm-mix mm-home" data-theme="dark" ref={rootRef}>
      <MotionExperience root={rootRef} preset={V2} />
      <SiteHeader />
      <DesignPage nav={false} order={CANVAS_ORDER} themes={MIXED_THEMES} hero={<GridHero />} />
    </div>
  );
}
