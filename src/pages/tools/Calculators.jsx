import { useState } from 'react';
import PageShell from '../../components/page/PageShell.jsx';
import { PageHero, SectionHead, Notice } from '../../components/page/Blocks.jsx';

/** Indicative reference prices — every calculator lets the trader overtype them. */
const INSTRUMENTS = [
  { s: 'EUR/USD', pip: 0.0001, contract: 100000, price: 1.085 },
  { s: 'GBP/USD', pip: 0.0001, contract: 100000, price: 1.27 },
  { s: 'USD/JPY', pip: 0.01, contract: 100000, price: 150.0 },
  { s: 'AUD/USD', pip: 0.0001, contract: 100000, price: 0.66 },
  { s: 'USD/CAD', pip: 0.0001, contract: 100000, price: 1.36 },
  { s: 'USD/CHF', pip: 0.0001, contract: 100000, price: 0.88 },
  { s: 'NZD/USD', pip: 0.0001, contract: 100000, price: 0.6 },
  { s: 'XAU/USD', pip: 0.01, contract: 100, price: 2400 },
  { s: 'XAG/USD', pip: 0.001, contract: 5000, price: 28 },
  { s: 'BTC/USD', pip: 1, contract: 1, price: 60000 },
];
const quoteOf = (s) => s.split('/')[1];
const baseOf = (s) => s.split('/')[0];

/** Value of one pip for `lots`, in USD. Quote-currency pairs convert at price. */
function pipValueUsd(inst, lots, price) {
  const raw = inst.pip * inst.contract * lots;
  return quoteOf(inst.s) === 'USD' ? raw : raw / price;
}
/** Margin in USD: notional in base currency, converted where the base is not USD. */
function marginUsd(inst, lots, price, leverage) {
  const baseUnits = (inst.contract * lots) / leverage;
  return baseOf(inst.s) === 'USD' ? baseUnits : baseUnits * price;
}

const usd = (n, d = 2) => (Number.isFinite(n) ? n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: d }) : '—');
const num = (n, d = 2) => (Number.isFinite(n) ? n.toLocaleString('en-US', { maximumFractionDigits: d }) : '—');

function useInstrument() {
  const [sym, setSym] = useState(INSTRUMENTS[0].s);
  const inst = INSTRUMENTS.find((i) => i.s === sym);
  const [price, setPrice] = useState(inst.price);
  const pick = (s) => { setSym(s); setPrice(INSTRUMENTS.find((i) => i.s === s).price); };
  return { inst, price, setPrice, pick };
}

function InstrumentFields({ ctx, idp }) {
  return (
    <>
      <div className="pg-field">
        <label htmlFor={`${idp}-inst`}>Instrument</label>
        <select id={`${idp}-inst`} value={ctx.inst.s} onChange={(e) => ctx.pick(e.target.value)}>
          {INSTRUMENTS.map((i) => <option key={i.s}>{i.s}</option>)}
        </select>
      </div>
      <div className="pg-field">
        <label htmlFor={`${idp}-price`}>Current price</label>
        <input id={`${idp}-price`} type="number" step="any" value={ctx.price} onChange={(e) => ctx.setPrice(+e.target.value)} />
        <span className="pg-help">Reference only. Overtype with the live price.</span>
      </div>
    </>
  );
}

function Num({ id, label, value, onChange, step = 'any', help }) {
  return (
    <div className="pg-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" step={step} value={value} onChange={(e) => onChange(+e.target.value)} />
      {help ? <span className="pg-help">{help}</span> : null}
    </div>
  );
}

function Tool({ id, eyebrow, title, lead, children, result }) {
  return (
    <section className="pg-section" id={id}>
      <div className="pg-wrap pg-split is-narrow-left">
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        <div className="pg-panel">
          <div className="pg-form cols-2">{children}</div>
          <div className="pg-result" style={{ marginTop: 18 }}>{result}</div>
        </div>
      </div>
    </section>
  );
}

function PipValue() {
  const ctx = useInstrument();
  const [lots, setLots] = useState(1);
  const v = pipValueUsd(ctx.inst, lots, ctx.price);
  return (
    <Tool id="pip" eyebrow="Calculator" title="Pip value" lead="What one pip is worth in US dollars for a given instrument and position size."
      result={<><div className="pg-result-row is-big"><span>Value of one pip</span><strong>{usd(v)}</strong></div><div className="pg-result-row"><span>Ten pips</span><strong>{usd(v * 10)}</strong></div></>}>
      <InstrumentFields ctx={ctx} idp="pip" />
      <Num id="pip-lots" label="Position size (lots)" value={lots} onChange={setLots} step="0.01" help="1 lot = 100,000 units of the base currency" />
    </Tool>
  );
}

function PositionSize() {
  const ctx = useInstrument();
  const [balance, setBalance] = useState(5000);
  const [riskPct, setRiskPct] = useState(1);
  const [stop, setStop] = useState(25);
  const riskUsd = balance * (riskPct / 100);
  const perLot = pipValueUsd(ctx.inst, 1, ctx.price);
  const lots = stop > 0 ? riskUsd / (stop * perLot) : NaN;
  return (
    <Tool id="position" eyebrow="Calculator" title="Position size" lead="Size a trade from the amount you are willing to lose and the distance to your stop."
      result={<><div className="pg-result-row is-big"><span>Position size</span><strong>{num(lots, 2)} lots</strong></div><div className="pg-result-row"><span>Amount at risk</span><strong>{usd(riskUsd)}</strong></div><div className="pg-result-row"><span>Pip value at that size</span><strong>{usd(lots * perLot)}</strong></div></>}>
      <InstrumentFields ctx={ctx} idp="pos" />
      <Num id="pos-bal" label="Account balance (USD)" value={balance} onChange={setBalance} />
      <Num id="pos-risk" label="Risk per trade (%)" value={riskPct} onChange={setRiskPct} step="0.1" />
      <Num id="pos-stop" label="Stop loss (pips)" value={stop} onChange={setStop} step="0.1" />
    </Tool>
  );
}

function Margin() {
  const ctx = useInstrument();
  const [lots, setLots] = useState(1);
  const [lev, setLev] = useState(500);
  const m = marginUsd(ctx.inst, lots, ctx.price, lev);
  const notional = baseOf(ctx.inst.s) === 'USD' ? ctx.inst.contract * lots : ctx.inst.contract * lots * ctx.price;
  return (
    <Tool id="margin" eyebrow="Calculator" title="Margin" lead="The margin a position locks at a given leverage. Leverage caps vary by instrument and account."
      result={<><div className="pg-result-row is-big"><span>Margin required</span><strong>{usd(m)}</strong></div><div className="pg-result-row"><span>Notional exposure</span><strong>{usd(notional, 0)}</strong></div></>}>
      <InstrumentFields ctx={ctx} idp="mar" />
      <Num id="mar-lots" label="Position size (lots)" value={lots} onChange={setLots} step="0.01" />
      <div className="pg-field">
        <label htmlFor="mar-lev">Leverage</label>
        <select id="mar-lev" value={lev} onChange={(e) => setLev(+e.target.value)}>
          {[30, 50, 100, 200, 500, 1000, 2000].map((l) => <option key={l} value={l}>1:{l}</option>)}
        </select>
      </div>
    </Tool>
  );
}

function ProfitLoss() {
  const ctx = useInstrument();
  const [dir, setDir] = useState('long');
  const [entry, setEntry] = useState(ctx.inst.price);
  const [exit, setExit] = useState(+(ctx.inst.price + ctx.inst.pip * 50).toFixed(5));
  const [lots, setLots] = useState(1);
  const pips = ((exit - entry) / ctx.inst.pip) * (dir === 'long' ? 1 : -1);
  const pnl = pips * pipValueUsd(ctx.inst, lots, exit || ctx.price);
  const pick = (s) => { ctx.pick(s); const i = INSTRUMENTS.find((x) => x.s === s); setEntry(i.price); setExit(+(i.price + i.pip * 50).toFixed(5)); };
  return (
    <Tool id="pnl" eyebrow="Calculator" title="Profit & loss" lead="The result of a trade between an entry and an exit price, before swaps and commission."
      result={<><div className="pg-result-row is-big"><span>Profit / loss</span><strong style={{ color: pnl >= 0 ? 'var(--pg-up)' : 'var(--pg-down)' }}>{usd(pnl)}</strong></div><div className="pg-result-row"><span>Move</span><strong>{num(pips, 1)} pips</strong></div></>}>
      <div className="pg-field">
        <label htmlFor="pnl-inst">Instrument</label>
        <select id="pnl-inst" value={ctx.inst.s} onChange={(e) => pick(e.target.value)}>{INSTRUMENTS.map((i) => <option key={i.s}>{i.s}</option>)}</select>
      </div>
      <div className="pg-field">
        <label>Direction</label>
        <div className="pg-segmented">
          <button type="button" className={dir === 'long' ? 'is-active' : ''} onClick={() => setDir('long')}>Buy</button>
          <button type="button" className={dir === 'short' ? 'is-active' : ''} onClick={() => setDir('short')}>Sell</button>
        </div>
      </div>
      <Num id="pnl-entry" label="Entry price" value={entry} onChange={setEntry} />
      <Num id="pnl-exit" label="Exit price" value={exit} onChange={setExit} />
      <Num id="pnl-lots" label="Position size (lots)" value={lots} onChange={setLots} step="0.01" />
    </Tool>
  );
}

function Pivots() {
  const [h, setH] = useState(1.092);
  const [l, setL] = useState(1.081);
  const [c, setC] = useState(1.0865);
  const [method, setMethod] = useState('classic');
  const P = (h + l + c) / 3;
  const R = h - l;
  const sets = {
    classic: [['R3', h + 2 * (P - l)], ['R2', P + R], ['R1', 2 * P - l], ['Pivot', P], ['S1', 2 * P - h], ['S2', P - R], ['S3', l - 2 * (h - P)]],
    fibonacci: [['R3', P + R], ['R2', P + 0.618 * R], ['R1', P + 0.382 * R], ['Pivot', P], ['S1', P - 0.382 * R], ['S2', P - 0.618 * R], ['S3', P - R]],
    camarilla: [['R4', c + (R * 1.1) / 2], ['R3', c + (R * 1.1) / 4], ['R2', c + (R * 1.1) / 6], ['R1', c + (R * 1.1) / 12], ['S1', c - (R * 1.1) / 12], ['S2', c - (R * 1.1) / 6], ['S3', c - (R * 1.1) / 4], ['S4', c - (R * 1.1) / 2]],
  };
  const dp = h > 50 ? 2 : 5;
  return (
    <Tool id="pivot" eyebrow="Calculator" title="Pivot points" lead="Support and resistance levels from the previous session’s high, low and close."
      result={sets[method].map(([k, v]) => <div key={k} className={`pg-result-row${k === 'Pivot' ? ' is-big' : ''}`}><span>{k}</span><strong>{num(v, dp)}</strong></div>)}>
      <div className="pg-field span-2">
        <label>Method</label>
        <div className="pg-segmented">
          {['classic', 'fibonacci', 'camarilla'].map((m) => <button key={m} type="button" className={method === m ? 'is-active' : ''} onClick={() => setMethod(m)}>{m[0].toUpperCase() + m.slice(1)}</button>)}
        </div>
      </div>
      <Num id="pv-h" label="Previous high" value={h} onChange={setH} />
      <Num id="pv-l" label="Previous low" value={l} onChange={setL} />
      <Num id="pv-c" label="Previous close" value={c} onChange={setC} />
    </Tool>
  );
}

export default function Calculators() {
  return (
    <PageShell title="Trading calculators">
      <PageHero
        eyebrow="Tools · Calculators"
        title="Five calculators. One page."
        lead="Pip value, position size, margin, profit and loss, and pivot points, using the contract sizes our accounts actually trade. Results are in US dollars."
        compact
        actions={(
          <nav className="pg-pills" aria-label="Calculators">
            {[['#pip', 'Pip value'], ['#position', 'Position size'], ['#margin', 'Margin'], ['#pnl', 'Profit & loss'], ['#pivot', 'Pivot points']].map(([h, l]) => <a key={h} href={h} className="pg-pill">{l}</a>)}
          </nav>
        )}
      />
      <PipValue />
      <PositionSize />
      <Margin />
      <ProfitLoss />
      <Pivots />
      <section className="pg-section is-tight"><div className="pg-wrap"><Notice>Calculators assume a USD account and standard contract sizes (100,000 units for FX, 100 oz for gold, 5,000 oz for silver, 1 coin for BTC). They exclude swaps, commission and slippage. Reference prices are illustrative; enter the live price for an accurate result.</Notice></div></section>
    </PageShell>
  );
}
