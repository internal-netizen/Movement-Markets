import { useEffect, useState } from 'react';
import PageShell from '../../components/page/PageShell.jsx';
import { PageHero, SectionHead, Notice } from '../../components/page/Blocks.jsx';

const SESSIONS = [
  { name: 'Sydney', tz: 'Australia/Sydney', open: 7, close: 16, note: 'AUD, NZD most active' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', open: 9, close: 18, note: 'JPY, AUD most active' },
  { name: 'London', tz: 'Europe/London', open: 8, close: 17, note: 'Largest session by volume' },
  { name: 'New York', tz: 'America/New_York', open: 8, close: 17, note: 'Overlaps London for four hours' },
];

const HOLIDAYS_2026 = [
  ['1 Jan', 'New Year’s Day', 'Most markets closed; thin FX liquidity'],
  ['19 Jan', 'Martin Luther King Jr. Day (US)', 'US exchanges closed; FX open, thinner'],
  ['16 Feb', 'Presidents’ Day (US)', 'US exchanges closed; FX open, thinner'],
  ['3 Apr', 'Good Friday', 'Most exchanges closed; FX and metals thin or closed'],
  ['6 Apr', 'Easter Monday (UK, EU)', 'European exchanges closed'],
  ['25 May', 'Memorial Day (US)', 'US exchanges closed; FX open, thinner'],
  ['19 Jun', 'Juneteenth (US)', 'US exchanges closed'],
  ['3 Jul', 'Independence Day observed (US)', 'US exchanges closed; early closes on 2 Jul'],
  ['7 Sep', 'Labor Day (US)', 'US exchanges closed; FX open, thinner'],
  ['26 Nov', 'Thanksgiving (US)', 'US exchanges closed; early close 27 Nov'],
  ['25 Dec', 'Christmas Day', 'Most markets closed'],
  ['28 Dec', 'Boxing Day observed (UK)', 'London exchanges closed'],
];

function tzParts(date, tz) {
  const f = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour12: false, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', weekday: 'short' });
  const p = Object.fromEntries(f.formatToParts(date).map((x) => [x.type, x.value]));
  return { y: +p.year, m: +p.month, d: +p.day, h: (+p.hour) % 24, min: +p.minute, s: +p.second, wd: p.weekday };
}
function tzOffsetMs(date, tz) {
  const p = tzParts(date, tz);
  return Date.UTC(p.y, p.m - 1, p.d, p.h, p.min, p.s) - Math.floor(date.getTime() / 1000) * 1000;
}
/** The instant at which a wall-clock hour happens in a zone on a given date. */
function zonedToUtc(y, m, d, h, tz) {
  const guess = Date.UTC(y, m - 1, d, h);
  return new Date(guess - tzOffsetMs(new Date(guess), tz));
}
const isWeekend = (wd) => wd === 'Sat' || wd === 'Sun';

function sessionState(s, now) {
  const p = tzParts(now, s.tz);
  const open = !isWeekend(p.wd) && p.h >= s.open && p.h < s.close;
  const opensAt = zonedToUtc(p.y, p.m, p.d, s.open, s.tz);
  const closesAt = zonedToUtc(p.y, p.m, p.d, s.close, s.tz);
  let next = null;
  if (open) next = closesAt;
  else {
    for (let i = 0; i <= 7 && !next; i += 1) {
      const c = zonedToUtc(p.y, p.m, p.d + i, s.open, s.tz);
      if (c > now && !isWeekend(tzParts(c, s.tz).wd)) next = c;
    }
  }
  return { open, opensAt, closesAt, next };
}

function marketOpen(now) {
  const ny = tzParts(now, 'America/New_York');
  const syd = tzParts(now, 'Australia/Sydney');
  if (ny.wd === 'Sat') return false;
  if (ny.wd === 'Fri' && ny.h >= 17) return false;
  if (ny.wd === 'Sun' && !(syd.wd === 'Mon' && syd.h >= 7)) return false;
  return true;
}

const fmtTime = (d) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const fmtWhen = (d, now) => {
  const sameDay = d.toDateString() === now.toDateString();
  return sameDay ? fmtTime(d) : `${d.toLocaleDateString([], { weekday: 'short' })} ${fmtTime(d)}`;
};

/** Percent of the viewer's local day, for the timeline bar. */
function dayPct(d) {
  const midnight = new Date(d); midnight.setHours(0, 0, 0, 0);
  return ((d - midnight) / 86400000) * 100;
}

function Bar({ state, now }) {
  const a = dayPct(state.opensAt);
  const b = dayPct(state.closesAt);
  const segs = a <= b ? [[a, b]] : [[a, 100], [0, b]];
  return (
    <div className="pg-session-bar">
      {segs.map(([x, y]) => <i key={x} style={{ left: `${x}%`, width: `${y - x}%` }} />)}
      <span className="pg-now-line" style={{ left: `${dayPct(now)}%` }} />
    </div>
  );
}

export default function MarketHours() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const fxOpen = marketOpen(now);

  return (
    <PageShell title="Market hours">
      <PageHero
        eyebrow="Tools · Market hours"
        title={fxOpen ? 'The forex market is open.' : 'The forex market is closed.'}
        lead={`The four sessions in your local time (${tzName}), which are open right now, and the year’s holidays that thin liquidity.`}
        compact
        aside={(
          <div className="pg-panel">
            <p className="pg-eyebrow">Your local time</p>
            <p className="pg-h2" style={{ fontVariantNumeric: 'tabular-nums' }}>{fmtTime(now)}</p>
            <p className="pg-clock">{now.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' })} · updates every 30 s</p>
          </div>
        )}
      />
      <section className="pg-section is-tight">
        <div className="pg-wrap">
          <div className="pg-timeline-scale"><div /><div><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div><div /></div>
          <div className="pg-sessions" style={{ marginTop: 8 }}>
            {SESSIONS.map((s) => {
              const st = sessionState(s, now);
              return (
                <div key={s.name} className={`pg-session${st.open ? ' is-open' : ''}`}>
                  <div className="pg-session-name">{s.name}<small>{s.note}</small></div>
                  <Bar state={st} now={now} />
                  <div className="pg-session-status">
                    {st.open ? 'Open' : 'Closed'}
                    <small>{st.open ? `closes ${fmtWhen(st.next, now)}` : st.next ? `opens ${fmtWhen(st.next, now)}` : ''}</small>
                  </div>
                </div>
              );
            })}
          </div>
          <Notice>Session hours follow local business hours in each centre (Sydney 07:00–16:00, Tokyo 09:00–18:00, London 08:00–17:00, New York 08:00–17:00) and shift with daylight saving. Crypto trades 24/7; indices and shares follow their exchanges.</Notice>
        </div>
      </section>
      <section className="pg-section is-alt">
        <div className="pg-wrap pg-split is-narrow-left">
          <SectionHead eyebrow="Holidays 2026" title="Days that thin the market" lead="Forex rarely closes outright, but on these dates liquidity drops and spreads widen. Exchange-traded instruments close with their exchange." />
          <div className="pg-table-wrap">
            <table className="pg-table">
              <thead><tr><th>Date</th><th>Holiday</th><th>Effect</th></tr></thead>
              <tbody>{HOLIDAYS_2026.map(([d, n, e]) => <tr key={d + n}><td className="num">{d}</td><td className="sym">{n}</td><td style={{ whiteSpace: 'normal' }}>{e}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
