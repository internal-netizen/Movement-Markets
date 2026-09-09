import { useEffect, useRef, useState } from 'react';
import { ChartCandlestick, ChartColumn, FingerprintPattern, ShieldCheck, Zap } from './icons.jsx';

// Scroll-driven route section: the wave, the icon card and the active step all
// follow how far the section has travelled through the viewport.
const STEPS = [
  {
    number: '01',
    title: 'Scan the move',
    body: 'See active FX, metals and index momentum before the trade gets crowded.',
    Icon: ChartColumn,
  },
  {
    number: '02',
    title: 'Shape your setup',
    body: 'Choose platform, lot size and account conditions around the way you trade.',
    Icon: ChartCandlestick,
  },
  {
    number: '03',
    title: 'Execute fast',
    body: 'Send orders through a focused interface built for quick market decisions.',
    Icon: Zap,
  },
  {
    number: '04',
    title: 'Protect the account',
    body: 'Use clear margin, funding and risk controls so speed still feels measured.',
    Icon: ShieldCheck,
  },
];

const clamp01 = (value) => Math.max(0, Math.min(value, 1));

export default function MovementJourney() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const ActiveIcon = STEPS[activeStep]?.Icon ?? ChartColumn;
  const active = STEPS[activeStep] ?? STEPS[0];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      if (reducedMotion.matches) {
        setProgress(0.55);
        setActiveStep(1);
        frame = 0;
        return;
      }
      const rect = section.getBoundingClientRect();
      const span = window.innerHeight + rect.height;
      const travelled = clamp01((window.innerHeight - rect.top) / span);
      setProgress(travelled);
      setActiveStep(Math.min(STEPS.length - 1, Math.floor(travelled * STEPS.length)));
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
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className="movement-journey"
      ref={sectionRef}
      style={{
        '--wave-slide': `${(progress - 0.5) * -58}px`,
        '--wave-lift': `${(progress - 0.5) * 34}px`,
        '--wave-dash': `${1280 - progress * 1280}`,
      }}
      aria-labelledby="journey-title"
    >
      <div className="journey-bg" aria-hidden="true" />
      <div className="journey-topline">
        <span>@movement.markets</span>
        <span>Scroll</span>
        <span>{activeStep + 1}/4</span>
      </div>
      <div className="journey-inner">
        <div className="journey-intro">
          <div className="eyebrow dark-eyebrow">How the experience moves</div>
          <h2 id="journey-title">A live route from market idea to protected execution.</h2>
        </div>
        <div className="journey-stage">
          <svg className="journey-wave" viewBox="0 0 1200 560" preserveAspectRatio="none" aria-hidden="true">
            <path
              className="journey-wave-shadow"
              d="M-40 294 C120 168 248 214 348 366 C452 522 587 487 696 334 C820 159 987 191 1240 310"
            />
            <path
              className="journey-wave-soft"
              d="M-40 318 C130 196 254 231 358 379 C468 534 589 514 708 351 C838 173 1000 206 1240 328"
            />
            <path
              className="journey-wave-soft second"
              d="M-40 270 C119 152 232 189 337 342 C454 512 597 452 703 312 C829 143 974 154 1240 280"
            />
            <path
              className="journey-wave-main"
              d="M-40 294 C120 168 248 214 348 366 C452 522 587 487 696 334 C820 159 987 191 1240 310"
            />
          </svg>
          <div className={`journey-icon-card icon-state-${activeStep}`} aria-live="polite">
            <span className="journey-icon-halo" />
            <ActiveIcon size={96} strokeWidth={1.35} />
            <small>{active.title}</small>
          </div>
          <div className="glass-ticket journey-glass-ticket" aria-live="polite">
            <FingerprintPattern size={28} />
            <span>
              <small>Active route</small>
              <strong>{active.title}</strong>
            </span>
          </div>
          {STEPS.map((step, index) => (
            <article
              key={step.number}
              className={`journey-step journey-step-${index + 1} ${activeStep === index ? 'is-active' : ''}`}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
          <div className="journey-nodes" aria-hidden="true">
            {STEPS.map((step, index) => (
              <span
                key={step.number}
                className={`journey-node journey-node-${index + 1} ${activeStep === index ? 'is-active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="journey-bottom-label">
        <span>Movement Markets</span>
        <small>Forex and CFD broker</small>
      </div>
    </section>
  );
}
