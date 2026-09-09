/**
 * Scroll-linked progress engine.
 *
 * Every element registered here gets a `--mm-p` custom property between 0 and
 * 1, mapped continuously from where it sits in the viewport. Nothing here
 * plays on its own clock: scroll forward and it advances, scroll back and it
 * reverses, stop halfway and it stays halfway. That is the difference between
 * animation triggered by scroll and animation driven by it.
 *
 * Two details do most of the work for how it feels:
 *
 *   damping   the written value chases the raw one instead of snapping to it,
 *             so motion trails the cursor slightly and settles rather than
 *             tracking input rigidly.
 *   easing    raw linear progress is shaped, so things ease out of their
 *             start rather than moving at constant speed.
 *
 * Cost is kept low by only reading rects for elements near the viewport — a
 * coarse observer with a one-viewport margin adds and removes them — and by
 * splitting each frame into a read pass and a write pass so layout is never
 * invalidated mid-loop. The loop parks itself once everything has settled.
 */
const EPS = 0.0005;

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
// smootherstep: zero first and second derivative at both ends
const ease = (t) => t * t * t * (t * (t * 6 - 15) + 10);

// Damping trades smoothness for lag. At 0.14 a reveal needed roughly 40 frames
// to land, which left a lot of the page semi-transparent while scrolling — the
// layout reads as empty even though nothing is missing.
export function createScrollDirector({ damp = 0.22 } = {}) {
  const entries = new Map(); // element -> { start, end, value, target, active }
  let frame = 0;
  let running = false;
  let settled = true;

  const near = new IntersectionObserver(
    (records) => {
      records.forEach((record) => {
        const entry = entries.get(record.target);
        if (entry) entry.active = record.isIntersecting;
      });
      kick();
    },
    { rootMargin: '100% 0px' },
  );

  function measure(entry, el, viewport) {
    const rect = el.getBoundingClientRect();
    // `start` and `end` are fractions of the viewport height: progress begins
    // when the element's top crosses `start` and completes at `end`.
    const from = viewport * entry.start;
    const to = viewport * entry.end;
    return clamp01((from - rect.top) / Math.max(1, from - to));
  }

  function tick() {
    frame = 0;
    const viewport = window.innerHeight;

    const pending = [];
    entries.forEach((entry, el) => {
      if (!entry.active) return;
      entry.target = measure(entry, el, viewport);
      pending.push([el, entry]);
    });

    settled = true;
    pending.forEach(([el, entry]) => {
      const delta = entry.target - entry.value;
      if (Math.abs(delta) < EPS) {
        entry.value = entry.target;
      } else {
        entry.value += delta * damp;
        settled = false;
      }
      el.style.setProperty('--mm-p', ease(entry.value).toFixed(4));
    });

    if (running && !settled) frame = requestAnimationFrame(tick);
  }

  function kick() {
    if (!running) return;
    settled = false;
    if (!frame) frame = requestAnimationFrame(tick);
  }

  return {
    /** @param {Element} el @param {{start?:number,end?:number}} range */
    track(el, { start = 1.06, end = 0.74 } = {}) {
      if (entries.has(el)) return;
      entries.set(el, { start, end, value: 0, target: 0, active: false });
      el.style.setProperty('--mm-p', '0');
      near.observe(el);
    },
    start() {
      if (running) return;
      running = true;
      window.addEventListener('scroll', kick, { passive: true });
      window.addEventListener('resize', kick);
      kick();
    },
    destroy() {
      running = false;
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', kick);
      window.removeEventListener('resize', kick);
      near.disconnect();
      entries.forEach((_entry, el) => el.style.removeProperty('--mm-p'));
      entries.clear();
    },
  };
}
