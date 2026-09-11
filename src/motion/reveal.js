/**
 * Scroll motion for the inner pages: reveal-on-enter, number count-ups and a
 * light parallax on the renders. Everything is opt-in through class names
 * and attributes, hides nothing until JavaScript has started, and steps
 * aside entirely for visitors who prefer reduced motion.
 */
const REVEAL = [
  '.pg-hero-copy', '.pg-hero-aside', '.pg-stat', '.pg-card', '.pg-hub-tile',
  '.pg-article-card', '.pg-editorial > li', '.pg-list > li', '.pg-feature-art',
  '.pg-feature-copy', '.pg-section-head', '.pg-table-wrap', '.pg-accordion > details',
  '.pg-plan', '.pg-tier', '.pg-panel', '.pg-statement p', '.pg-cta-inner',
  '.pg-board', '.pg-session', '.pg-contact-card', '.pg-pills', '.pg-prose',
].join(',');

const COUNT = ['.pg-stat strong', '.pg-tier strong', '.mh-strip strong'].join(',');

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** "1:500" → prefix "1:", number 2000, suffix "". Returns null for text without a leading number. */
function parseNumber(text) {
  const m = /^([^\d]*)(\d[\d,]*)(\.\d+)?(.*)$/s.exec(text.trim());
  if (!m) return null;
  const value = Number(m[2].replace(/,/g, ''));
  if (!Number.isFinite(value) || value === 0) return null;
  return { prefix: m[1], value, decimals: m[3] ?? '', suffix: m[4], grouped: m[2].includes(',') };
}

function countUp(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';
  const parts = parseNumber(el.textContent);
  if (!parts) return;
  const start = performance.now();
  const dur = 1100;
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const fmt = (n) => (parts.grouped ? Math.round(n).toLocaleString('en-US') : String(Math.round(n)));
  const tick = (now) => {
    const t = Math.min(1, (now - start) / dur);
    el.textContent = `${parts.prefix}${fmt(parts.value * ease(t))}${parts.decimals}${parts.suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function startReveal(root) {
  if (!root || reduced() || typeof IntersectionObserver === 'undefined') return () => {};
  root.classList.add('js-motion');

  // Stagger siblings that reveal together.
  const targets = Array.from(root.querySelectorAll(REVEAL));
  targets.forEach((el) => {
    el.classList.add('rv');
    const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains('rv')) : [el];
    el.style.setProperty('--rv-i', String(Math.min(siblings.indexOf(el), 8)));
  });

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('rv-in');
      e.target.querySelectorAll(COUNT).forEach(countUp);
      if (e.target.matches(COUNT)) countUp(e.target);
      io.unobserve(e.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  targets.forEach((el) => io.observe(el));

  // Count-ups that sit outside any reveal target (the hero strip).
  const loose = Array.from(root.querySelectorAll(COUNT)).filter((el) => !el.closest('.rv'));
  const cio = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); }
  }, { threshold: 0.5 });
  loose.forEach((el) => cio.observe(el));

  // Parallax: each [data-parallax] gets --py in -1..1 from its position in the viewport.
  const px = Array.from(root.querySelectorAll('[data-parallax]'));
  let raf = 0;
  const update = () => {
    raf = 0;
    const vh = window.innerHeight;
    for (const el of px) {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      const centre = r.top + r.height / 2;
      el.style.setProperty('--py', ((centre - vh / 2) / vh).toFixed(3));
    }
  };
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
  if (px.length) { update(); window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll); }

  return () => {
    io.disconnect(); cio.disconnect();
    window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll);
    if (raf) cancelAnimationFrame(raf);
  };
}
