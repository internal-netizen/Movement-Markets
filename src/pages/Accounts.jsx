import PageShell from '../components/page/PageShell.jsx';
import { PageHero, SectionHead, Cards, Faq, Btn, ArrowIcon, KeyValueTable, Notice, FeatureBand } from '../components/page/Blocks.jsx';
import { ACCOUNTS, ACCOUNT_FAQ, FUNDING } from '../data/content.js';

/** Round-trip cost of one EUR/USD lot on each account, from the published conditions. */
function CostCompare() {
  const rows = [
    { name: 'Standard', spread: 1.0, commission: 0 },
    { name: 'Raw', spread: 0.1, commission: 6 },
  ].map((r) => ({ ...r, total: r.spread * 10 + r.commission }));
  const max = Math.max(...rows.map((r) => r.total));
  return (
    <div className="pg-panel">
      <div className="pg-panel-head"><h3 className="pg-h3">Cost of one lot, round trip</h3><span className="pg-tag">EUR/USD</span></div>
      <div className="pg-form" style={{ gap: 18 }}>
        {rows.map((r) => (
          <div key={r.name} className="pg-range">
            <div className="pg-result-row" style={{ color: 'var(--pg-ink)' }}><span style={{ fontWeight: 600 }}>{r.name}</span><strong>${r.total.toFixed(2)}</strong></div>
            <div className="pg-session-bar" style={{ height: 10 }}><i style={{ left: 0, width: `${(r.total / max) * 100}%`, background: r.name === 'Raw' ? 'var(--pg-accent)' : 'var(--pg-muted)', opacity: 1 }} /></div>
            <div className="pg-range-scale"><span>{r.spread} pip spread{r.commission ? ` + $${r.commission} commission` : ', no commission'}</span></div>
          </div>
        ))}
      </div>
      <p className="pg-notice">Typical spreads in liquid hours, one pip on EUR/USD worth $10 a lot. Wider spreads narrow the gap; volume widens it.</p>
    </div>
  );
}

export default function Accounts() {
  return (
    <PageShell title="Account types">
      <PageHero
        eyebrow="Accounts"
        title="Two ways to pay. Neither hides anything."
        lead="Standard rolls the cost into the spread with no commission. Raw shows the market spread and charges a fixed commission per lot. Same execution, same platforms, same leverage."
        actions={<><Btn to="/login">Open an account <ArrowIcon /></Btn><Btn to="/insights/standard-vs-raw-account" ghost>Which is cheaper for me?</Btn></>}
        aside={<CostCompare />}
      />
      <section className="pg-section" id="compare">
        <div className="pg-wrap">
          <div className="pg-plans">
            {ACCOUNTS.map((a) => (
              <article key={a.id} className={`pg-plan${a.featured ? ' is-featured' : ''}`}>
                <div className="pg-plan-head">
                  <div><h3>{a.name}</h3><p>{a.strap}</p></div>
                  <div className="pg-plan-deposit"><strong>{a.deposit}</strong><span>minimum deposit</span></div>
                </div>
                <KeyValueTable rows={a.rows} />
                <Btn to="/login" className={a.featured ? 'pg-btn-accent' : ''}>Open {a.name} account <ArrowIcon /></Btn>
              </article>
            ))}
          </div>
          <Notice>Conditions shown are typical. Spreads are variable. Every account includes negative balance protection, hedging, and a free demo that mirrors live pricing. Balances in a non-USD base currency are shown as the equivalent in that currency.</Notice>
        </div>
      </section>
      <section className="pg-section is-alt">
        <div className="pg-wrap">
          <SectionHead eyebrow="Included with every account" title="The parts that do not change" />
          <Cards cols={4} items={[
            { title: 'Negative balance protection', text: 'You can never owe more than your balance. Gaps that take an account below zero are reset at our cost.' },
            { title: 'Segregated funds', text: 'Client money sits in segregated accounts at tier-one banks, apart from company funds.' },
            { title: 'Free demo', text: 'Live pricing, virtual balance, no expiry while you use it. Practise on either account type.' },
            { title: 'Swap-free option', text: 'Available on both accounts for eligible clients, with no other change to conditions.' },
          ]} />
        </div>
      </section>
      <FeatureBand
        flip
        image="/art/13_accounts_money_in_out.jpg"
        eyebrow="Funding"
        title="Money in, money out, without the wait."
        lead="Deposits credit on arrival. Withdrawals are checked by a person and released the same business day, back to where the money came from."
        items={[
          { title: 'No fees either way', text: 'We do not charge for deposits or withdrawals. Your provider may.' },
          { title: 'Segregated at tier-one banks', text: 'Client money never sits in company accounts.' },
          { title: 'Cards, banks, local methods, crypto', text: 'Fund in the currency and method that suits you; the account converts at interbank.' },
        ]}
        cta={<Btn to="/login">Fund an account <ArrowIcon /></Btn>}
      />
      <section className="pg-section" id="funding">
        <div className="pg-wrap pg-split is-narrow-left">
          <SectionHead eyebrow="Funding" title="Deposits and withdrawals, without fees" lead="Fund by card, bank, local methods or crypto. We charge nothing either way; withdrawals go back to the method the money came from." />
          <div className="pg-table-wrap">
            <table className="pg-table">
              <thead><tr><th>Method</th><th>Processing</th><th>Our fee</th></tr></thead>
              <tbody>{FUNDING.map((f) => <tr key={f.method}><td className="sym">{f.method}</td><td>{f.time}</td><td>{f.fee}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>
      <Faq items={ACCOUNT_FAQ} eyebrow="Accounts" />
    </PageShell>
  );
}
