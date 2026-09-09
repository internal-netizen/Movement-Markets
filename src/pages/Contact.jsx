import { useState } from 'react';
import PageShell from '../components/page/PageShell.jsx';
import { PageHero, SectionHead, Cards, Btn, ArrowIcon } from '../components/page/Blocks.jsx';
import { COMPANY_DETAILS } from '../data/legalDocuments.js';

const Icon = ({ d }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', topic: 'Account', message: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  function submit(e) {
    // No backend in this project — the form confirms locally.
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell title="Contact">
      <PageHero
        eyebrow="Contact"
        title="Talk to a person. Any hour."
        lead="The desk is staffed around the clock by people who trade. Chat is fastest; email if you need to attach something."
        compact
      />
      <section className="pg-section">
        <div className="pg-wrap pg-split">
          <div className="pg-contact-cards">
            <div className="pg-contact-card">
              <div className="pg-contact-icon"><Icon d={<><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></>} /></div>
              <div>
                <h3>Live chat</h3>
                <p>Real-time help from the chat bubble in the corner of every page. Typical first reply under two minutes.</p>
              </div>
            </div>
            <div className="pg-contact-card">
              <div className="pg-contact-icon"><Icon d={<><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>} /></div>
              <div>
                <h3>Email</h3>
                <p><a href={`mailto:${COMPANY_DETAILS.supportEmail}`}>{COMPANY_DETAILS.supportEmail}</a><br />Replies within a few hours, 24 hours at most.</p>
              </div>
            </div>
            <div className="pg-contact-card">
              <div className="pg-contact-icon"><Icon d={<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>} /></div>
              <div>
                <h3>Registered office</h3>
                <p>{COMPANY_DETAILS.legalName}<br />{COMPANY_DETAILS.registeredAddress}</p>
              </div>
            </div>
          </div>
          <div className="pg-panel">
            {sent ? (
              <div className="pg-success">
                <h3 className="pg-h3">Thanks, {form.name || 'we have it'}.</h3>
                <p className="pg-lead" style={{ fontSize: 15 }}>Your message is with the desk. Look out for a reply at {form.email || 'your email'}.</p>
                <Btn to="/" ghost className="pg-btn-ghost" >Back to home</Btn>
              </div>
            ) : (
              <form className="pg-form cols-2" onSubmit={submit}>
                <div className="pg-field span-2"><h3 className="pg-h3">Send a message</h3></div>
                <div className="pg-field"><label htmlFor="c-name">Name</label><input id="c-name" required value={form.name} onChange={set('name')} /></div>
                <div className="pg-field"><label htmlFor="c-email">Email</label><input id="c-email" type="email" required value={form.email} onChange={set('email')} /></div>
                <div className="pg-field span-2"><label htmlFor="c-topic">Topic</label>
                  <select id="c-topic" value={form.topic} onChange={set('topic')}>
                    {['Account', 'Deposits & withdrawals', 'Trading conditions', 'Platforms', 'Partnership', 'Something else'].map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="pg-field span-2"><label htmlFor="c-msg">Message</label><textarea id="c-msg" required value={form.message} onChange={set('message')} /></div>
                <div className="pg-field span-2"><button type="submit" className="pg-btn">Send message <ArrowIcon /></button></div>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="pg-section is-alt">
        <div className="pg-wrap">
          <SectionHead eyebrow="Self-serve" title="Faster than asking" />
          <Cards cols={4} items={[
            { title: 'Help centre', text: 'Answers on verification, funding, leverage and platforms.', to: '/help', linkLabel: 'Browse answers' },
            { title: 'Platform guides', text: 'Installing and logging in to MetaTrader 5 and WebTrader.', to: '/platforms', linkLabel: 'Platforms' },
            { title: 'Legal documents', text: 'Every agreement, policy and disclosure in full.', to: '/legal', linkLabel: 'Legal hub' },
            { title: 'Trading tools', text: 'Calendar, market hours and calculators.', to: '/tools', linkLabel: 'Open tools' },
          ]} />
        </div>
      </section>
    </PageShell>
  );
}
