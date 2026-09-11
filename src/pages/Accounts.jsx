import PageShell from '../components/page/PageShell.jsx';
import { PageHero, SectionHead, Cards, Faq, Btn, ArrowIcon, KeyValueTable, Notice, FeatureBand } from '../components/page/Blocks.jsx';
import { ACCOUNTS, ACCOUNT_FAQ, FUNDING } from '../data/content.js';

export default function Accounts() {
  return (
    <PageShell title="Account types">
      <PageHero
        eyebrow="Accounts"
        title="Pick an account. Nothing hidden."
        lead="Every account is compared in full below — spreads, commission, leverage and platforms, side by side."
        actions={<Btn to="/login">Open an account <ArrowIcon /></Btn>}
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
            { title: 'Free demo', text: 'Live pricing, virtual balance, no expiry while you use it. Practise on any account type.' },
            { title: 'Swap-free option', text: 'Available on every account for eligible clients, with no other change to conditions.' },
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
