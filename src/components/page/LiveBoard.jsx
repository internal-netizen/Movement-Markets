import { useEffect, useState } from 'react';
import { LIVE_FETCHERS } from '../../data/quotes.js';

function Spark({ points, up }) {
  if (!points || points.length < 2) return <span className="pg-spark" />;
  const w = 96; const h = 28;
  const min = Math.min(...points); const max = Math.max(...points);
  const span = max - min || 1;
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${((i / (points.length - 1)) * w).toFixed(1)},${(h - ((p - min) / span) * (h - 4) - 2).toFixed(1)}`).join(' ');
  return (
    <svg className="pg-spark" viewBox={`0 0 ${w} ${h}`} width={w} height={h} aria-hidden="true">
      <path d={d} fill="none" stroke={up ? 'var(--pg-up)' : 'var(--pg-down)'} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Real reference prices for the markets that have a keyless public source.
 * Renders nothing at all if the fetch fails, so the static conditions table
 * underneath is never contradicted by an empty board.
 */
export default function LiveBoard({ market, compact = false }) {
  const fetcher = LIVE_FETCHERS[market];
  const [state, setState] = useState({ status: fetcher ? 'loading' : 'none', data: null });

  useEffect(() => {
    if (!fetcher) return undefined;
    const ctrl = new AbortController();
    fetcher(ctrl.signal)
      .then((data) => setState({ status: 'ok', data }))
      .catch(() => setState({ status: 'error', data: null }));
    return () => ctrl.abort();
  }, [fetcher]);

  if (state.status === 'none' || state.status === 'error') return null;
  const rows = state.data?.rows ?? [];
  const shown = compact ? rows.slice(0, 5) : rows;
  const isFx = market === 'forex';

  return (
    <div className={`pg-board${compact ? ' is-compact' : ''}`} aria-live="polite">
      <div className="pg-board-head">
        <span className="pg-board-title"><i className="pg-board-dot" /> {isFx ? 'Reference rates' : 'Spot prices'}</span>
        <span className="pg-board-sub">{state.status === 'loading' ? 'Loading…' : isFx ? `ECB fix · ${state.data.asOf}` : 'Live · 24h change'}</span>
      </div>
      {state.status === 'loading' ? (
        <div className="pg-board-skeleton">{[0, 1, 2, 3, 4].map((i) => <span key={i} />)}</div>
      ) : (
        <table className="pg-board-table">
          <tbody>
            {shown.map((r) => (
              <tr key={r.symbol}>
                <td className="sym">{r.symbol}</td>
                <td className="spark"><Spark points={r.spark} up={r.change >= 0} /></td>
                <td className="num">{r.price}</td>
                <td className={`chg ${r.change >= 0 ? 'up' : 'down'}`}>{r.change >= 0 ? '+' : ''}{r.change.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p className="pg-board-note">{state.data?.source ?? ''}. {isFx ? 'Daily reference rates with a 30-day trend' : 'Seven-day trend'}, not tradable quotes.</p>
    </div>
  );
}
