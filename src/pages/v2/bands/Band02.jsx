import { useEffect, useRef } from 'react';
import MarketDiagram from '../../../components/MarketDiagram.jsx';
import '../../../styles/landing-details.css';

const BENEFITS = [
  { kind: 'spread', title: 'Cost-effective at every size', description: 'Institutional pricing from your first lot. Raw spreads — no markup layer.' },
  { kind: 'execution', title: 'Execution you can time', description: 'A median 12ms fill across the major pairs during peak sessions.' },
  { kind: 'scale', title: 'Scalable as you grow', description: 'From first lot to institutional size — same infrastructure, same pricing engine.' },
  { kind: 'devices', title: 'Platform integration', description: 'Trade from Xpert Trader or WebTrader — one account, both platforms, always in sync.' },
  { kind: 'support', title: 'Support in real-time', description: 'A named dealer — reachable 24/7. Not a bot. Not a queue.' },
];

const DETAILS = [
  ['Raw spreads', 'M5 18V10m7 8V5m7 13V8'],
  ['Segregated funds', 'M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6ZM8 12l3 3 5-6'],
  ['Named dealers', 'M4 13v-1a8 8 0 0 1 16 0v4q0 5-7 5M4 12h3v6H4ZM17 12h3v6h-3Z'],
  ['Multi-platform', 'M3 4h18v13H3ZM8 21h8m-4-4v4M6 12l4-4 4 2 4-3'],
  ['Multilingual support', 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3q-8 9 0 18M12 3q8 9 0 18'],
  ['Asset library 100+', 'M4 4h6v6H4ZM14 4h6v6h-6ZM4 14h6v6H4ZM14 14h6v6h-6Z'],
];

export default function Band02() {
  const root = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-seen');
        observer.unobserve(entry.target);
      });
    }, { threshold: .3 });
    root.current.querySelectorAll('.benefit-card').forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  return <section className="benefits-section" ref={root} aria-labelledby="benefits-title">
    <header className="benefits-heading">
      <p>What you'll get</p>
      <h2 id="benefits-title">Removing every friction<br /><span>that slows a trade down.</span></h2>
    </header>
    <div className="benefits-grid">
      {BENEFITS.map(({kind,title,description},index) => <article key={kind} className={`benefit-card ${index > 2 ? 'benefit-card-wide' : ''}`}>
        <div className="benefit-visual"><MarketDiagram kind={kind}/></div>
        <div className="benefit-copy"><h3>{title}</h3><p>{description}</p></div>
      </article>)}
    </div>
    <ul className="benefits-details" aria-label="Included benefits">
      {DETAILS.map(([label,path]) => <li key={label}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path}/></svg>{label}</li>)}
    </ul>
  </section>;
}
