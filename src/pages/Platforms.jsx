import { Link, Navigate, useParams } from 'react-router-dom';
import PageShell from '../components/page/PageShell.jsx';
import { PageHero, SectionHead, Faq, Btn, ArrowIcon, KeyValueTable, FeatureBand, ImageCard } from '../components/page/Blocks.jsx';
import { PLATFORMS, PLATFORM_BY_SLUG } from '../data/content.js';

function DevicesBand({ flip = false }) {
  return (
    <FeatureBand
      flip={flip}
      image="/art/12_platforms_every_screen.jpg"
      eyebrow="Everywhere"
      title="One account. Every screen you own."
      lead="Log in from the desk, the sofa or the departure gate. Positions, balances and history are the same wherever you open them."
      items={[
        { title: 'Desktop', text: 'MetaTrader 5 on Windows and macOS, with Expert Advisors and Depth of Market.' },
        { title: 'Browser', text: 'Movement WebTrader in any modern browser. Nothing to install, two-factor on every login.' },
        { title: 'Phone and tablet', text: 'The MT5 apps on iOS and Android with full order management and charting.' },
      ]}
      cta={<Btn to="/login">Get started <ArrowIcon /></Btn>}
    />
  );
}

function Downloads({ platform }) {
  return (
    <div className="pg-cards cols-3">
      {platform.downloads.map((d) => (
        <Link key={d.os} to={d.href} className="pg-card">
          <h3>{d.os}</h3>
          <p>{d.note}</p>
          <span className="pg-card-link">{d.os === 'Launch WebTrader' ? 'Launch' : 'Get it'} <ArrowIcon /></span>
        </Link>
      ))}
    </div>
  );
}

export function PlatformPage() {
  const { slug } = useParams();
  const platform = PLATFORM_BY_SLUG[slug];
  if (!platform) return <Navigate to="/platforms" replace />;
  const other = PLATFORMS.find((p) => p.slug !== slug);

  return (
    <PageShell title={platform.name}>
      <PageHero
        eyebrow={`Platforms · ${platform.name}`}
        title={platform.title}
        lead={platform.lead}
        actions={<><Btn to="/login">Start with {platform.name} <ArrowIcon /></Btn><Btn to={`/platforms/${other.slug}`} ghost>Or {other.name}</Btn></>}
        aside={(
          <div className="pg-panel">
            <div className="pg-panel-head"><h3 className="pg-h3">At a glance</h3><span className="pg-tag">{platform.tag}</span></div>
            <ul className="pg-pills" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {platform.highlights.map((h) => <li key={h} className="pg-pill">{h}</li>)}
            </ul>
          </div>
        )}
      />
      <section className="pg-section">
        <div className="pg-wrap">
          <SectionHead eyebrow="Get started" title={platform.slug === 'webtrader' ? 'Nothing to download' : 'Trade on any device'} lead={platform.slug === 'webtrader' ? 'Log in and the terminal opens in your browser. Your MetaTrader 5 account, positions and history are already there.' : 'Free to download. Free demo. Log in with the same account on every device.'} />
          <Downloads platform={platform} />
        </div>
      </section>
      <DevicesBand flip={platform.slug === 'webtrader'} />
      <section className="pg-section is-alt">
        <div className="pg-wrap pg-split is-narrow-left">
          <SectionHead eyebrow="Features" title={`What ${platform.name} gives you`} lead="The numbers that matter when you compare platforms." />
          <div className="pg-panel"><KeyValueTable rows={platform.features} /></div>
        </div>
      </section>
      <Faq items={platform.faq} eyebrow={platform.name} />
    </PageShell>
  );
}

export default function PlatformsHub() {
  return (
    <PageShell title="Platforms">
      <PageHero
        eyebrow="Platforms"
        title={<>Two terminals. <em>One account.</em></>}
        lead="MetaTrader 5 for depth and automation, Movement WebTrader for anywhere access. Positions and balances stay in sync between them."
        actions={<><Btn to="/login">Open an account <ArrowIcon /></Btn></>}
        aside={<ImageCard src="/art/11_platforms_two_terminals.jpg" caption="Desktop, web, tablet and phone" />}
      />
      <section className="pg-section">
        <div className="pg-wrap">
          <div className="pg-hub">
            {PLATFORMS.map((p) => (
              <Link key={p.slug} to={`/platforms/${p.slug}`} className="pg-hub-tile">
                <span className="pg-tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.lead}</p>
                <span className="pg-card-link">About {p.name} <ArrowIcon /></span>
              </Link>
            ))}
            <div className="pg-hub-tile">
              <span className="pg-tag">Both</span>
              <h3>Which should I use?</h3>
              <p>Running Expert Advisors, need Depth of Market or trade from a desk you control: MetaTrader 5. Travelling, on a locked-down machine, or just want a tab: WebTrader. Most clients use both.</p>
              <Link to="/help" className="pg-card-link">Platform questions <ArrowIcon /></Link>
            </div>
          </div>
        </div>
      </section>
      <DevicesBand />
      <section className="pg-section is-alt">
        <div className="pg-wrap">
          <SectionHead eyebrow="Compare" title="Side by side" />
          <div className="pg-table-wrap">
            <table className="pg-table">
              <thead><tr><th>Feature</th>{PLATFORMS.map((p) => <th key={p.slug}>{p.name}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Install', 'Desktop, mobile apps', 'None, browser only'],
                  ['Automated trading', 'Expert Advisors', 'No'],
                  ['Depth of Market', 'Yes', 'No'],
                  ['Charting', '38 indicators, 21 timeframes', '80+ indicators, TradingView charts'],
                  ['One-click trading', 'Yes', 'Yes'],
                  ['Account', 'Shared', 'Shared'],
                ].map(([k, a, b]) => <tr key={k}><td className="sym">{k}</td><td>{a}</td><td>{b}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
