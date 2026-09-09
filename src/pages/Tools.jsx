import { Link } from 'react-router-dom';
import PageShell from '../components/page/PageShell.jsx';
import { PageHero, ArrowIcon, ImageCard } from '../components/page/Blocks.jsx';
import { TOOLS } from '../data/content.js';

export default function Tools() {
  return (
    <PageShell title="Trading tools">
      <PageHero
        eyebrow="Tools"
        title="The numbers, before the trade."
        lead="A live calendar, session clock and a set of calculators built around how our accounts actually price. Free, no login."
        compact
        aside={<ImageCard src="/art/18_tools_numbers_before_trade.jpg" caption="Built around how our accounts price" />}
      />
      <section className="pg-section">
        <div className="pg-wrap">
          <div className="pg-hub">
            {TOOLS.map((t) => (
              <Link key={t.to} to={t.to} className="pg-hub-tile">
                <span className="pg-tag">{t.tag}</span>
                <h3>{t.name}</h3>
                <p>{t.text}</p>
                <span className="pg-card-link">Open <ArrowIcon /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
