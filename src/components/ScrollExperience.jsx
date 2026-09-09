import { useEffect } from 'react';

// Behaviour-only component: reveals boards as they enter the viewport and
// drives the parallax custom properties the stylesheet reads.
const REVEAL_TARGETS = [
  '.report-board',
  '.section-heading',
  '.movement-bento-heading',
  '.bento-card',
  '.movement-journey',
  '.rates-card',
  '.platform-card',
  '.funding-copy',
  '.funding-visual',
  '.steps-grid article',
  '.cta-panel',
].join(', ');

export default function ScrollExperience() {
  useEffect(() => {
    const boards = Array.from(document.querySelectorAll('.depth-board'));
    const hero = document.querySelector('.hero-section');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const revealed = Array.from(document.querySelectorAll(REVEAL_TARGETS));
    let frame = 0;

    revealed.forEach((el) => el.classList.add('scroll-reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7%' },
    );

    revealed.forEach((el) => {
      if (reducedMotion.matches) el.classList.add('is-visible');
      else observer.observe(el);
    });

    const update = () => {
      if (hero && !reducedMotion.matches) {
        const rect = hero.getBoundingClientRect();
        const travelled = Math.max(0, Math.min(-rect.top, rect.height));
        hero.style.setProperty('--hero-copy-shift', `${travelled * -0.035}px`);
        hero.style.setProperty('--hero-terminal-shift', `${travelled * 0.018}px`);
      }

      boards.forEach((board) => {
        if (reducedMotion.matches) {
          board.style.setProperty('--drift', '0px');
          return;
        }
        const rect = board.getBoundingClientRect();
        const span = window.innerHeight + rect.height;
        const progress = Math.max(0, Math.min((window.innerHeight - rect.top) / span, 1));
        board.style.setProperty('--drift', `${(progress - 0.5) * -18}px`);
      });

      frame = 0;
    };

    const schedule = () => {
      frame ||= window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
