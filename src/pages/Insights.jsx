import { Link, Navigate, useParams } from 'react-router-dom';
import PageShell from '../components/page/PageShell.jsx';
import { PageHero, SectionHead, Cards, ArrowIcon } from '../components/page/Blocks.jsx';
import { ARTICLES, ARTICLE_BY_SLUG } from '../data/content.js';

function ArticleCard({ a }) {
  return (
    <Link to={`/insights/${a.slug}`} className="pg-article-card">
      <div className="pg-article-meta"><span>{a.category}</span><span>·</span><span>{a.minutes} min read</span></div>
      <h3>{a.title}</h3>
      <p>{a.summary}</p>
      <span className="pg-card-link" style={{ marginTop: 'auto', paddingTop: 10 }}>Read <ArrowIcon /></span>
    </Link>
  );
}

export function ArticlePage() {
  const { slug } = useParams();
  const a = ARTICLE_BY_SLUG[slug];
  if (!a) return <Navigate to="/insights" replace />;
  const more = ARTICLES.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <PageShell title={a.title}>
      <article className="pg-article">
        <div className="pg-wrap">
          <Link to="/insights" className="pg-back">← All insights</Link>
          <div className="pg-article-meta"><span>{a.category}</span><span>·</span><span>{a.minutes} min read</span></div>
          <h1 className="pg-h1" style={{ marginTop: 12 }}>{a.title}</h1>
          <p className="pg-lead">{a.summary}</p>
          <div className="pg-prose pg-article-body">
            {a.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <p className="pg-notice">Educational content, not investment advice. Trading CFDs carries a high level of risk.</p>
        </div>
      </article>
      <section className="pg-section is-alt">
        <div className="pg-wrap">
          <SectionHead eyebrow="Keep reading" title="More from Insights" />
          <div className="pg-article-list">{more.map((x) => <ArticleCard key={x.slug} a={x} />)}</div>
        </div>
      </section>
    </PageShell>
  );
}

export default function Insights() {
  return (
    <PageShell title="Insights">
      <PageHero
        eyebrow="Insights"
        title="Plain-English guides for people who trade."
        lead="Short, practical reads on the mechanics that actually affect your results: pips, leverage, sessions, sizing and costs."
        compact
      />
      <section className="pg-section">
        <div className="pg-wrap">
          <div className="pg-article-list">{ARTICLES.map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
        </div>
      </section>
      <section className="pg-section is-alt">
        <div className="pg-wrap">
          <SectionHead eyebrow="Put it to work" title="Tools that go with the reading" />
          <Cards cols={3} items={[
            { title: 'Trading calculators', text: 'Pip value, position size, margin and profit or loss for any instrument.', to: '/tools/calculators', linkLabel: 'Open calculators' },
            { title: 'Market hours', text: 'The four sessions in your local time and which are open now.', to: '/tools/market-hours', linkLabel: 'Check hours' },
            { title: 'Economic calendar', text: 'What is scheduled today and this week, graded by impact.', to: '/tools/economic-calendar', linkLabel: 'View calendar' },
          ]} />
        </div>
      </section>
    </PageShell>
  );
}
