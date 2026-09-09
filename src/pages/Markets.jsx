import { Link, Navigate, useParams } from 'react-router-dom';
import PageShell from '../components/page/PageShell.jsx';
import { PageHero, Stats, SectionHead, Cards, Faq, Btn, ArrowIcon, Notice, FeatureBand, EditorialList, ImageCard } from '../components/page/Blocks.jsx';
import LiveBoard from '../components/page/LiveBoard.jsx';
import { MARKETS, MARKET_BY_SLUG } from '../data/markets.js';
import { PLATFORMS } from '../data/content.js';

const HERO_ART = {
  indices: ['/art/08_markets_indices.jpg', 'Twenty indices, extended hours', 'center'],
  commodities: ['/art/09_markets_commodities.jpg', 'Gold priced like a major pair', 'center'],
  shares: ['/art/10_markets_shares.jpg', 'Exchange prices, long or short', 'center'],
};

function LiquidityBand() {
  return (
    <FeatureBand
      image="/art/07_markets_hub_liquidity_pricing.jpg"
      eyebrow="Liquidity"
      title="Priced from the same book the banks use."
      lead="Quotes are aggregated from several bank and non-bank providers and passed through. There is no dealing desk deciding what you see."
      items={[
        { title: 'Aggregated feeds', text: 'Several providers compete for every fill, so the top of book holds through data releases and session opens.' },
        { title: 'No dealing desk', text: 'Orders route straight to liquidity. We never trade against a client position.' },
        { title: 'Costs you can see', text: 'Raw accounts show spread and commission separately; Standard rolls them into one spread. Nothing is hidden in either.' },
      ]}
      cta={<Btn to="/accounts">Compare accounts <ArrowIcon /></Btn>}
    />
  );
}

function MarketNav({ active }) {
  return (
    <nav className="pg-pills" aria-label="Markets">
      {MARKETS.map((m) => (
        <Link key={m.slug} to={`/markets/${m.slug}`} className={`pg-pill${active === m.slug ? ' is-active' : ''}`}>{m.name}</Link>
      ))}
    </nav>
  );
}

function InstrumentTable({ market }) {
  const isShares = market.slug === 'shares';
  return (
    <div className="pg-table-wrap">
      <table className="pg-table">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>{isShares ? 'Pricing' : 'Typical spread'}</th>
            <th>Max leverage</th>
            <th>Trade size</th>
          </tr>
        </thead>
        <tbody>
          {market.instruments.map((i) => (
            <tr key={i.symbol}>
              <td><span className="sym">{i.symbol}</span><span className="sub">{i.name}</span></td>
              <td className="num">{i.spread}{isShares ? ' spread + commission' : ''}</td>
              <td className="num">{i.leverage}</td>
              <td className="num">{isShares ? 'from 1 share' : 'from 0.01 lots'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PlatformsStrip() {
  return (
    <section className="pg-section is-alt">
      <div className="pg-wrap">
        <SectionHead eyebrow="Platforms" title="Trade it on the platform you already know" lead="Every market is available on MetaTrader 5 and Movement WebTrader, from one account." />
        <Cards cols={2} items={PLATFORMS.map((p) => ({ title: p.name, text: p.lead, tag: p.tag, to: `/platforms/${p.slug}`, linkLabel: `About ${p.name}` }))} />
      </div>
    </section>
  );
}

export function MarketPage() {
  const { slug } = useParams();
  const market = MARKET_BY_SLUG[slug];
  if (!market) return <Navigate to="/markets" replace />;

  return (
    <PageShell title={`${market.name} trading`}>
      <PageHero
        eyebrow={`Markets · ${market.name}`}
        title={market.title}
        lead={market.lead}
        actions={<><Btn to="/login">Open an account <ArrowIcon /></Btn><Btn to="/accounts" ghost>See account types</Btn></>}
        aside={HERO_ART[market.slug]
          ? <ImageCard src={HERO_ART[market.slug][0]} caption={HERO_ART[market.slug][1]} focus={HERO_ART[market.slug][2]} />
          : <LiveBoard market={market.slug} compact />}
      />
      <section className="pg-section is-tight">
        <div className="pg-wrap">
          <MarketNav active={market.slug} />
          <Stats items={market.stats} note="Indicative conditions on a Raw account during liquid sessions. Spreads are variable and widen around news and at session boundaries." />
        </div>
      </section>
      <section className="pg-section">
        <div className="pg-wrap">
          <SectionHead eyebrow="Instruments" title={`Popular ${market.name.toLowerCase()} instruments`} lead="A selection of what you can trade. The full list, with live spreads, is in the platform." />
          <InstrumentTable market={market} />
          <Notice>Spreads shown are typical minimums, not live quotes. Leverage varies by account type, instrument and exposure.</Notice>
        </div>
      </section>
      <section className="pg-section is-alt">
        <div className="pg-wrap">
          <SectionHead eyebrow="Why here" title={`Why trade ${market.name.toLowerCase()} with Movement Markets`} />
          <EditorialList items={market.why} />
        </div>
      </section>
      <LiquidityBand />
      <PlatformsStrip />
      <Faq items={market.faq} eyebrow={market.name} />
    </PageShell>
  );
}

export default function MarketsHub() {
  return (
    <PageShell title="Markets">
      <PageHero
        eyebrow="Markets"
        title={<>Six asset classes. <em>One account.</em></>}
        lead="Forex, indices, metals and energy, shares and crypto as CFDs, priced from institutional liquidity and executed on the same stack."
        actions={<><Btn to="/login">Open an account <ArrowIcon /></Btn><Btn to="/tools/market-hours" ghost>Market hours</Btn></>}
        aside={<ImageCard src="/art/06_markets_hub_six_asset_classes.jpg" caption="One margin pool across every market" />}
      />
      <section className="pg-section is-tight">
        <div className="pg-wrap">
          <Stats items={[
            { value: '300+', label: 'Instruments' },
            { value: '0.0', unit: 'pips', label: 'Raw FX spreads from' },
            { value: '1:2000', label: 'Maximum leverage' },
            { value: '24/7', label: 'Crypto, 24/5 everything else' },
          ]} />
        </div>
      </section>
      <section className="pg-section">
        <div className="pg-wrap">
          <SectionHead eyebrow="Choose a market" title="What do you want to trade?" />
          <div className="pg-hub">
            {MARKETS.map((m) => (
              <Link key={m.slug} to={`/markets/${m.slug}`} className="pg-hub-tile">
                <span className="pg-tag">{m.stats[2]?.value ?? ''} {m.stats[2]?.label?.toLowerCase() ?? ''}</span>
                <h3>{m.name}</h3>
                <p>{m.lead}</p>
                <span className="pg-card-link">Explore {m.name.toLowerCase()} <ArrowIcon /></span>
              </Link>
            ))}
            <Link to="/accounts" className="pg-hub-tile">
              <span className="pg-tag">Accounts</span>
              <h3>Standard or Raw</h3>
              <p>Two pricing models. Pick the one that suits how often you trade, then trade every market above from it.</p>
              <span className="pg-card-link">Compare accounts <ArrowIcon /></span>
            </Link>
          </div>
        </div>
      </section>
      <LiquidityBand />
      <PlatformsStrip />
    </PageShell>
  );
}
