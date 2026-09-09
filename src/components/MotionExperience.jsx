import { useEffect } from 'react';
import { V1 } from '../motion/presets.js';
import { createScrollDirector } from '../motion/scrollDirector.js';
import '../styles/motion.css';
import '../styles/motion-v2.css';

/**
 * Behaviour-only scroll motion. It never changes what a page renders — it
 * wraps heading words, sets delay/progress custom properties and toggles
 * classes, so layout, copy and colour stay exactly as they are.
 *
 *   1. headings reveal word by word
 *   2. cards in a grid arrive in sequence rather than together
 *   3. once a card lands, its own contents cascade in after it
 *   4. figures count up to the value already printed in the markup
 *   5. photographs wipe upward out of a slow zoom
 *   6. a few panels scale up slightly as they scroll in
 *
 * With `preset.extras` it also runs the design page's own set: bands settling,
 * hero layer parallax, bars growing off their baseline, a curve drawing itself
 * and a display row unmasking line by line.
 *
 * Pass `root` to scope every query to one subtree. On /v2 that matters twice
 * over: the page injects its markup with dangerouslySetInnerHTML and replaces
 * every node when the theme is toggled, so the layer must be re-keyed on theme
 * or it would be holding detached nodes.
 */
const COUNT_MS = 1100;

const clamp01 = (value) => Math.max(0, Math.min(value, 1));
const easeOut = (t) => 1 - (1 - t) ** 3;

function splitWords(heading) {
  if (heading.dataset.mmSplit) return;
  heading.dataset.mmSplit = 'true';
  let index = 0;

  const walk = (node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        if (!child.textContent.trim()) return;
        const fragment = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (!part.trim()) {
            fragment.appendChild(document.createTextNode(part));
            return;
          }
          const word = document.createElement('span');
          word.className = 'mm-word';
          word.style.setProperty('--mm-i', String(index));
          word.textContent = part;
          index += 1;
          fragment.appendChild(word);
        });
        node.replaceChild(fragment, child);
        return;
      }
      if (child.nodeType !== Node.ELEMENT_NODE) return;
      if (child.tagName === 'BR' || child.tagName === 'svg') return;
      walk(child);
    });
  };

  walk(heading);
}

// "$24,860.20" -> {prefix:"$", value:24860.2, decimals:2, grouped:true, suffix:""}
function parseFigure(text) {
  const match = /^(\D*?)([\d][\d,]*(?:\.\d+)?)(\D*)$/.exec(text.trim());
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  return {
    prefix,
    suffix,
    decimals: digits.includes('.') ? digits.split('.')[1].length : 0,
    grouped: digits.includes(','),
    value: Number(digits.replace(/,/g, '')),
  };
}

function formatFigure(figure, value) {
  const body = figure.grouped
    ? value.toLocaleString('en-US', {
        minimumFractionDigits: figure.decimals,
        maximumFractionDigits: figure.decimals,
      })
    : value.toFixed(figure.decimals);
  return `${figure.prefix}${body}${figure.suffix}`;
}

export default function MotionExperience({ root = null, preset = V1 }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const scope = (root && root.current) || document;
    if (!scope) return undefined;

    const all = (list) => (list?.length ? Array.from(scope.querySelectorAll(list.join(', '))) : []);
    const undo = []; // every mutation registers its own reversal
    const observers = [];

    // Reveals are scroll-driven: the director maps each tracked element's
    // position to --mm-p every frame. Nothing can be stranded by a jump scroll
    // the way a one-shot observer could, because progress is read from where
    // the element IS, not from an event that fired when it crossed an edge.
    const director = createScrollDirector();

    // Counting figures stay one-shot — a number scrubbing up and down as you
    // scroll reads as broken rather than considered. A figure skipped by a
    // jump simply shows its printed value, which is already correct.
    const onEnter = (handler, options) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          handler(entry.target);
          observer.unobserve(entry.target);
        });
      }, options);
      observers.push(observer);
      return observer;
    };
    const flag = (el, cls) => {
      el.classList.add(cls);
      undo.push(() => el.classList.remove(cls));
    };

    /* 1. headings ------------------------------------------------------- */
    const headings = all(preset.headings);
    headings.forEach(splitWords);
    headings.forEach((heading) => director.track(heading, { start: 1.04, end: 0.72 }));

    /* 2. grids ---------------------------------------------------------- */
    (preset.groups || []).forEach((selector) => {
      scope.querySelectorAll(selector).forEach((group) => {
        const items = Array.from(group.children);
        if (items.length < 2) return;
        items.forEach((item, i) => {
          item.style.setProperty('--mm-i', String(i));
          flag(item, 'mm-stagger-item');
        });
        director.track(group, { start: 1.08, end: 0.76 });
      });
    });

    /* 3. contents of each card ------------------------------------------ */
    all(preset.cards).forEach((card) => {
      const children = Array.from(card.children);
      if (!children.length) return;
      children.forEach((child, i) => {
        child.style.setProperty('--mm-i', String(i));
        flag(child, 'mm-cascade-item');
      });
      director.track(card, { start: 1.06, end: 0.72 });
    });

    /* 4. counting figures ------------------------------------------------ */
    const counters = new Map();
    const frames = new Set();
    const countObserver = onEnter(
      (el) => {
        const entry = counters.get(el);
        if (!entry) return;
        const start = performance.now();
        el.classList.add('mm-counting');
        const step = (now) => {
          const progress = clamp01((now - start) / COUNT_MS);
          el.textContent = formatFigure(entry.figure, entry.figure.value * easeOut(progress));
          if (progress < 1) {
            const id = window.requestAnimationFrame(step);
            entry.frame = id;
            frames.add(id);
            return;
          }
          el.textContent = entry.text; // restore the exact original
          el.classList.remove('mm-counting');
        };
        const id = window.requestAnimationFrame(step);
        entry.frame = id;
        frames.add(id);
      },
      { threshold: 0.6 },
    );
    all(preset.counters).forEach((el) => {
      if (el.children.length) return;
      const text = el.textContent;
      const figure = parseFigure(text);
      if (!figure || !Number.isFinite(figure.value)) return;
      counters.set(el, { text, figure, frame: 0 });
      countObserver.observe(el);
    });

    /* 5. photographs ----------------------------------------------------- */
    // The wrapper is tracked, never the image: an image clipped to
    // inset(... 100% ...) has no area, and its own rect would read as empty.
    const imageHosts = new Set();
    all(preset.images).forEach((image) => {
      flag(image, 'mm-image');
      imageHosts.add(image.parentElement || image);
    });
    imageHosts.forEach((host) => director.track(host, { start: 1.06, end: 0.7 }));

    /* 6. panels that grow as they enter ---------------------------------- */
    const scrubbed = all(preset.scrub);
    scrubbed.forEach((element) => flag(element, 'mm-scrub'));

    /* extras: the design page's own set ---------------------------------- */
    let hero = null;
    if (preset.extras) {
      // Bands are the unclassed div children of the root — on /v3 that is the
      // per-band background wrapper, which settles just as well. Found
      // structurally rather than by padding literals. The class must never
      // land on the root itself: an offset element becomes a containing block
      // and would capture the fixed theme switch.
      Array.from(scope.children).forEach((band) => {
        if (band.tagName !== 'DIV' || band.className) return;
        if (band.classList.contains('gh')) return;
        flag(band, 'mm-band');
        director.track(band, { start: 1.12, end: 0.8 });
      });

      hero = scope.querySelector('.gh');

      const bars = scope.querySelector(
        'div[style*="height: 104px"][style*="align-items: flex-end"]',
      );
      if (bars && !bars.classList.contains('mm-bars')) {
        flag(bars, 'mm-bars');
        Array.from(bars.children).forEach((bar, i) =>
          bar.style.setProperty('--mm-i', String(i)),
        );
        director.track(bars, { start: 1.02, end: 0.7 });
      }

      const curve = scope.querySelector('svg path[stroke-width="3"]');
      if (curve && !curve.classList.contains('mm-draw')) {
        const host = curve.closest('div');
        if (host) {
          flag(curve, 'mm-draw');
          curve.style.setProperty('--mm-len', String(Math.ceil(curve.getTotalLength())));
          director.track(host, { start: 1.0, end: 0.66 });
        }
      }

      const wordRow = scope.querySelector('div[style*="clamp(38px, 5vw, 66px)"]');
      if (wordRow && !wordRow.firstElementChild?.classList.contains('mm-line')) {
        Array.from(wordRow.children).forEach((word, i) => {
          flag(word, 'mm-line');
          word.style.setProperty('--mm-i', String(i));
        });
        director.track(wordRow, { start: 1.02, end: 0.7 });
      }
    }

    /* one rAF-throttled scroll loop, read pass then write pass ----------- */
    let scrubFrame = 0;
    const update = () => {
      const viewport = window.innerHeight;
      const reads = scrubbed.map((element) => {
        const rect = element.getBoundingClientRect();
        return clamp01((viewport - rect.top) / (viewport * 0.85));
      });
      const heroRead = hero
        ? clamp01(-hero.getBoundingClientRect().top / Math.max(1, hero.offsetHeight))
        : 0;

      scrubbed.forEach((element, i) => {
        element.style.setProperty('--mm-scrub', reads[i].toFixed(3));
      });
      if (hero) hero.style.setProperty('--mm-hero', heroRead.toFixed(3));
      scrubFrame = 0;
    };
    const schedule = () => {
      scrubFrame ||= window.requestAnimationFrame(update);
    };

    update();
    director.start();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (scrubFrame) window.cancelAnimationFrame(scrubFrame);
      frames.forEach((id) => window.cancelAnimationFrame(id));
      director.destroy();
      observers.forEach((observer) => observer.disconnect());
      counters.forEach(({ text }, el) => {
        el.textContent = text;
        el.classList.remove('mm-counting');
      });
      undo.forEach((fn) => fn());
    };
  }, [root, preset]);

  return null;
}
