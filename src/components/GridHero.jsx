import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CLIENT_SIGNUP_URL } from '../config/portalLinks.js';

/**
 * Home hero.
 *
 * One dark stage, two families. Space Grotesk carries the headline and the
 * numerals; Inter carries everything else. The left column is the copy in
 * reading order; the right is the canonical two-panel gateway rendered in silver and lime.
 * The artwork has its own responsive column and keeps its full proportions. A hairline strip of conditions
 * closes the stage.
 */
export default function GridHero() {
  const artRef = useRef(null);

  // The render drifts up a little slower than the page as the hero scrolls
  // away; the stage never needs it once it is off screen.
  useEffect(() => {
    const el = artRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = Math.min(window.scrollY, window.innerHeight);
      el.style.transform = `translate3d(0, ${(y * 0.12).toFixed(1)}px, 0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="mh-stage mh-gateway-stage mh-enter" aria-labelledby="mh-title">
      <div className="mh-inner">
        <div className="mh-copy">
          <p className="mh-eyebrow"><span className="mh-eyebrow-brand">Movement Markets <i /></span> Raw-spread forex &amp; CFD broker</p>
          <h1 id="mh-title" className="mh-headline">
            <span className="mh-line"><span>Raw spreads.</span></span>
            <span className="mh-line"><span>Fast fills.</span></span>
            <span className="mh-line"><span>No middleman.</span></span>
          </h1>
          <p className="mh-lead">
            Institutional pricing on 300+ markets, maximum leverage up to 1:500 and orders filled in a median 12 milliseconds.
          </p>
          <div className="mh-cta-row">
            <a className="mh-btn" href={CLIENT_SIGNUP_URL}>Open an account</a>
            <Link className="mh-link" to="/accounts">
              See pricing
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>

        <div className="mh-visual" aria-hidden="true">
          <img ref={artRef} className="mh-gateway-art" src="/art/brand-gateway-hero.png" alt="" width="1254" height="1254" decoding="async" fetchPriority="high" />
          <div className="mh-chip">
            <span className="mh-dot" />
            <strong>12 ms</strong>
            <small>average execution</small>
          </div>
        </div>
      </div>

      <ul className="mh-strip" aria-label="Key trading conditions">
        <li><strong>0.0</strong><span>pips, raw spreads from</span></li>
        <li><strong>1:500</strong><span>maximum leverage</span></li>
        <li><strong>300+</strong><span>instruments, six asset classes</span></li>
        <li><strong>24/7</strong><span>human support desk</span></li>
      </ul>
    </section>
  );
}
