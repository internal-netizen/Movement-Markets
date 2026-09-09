import { useState } from 'react';
import PageShell from '../components/page/PageShell.jsx';
import { PageHero, SectionHead, Btn, ArrowIcon } from '../components/page/Blocks.jsx';
import { HELP } from '../data/content.js';

export default function Help() {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const groups = HELP.map((g) => ({
    ...g,
    items: q ? g.items.filter((i) => (i.q + ' ' + i.a).toLowerCase().includes(q)) : g.items,
  })).filter((g) => g.items.length);

  return (
    <PageShell title="Help centre">
      <PageHero
        eyebrow="Help centre"
        title="How can we help?"
        lead="Answers by topic. If yours is not here, the desk is a chat away."
        compact
        actions={(
          <div className="pg-field" style={{ minWidth: 'min(460px, 100%)' }}>
            <label htmlFor="help-q">Search the help centre</label>
            <input id="help-q" placeholder="verification, withdrawal, leverage…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
        )}
      />
      <section className="pg-section">
        <div className="pg-wrap">
          <nav className="pg-pills" aria-label="Topics" style={{ marginBottom: 40 }}>
            {HELP.map((g) => <a key={g.title} href={`#${g.title.toLowerCase().replace(/[^a-z]+/g, '-')}`} className="pg-pill">{g.title}</a>)}
          </nav>
          {groups.length === 0 ? (
            <div className="pg-panel">
              <h3 className="pg-h3">Nothing matched “{query}”.</h3>
              <p className="pg-lead" style={{ fontSize: 15 }}>Try a different word, or ask the desk directly.</p>
              <div className="pg-actions"><Btn to="/contact">Contact us <ArrowIcon /></Btn></div>
            </div>
          ) : groups.map((g) => (
            <div key={g.title} id={g.title.toLowerCase().replace(/[^a-z]+/g, '-')} className="pg-faq-grid" style={{ marginBottom: 56 }}>
              <SectionHead title={g.title} />
              <div className="pg-accordion">
                {g.items.map((f) => (
                  <details key={f.q} open={Boolean(q)}>
                    <summary>{f.q}<span className="pg-acc-icon" aria-hidden="true" /></summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
