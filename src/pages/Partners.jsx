import { useState } from 'react';
import PageShell from '../components/page/PageShell.jsx';
import { PageHero, Stats, SectionHead, Faq, Btn, ArrowIcon, Notice, FeatureBand, EditorialList, ImageCard } from '../components/page/Blocks.jsx';
import { PARTNER_TIERS, PARTNER_PERKS } from '../data/content.js';
import { PARTNER_PORTAL_URL } from '../config/portalLinks.js';

function Estimator() {
  const [tier, setTier] = useState(PARTNER_TIERS[1]);
  const [lots, setLots] = useState(400);
  const monthly = lots * tier.rebate;
  const fmt = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  return (
    <div className="pg-panel">
      <div className="pg-panel-head">
        <h3 className="pg-h3">Estimate your rebates</h3>
        <div className="pg-segmented" role="tablist" aria-label="Partner tier">
          {PARTNER_TIERS.map((t) => (
            <button key={t.name} type="button" role="tab" aria-selected={tier.name === t.name} className={tier.name === t.name ? 'is-active' : ''} onClick={() => setTier(t)}>{t.name}</button>
          ))}
        </div>
      </div>
      <div className="pg-form">
        <div className="pg-field pg-range">
          <label htmlFor="p-lots">Monthly lots traded by your clients: <strong>{lots.toLocaleString()}</strong></label>
          <input id="p-lots" type="range" min="10" max="5000" step="10" value={lots} onChange={(e) => setLots(Number(e.target.value))} />
          <div className="pg-range-scale"><span>10</span><span>1,000</span><span>2,500</span><span>5,000</span></div>
        </div>
        <div className="pg-result">
          <div className="pg-result-row is-big"><span>Monthly rebates</span><strong>{fmt(monthly)}</strong></div>
          <div className="pg-result-row"><span>Annual run-rate</span><strong>{fmt(monthly * 12)}</strong></div>
          <div className="pg-result-row"><span>Per lot at {tier.name}</span><strong>${tier.rebate}</strong></div>
        </div>
      </div>
      <Notice>An illustration, not an offer. Rebates depend on the instruments traded and the tier your volume qualifies for.</Notice>
    </div>
  );
}

export default function Partners() {
  return (
    <PageShell title="Partners">
      <PageHero
        eyebrow="Partners · Introducing broker programme"
        title="Refer traders. Earn on every lot, for life."
        lead="A fixed rebate per lot on every client you introduce, paid weekly, with lifetime attribution and a dashboard that shows you exactly where it came from."
        actions={<><Btn to={PARTNER_PORTAL_URL}>Open partner portal <ArrowIcon /></Btn><Btn to="/contact" ghost>Ask about custom terms</Btn></>}
        aside={<ImageCard src="/art/16_partners_refer_traders.jpg" caption="Your network, attributed for life" />}
      />
      <section className="pg-section is-tight">
        <div className="pg-wrap">
          <Stats items={[
            { value: '$10', label: 'Per lot at Elite tier' },
            { value: 'Weekly', label: 'Payouts to your wallet' },
            { value: 'Lifetime', label: 'Client attribution' },
            { value: '0', label: 'Cost to join' },
          ]} />
        </div>
      </section>
      <section className="pg-section">
        <div className="pg-wrap">
          <SectionHead eyebrow="Tiers" title="Grow into a bigger rebate" lead="Tiers are reviewed monthly on active clients and volume. You are never moved down mid-month." />
          <div className="pg-tiers">
            {PARTNER_TIERS.map((t, i) => (
              <div key={t.name} className={`pg-tier${i === PARTNER_TIERS.length - 1 ? ' is-top' : ''}`}>
                <h3>{t.name}</h3>
                <strong>${t.rebate} <small>per lot</small></strong>
                <span>{t.clients}</span>
                <span>{t.volume === '—' ? 'No volume minimum' : t.volume}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pg-section is-alt">
        <div className="pg-wrap pg-split is-narrow-left">
          <SectionHead eyebrow="Your numbers" title="See what your network could earn" lead="Move the slider to the volume your clients trade each month." />
          <Estimator />
        </div>
      </section>
      <section className="pg-section">
        <div className="pg-wrap">
          <SectionHead eyebrow="What you get" title="Built for partners who run it like a business" />
          <EditorialList items={PARTNER_PERKS} />
        </div>
      </section>
      <FeatureBand
        flip
        image="/art/17_partners_three_steps.jpg"
        eyebrow="How it works"
        title="Three steps. Then it runs itself."
        items={[
          { title: 'Apply', text: 'From your client portal. Approval usually takes a day.' },
          { title: 'Share your link', text: 'Tracking links, banners and landing pages from the partner kit.' },
          { title: 'Get paid weekly', text: 'A rebate on every lot your clients trade, for as long as they trade.' },
        ]}
        cta={<Btn to={PARTNER_PORTAL_URL}>Open partner portal <ArrowIcon /></Btn>}
      />
      <Faq eyebrow="Partners" items={[
        { q: 'Who can become a partner?', a: 'Anyone with an audience of traders: educators, signal providers, community owners, content creators and regional introducers. Apply from your client portal; approval usually takes a day.' },
        { q: 'How is the rebate calculated?', a: 'A fixed amount per standard lot closed by your referred clients, at your current tier. Partial lots earn pro rata. Rebates on some instruments are scaled to their contract size.' },
        { q: 'When and how am I paid?', a: 'Weekly, into a partner wallet in your portal. Withdraw by any funding method or transfer into a trading account.' },
        { q: 'Can I build a sub-partner network?', a: 'Yes. Multi-level structures are available from Growth tier, with an override on the volume of partners you introduce.' },
      ]} />
    </PageShell>
  );
}
