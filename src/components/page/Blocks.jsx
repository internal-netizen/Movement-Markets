import { Link } from 'react-router-dom';

export const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

/** Internal links go through the router; anything else is a plain anchor. */
export function Btn({ to, children, ghost = false, className = '' }) {
  const cls = `pg-btn${ghost ? ' pg-btn-ghost' : ''} ${className}`.trim();
  if (/^(https?:|mailto:|tel:)/.test(to)) return <a className={cls} href={to}>{children}</a>;
  return <Link className={cls} to={to}>{children}</Link>;
}

export function PageHero({ eyebrow, title, lead, actions, aside, compact = false }) {
  return (
    <section className={`pg-hero${compact ? ' is-compact' : ''}${aside ? ' has-aside' : ''}`}>
      <div className="pg-wrap pg-hero-grid">
        <div className="pg-hero-copy">
          {eyebrow ? <p className="pg-eyebrow">{eyebrow}</p> : null}
          <h1 className="pg-h1">{title}</h1>
          {lead ? <p className="pg-lead">{lead}</p> : null}
          {actions ? <div className="pg-actions">{actions}</div> : null}
        </div>
        {aside ? <div className="pg-hero-aside">{aside}</div> : null}
      </div>
    </section>
  );
}

export function Stats({ items, note }) {
  return (
    <div className="pg-stats">
      {items.map((s) => (
        <div className="pg-stat" key={s.label}>
          <strong>{s.value}{s.unit ? <small> {s.unit}</small> : null}</strong>
          <span>{s.label}</span>
        </div>
      ))}
      {note ? <p className="pg-stats-note">{note}</p> : null}
    </div>
  );
}

export function SectionHead({ eyebrow, title, lead, center = false }) {
  return (
    <header className={`pg-section-head${center ? ' is-center' : ''}`}>
      {eyebrow ? <p className="pg-eyebrow">{eyebrow}</p> : null}
      <h2 className="pg-h2">{title}</h2>
      {lead ? <p className="pg-lead">{lead}</p> : null}
    </header>
  );
}

export function Cards({ items, cols = 3, numbered = false }) {
  return (
    <div className={`pg-cards cols-${cols}`}>
      {items.map((c, i) => (
        <article className="pg-card" key={c.title}>
          {numbered ? <span className="pg-card-num">{String(i + 1).padStart(2, '0')}</span> : null}
          {c.tag ? <span className="pg-tag">{c.tag}</span> : null}
          <h3>{c.title}</h3>
          <p>{c.text}</p>
          {c.to ? <Link className="pg-card-link" to={c.to}>{c.linkLabel ?? 'Learn more'} <ArrowIcon /></Link> : null}
        </article>
      ))}
    </div>
  );
}

export function Faq({ items, title = 'Frequently asked questions', eyebrow }) {
  return (
    <section className="pg-section pg-faq">
      <div className="pg-wrap pg-faq-grid">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="pg-accordion">
          {items.map((f) => (
            <details key={f.q}>
              <summary>{f.q}<span className="pg-acc-icon" aria-hidden="true" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KeyValueTable({ rows, caption }) {
  return (
    <table className="pg-kv">
      {caption ? <caption>{caption}</caption> : null}
      <tbody>
        {rows.map(([k, v]) => (
          <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

export function CtaBand() {
  return (
    <section className="pg-cta">
      <div className="pg-wrap pg-cta-inner">
        <div>
          <p className="pg-eyebrow">Get started</p>
          <h2 className="pg-h2">Ready to trade the move?</h2>
          <p className="pg-lead">Open an account in minutes. Raw spreads, leverage to 1:2000 and a desk that answers around the clock.</p>
        </div>
        <div className="pg-cta-actions">
          <Btn to="/login">Open an account <ArrowIcon /></Btn>
          <Btn to="/contact" ghost>Talk to us</Btn>
        </div>
      </div>
    </section>
  );
}

export function Notice({ children }) {
  return <p className="pg-notice">{children}</p>;
}

/** A dark, image-led band: render on one side, numbered points on the other. */
export function FeatureBand({ image, alt = '', eyebrow, title, lead, items = [], flip = false, cta, focus = 'center' }) {
  return (
    <section className={`pg-feature${flip ? ' is-flip' : ''}`}>
      <div className="pg-wrap pg-feature-grid">
        <div className="pg-feature-art" style={{ '--focus': focus }} data-parallax><img src={image} alt={alt} loading="lazy" decoding="async" /></div>
        <div className="pg-feature-copy">
          {eyebrow ? <p className="pg-eyebrow">{eyebrow}</p> : null}
          <h2 className="pg-h2">{title}</h2>
          {lead ? <p className="pg-lead">{lead}</p> : null}
          {items.length ? (
            <ol className="pg-list">
              {items.map((it) => (
                <li key={it.title}><strong>{it.title}</strong><span>{it.text}</span></li>
              ))}
            </ol>
          ) : null}
          {cta ? <div className="pg-actions">{cta}</div> : null}
        </div>
      </div>
    </section>
  );
}

/** Editorial numbered list — for "why" sections, instead of a card grid. */
export function EditorialList({ items }) {
  return (
    <ol className="pg-editorial">
      {items.map((it, i) => (
        <li key={it.title}>
          <span className="pg-editorial-num">{String(i + 1).padStart(2, '0')}</span>
          <div><h3>{it.title}</h3><p>{it.text}</p></div>
        </li>
      ))}
    </ol>
  );
}

/** A rendered image in a rounded frame, for page-hero asides. */
export function ImageCard({ src, alt = '', caption, focus = 'center' }) {
  return (
    <figure className="pg-image-card" style={{ '--focus': focus }} data-parallax>
      <img src={src} alt={alt} decoding="async" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/** One oversized statement, for the about page. */
export function Statement({ children, by }) {
  return (
    <section className="pg-statement">
      <div className="pg-wrap">
        <p>{children}</p>
        {by ? <span>{by}</span> : null}
      </div>
    </section>
  );
}
