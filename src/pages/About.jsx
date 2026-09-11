import PageShell from '../components/page/PageShell.jsx';
import { PageHero, Stats, SectionHead, Cards, Btn, ArrowIcon, FeatureBand, EditorialList, ImageCard, Statement } from '../components/page/Blocks.jsx';
import { ABOUT_VALUES, ABOUT_NUMBERS } from '../data/content.js';

export default function About() {
  return (
    <PageShell title="About us">
      <PageHero
        eyebrow="About Movement Markets"
        title="A broker built by people who were tired of brokers."
        lead="We started with a simple complaint: retail traders were paying institutional prices plus a markup, waiting days for money, and talking to bots. So we built the version we wanted to use."
        actions={<><Btn to="/login">Open an account <ArrowIcon /></Btn><Btn to="/contact" ghost>Talk to the desk</Btn></>}
        aside={<ImageCard src="/art/14_about_broker_built_by_people.jpg" caption="Built for speed, measured in milliseconds" />}
      />
      <section className="pg-section is-tight">
        <div className="pg-wrap"><Stats items={ABOUT_NUMBERS} /></div>
      </section>
      <Statement by="What we are building">
        The price you see should be <b>the price the market is making</b>, <em>and everything between you and it should be measured in milliseconds.</em>
      </Statement>
      <section className="pg-section">
        <div className="pg-wrap pg-split is-narrow-left">
          <SectionHead eyebrow="Our story" title="Built around the trade, not the funnel." />
          <div className="pg-prose">
            <p>Movement Markets began as an execution project: could a broker pass institutional liquidity straight through to a retail account, keep the spread the market’s own, and still be a business? The answer was yes, if everything else was lean. So the company was designed backwards from that constraint.</p>
            <p>Pricing comes from aggregated bank and non-bank liquidity and is shown as it arrives. Costs are one commission on Raw accounts or one all-in spread on Standard. Funding is free in both directions. Verification is done by a person, usually within the hour.</p>
            <p>Today clients trade forex, indices, metals and energy, shares and crypto from one account, on Xpert Trader or our own WebTrader, with a support desk that is staffed by traders around the clock and empowered to actually fix things.</p>
            <p>Every agreement, policy and disclosure that governs your account is published in full in our legal hub.</p>
          </div>
        </div>
      </section>
      <section className="pg-section is-alt">
        <div className="pg-wrap">
          <SectionHead eyebrow="How we work" title="Four rules we do not bend" />
          <EditorialList items={ABOUT_VALUES} />
        </div>
      </section>
      <FeatureBand
        image="/art/15_about_execution_is_product.jpg"
        eyebrow="The stack"
        title="Execution is the product."
        lead="Everything else on this site is a way of getting to a fill. So the fill is what we engineer first."
        items={[
          { title: 'Aggregated liquidity', text: 'Several bank and non-bank providers priced together, the best on top.' },
          { title: 'Co-located matching', text: 'Order routing sits next to the liquidity, not in a retail data centre.' },
          { title: 'Measured, published', text: 'Average execution time is on the home page. If it moves, so does the number.' },
        ]}
        cta={<Btn to="/markets">Explore the markets <ArrowIcon /></Btn>}
      />
      <section className="pg-section">
        <div className="pg-wrap">
          <SectionHead eyebrow="Where next" title="Look under the hood" />
          <Cards cols={3} items={[
            { title: 'Account types', text: 'Standard and Raw, side by side, every condition on one page.', to: '/accounts', linkLabel: 'Compare accounts' },
            { title: 'Legal hub', text: 'Client agreement, risk disclosure, order execution and every policy, in full.', to: '/legal', linkLabel: 'Read the documents' },
            { title: 'Partners', text: 'Refer traders and earn a per-lot rebate for as long as they trade.', to: '/partners', linkLabel: 'Partner programme' },
          ]} />
        </div>
      </section>
    </PageShell>
  );
}
