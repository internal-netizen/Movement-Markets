import { useEffect, useState } from 'react';
import { BRAND_LIME } from './BrandLogo.jsx';
import '../styles/intro.css';

const KEY = 'mm-intro-seen';
const TOTAL_MS = 2250;

/**
 * Load intro: the two panels of the mark slide in from either side and meet
 * as the gate, the lime panel lights, the wordmark rises beneath, and the
 * curtain lifts to reveal the page. Plays once per browser session (or
 * whenever the URL carries ?intro=1), and not at all for visitors who prefer
 * reduced motion. While it runs the hero's own entrance is held, so the two
 * never overlap.
 */
function shouldPlay() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (new URLSearchParams(window.location.search).get('intro') === '1') return true;
  try { return !sessionStorage.getItem(KEY); } catch { return true; }
}

export default function IntroLoader() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => { setPlaying(shouldPlay()); }, []);

  useEffect(() => {
    if (!playing) return undefined;
    const root = document.documentElement;
    root.classList.add('intro-active');
    const prevOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    try { sessionStorage.setItem(KEY, '1'); } catch { /* private mode — it will simply replay next time */ }
    const t = setTimeout(() => setPlaying(false), TOTAL_MS);
    return () => {
      clearTimeout(t);
      root.style.overflow = prevOverflow;
      root.classList.remove('intro-active');
      window.dispatchEvent(new CustomEvent('mm-intro-done'));
    };
  }, [playing]);

  if (!playing) return null;
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-stage">
        <svg className="intro-mark" viewBox="0 0 456 495" xmlns="http://www.w3.org/2000/svg">
          <polygon className="intro-panel intro-panel-l" points="4,4 164,125 164,370 4,491" fill="currentColor" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
          <polygon className="intro-panel intro-panel-r" points="452,4 292,125 292,370 452,491" fill={BRAND_LIME} stroke={BRAND_LIME} strokeWidth="8" strokeLinejoin="round" />
        </svg>
        <span className="intro-word"><b>Movement</b> Markets</span>
      </div>
    </div>
  );
}
