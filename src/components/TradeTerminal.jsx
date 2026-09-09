import { useState } from 'react';

/**
 * The trading dashboard preview.
 *
 * Authentic Movement Markets institutional platform preview:
 * - Direct interbank indicative pricing
 * - Multi-pair switcher (EUR/USD, GBP/USD, XAU/USD)
 * - Timeframe tools (1m, 1H, 4H, 1D)
 * - Glowing SVG pulse chart
 * - Bid / Ask pricing & account CTA
 *
 * Styled by site.css and movement-home.css (.trade-terminal and friends).
 */

const PAIRS = [
  {
    symbol: 'EUR / USD',
    name: 'Euro / US Dollar',
    flag: '€',
    price: '1.16842',
    change: '+0.18%',
    bid: '1.16842',
    ask: '1.16847',
    chartArea: 'M0 111 C43 103 53 87 89 91 S142 112 176 82 S225 63 259 75 S313 48 350 55 S398 61 427 31 S482 36 520 12 L520 128 L0 128Z',
    chartLine: 'M0 111 C43 103 53 87 89 91 S142 112 176 82 S225 63 259 75 S313 48 350 55 S398 61 427 31 S482 36 520 12',
  },
  {
    symbol: 'GBP / USD',
    name: 'British Pound / US Dollar',
    flag: '£',
    price: '1.27148',
    change: '+0.34%',
    bid: '1.27148',
    ask: '1.27153',
    chartArea: 'M0 118 C50 110 90 98 135 94 S220 72 265 80 S340 54 380 48 S440 32 520 18 L520 128 L0 128Z',
    chartLine: 'M0 118 C50 110 90 98 135 94 S220 72 265 80 S340 54 380 48 S440 32 520 18',
  },
  {
    symbol: 'XAU / USD',
    name: 'Spot Gold / US Dollar',
    flag: 'Au',
    price: '2,384.45',
    change: '+0.82%',
    bid: '2,384.45',
    ask: '2,384.65',
    chartArea: 'M0 122 C60 115 110 95 160 88 S250 64 300 70 S390 42 440 38 S480 24 520 10 L520 128 L0 128Z',
    chartLine: 'M0 122 C60 115 110 95 160 88 S250 64 300 70 S390 42 440 38 S480 24 520 10',
  },
];

const TIMEFRAMES = ['1m', '1H', '4H', '1D'];

export default function TradeTerminal() {
  const [selectedPairIdx, setSelectedPairIdx] = useState(0);
  const [activeTf, setActiveTf] = useState('1H');

  const pair = PAIRS[selectedPairIdx];

  const handleNextPair = () => {
    setSelectedPairIdx((prev) => (prev + 1) % PAIRS.length);
  };

  return (
    <div className="trade-terminal" aria-label="Movement Markets platform preview with indicative pricing">
      <div className="terminal-topbar">
        <button
          type="button"
          className="terminal-pair"
          onClick={handleNextPair}
          title="Click to switch asset"
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
        >
          <span className="flag-pair">{pair.flag}</span>
          <span>
            <b>{pair.symbol}</b>
            <small>{pair.name}</small>
          </span>
        </button>
        <div className="live-pill"><i /> Indicative</div>
        <div className="terminal-tools">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              type="button"
              className={activeTf === tf ? 'active' : ''}
              onClick={() => setActiveTf(tf)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
      <div className="terminal-chart">
        <div className="chart-stats">
          <span>{pair.price}</span>
          <strong>{pair.change}</strong>
        </div>
        <svg className="mini-chart" viewBox="0 0 520 128" role="img" aria-label="Illustrative market price chart">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b0f000" stopOpacity=".32" />
              <stop offset="1" stopColor="#b0f000" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="chart-area" d={pair.chartArea} />
          <path className="chart-line" d={pair.chartLine} />
        </svg>
        <div className="chart-marker">{pair.price}</div>
      </div>
      <div className="terminal-bottom">
        <div>
          <small>Bid</small>
          <strong>{pair.bid}</strong>
        </div>
        <div>
          <small>Ask</small>
          <strong>{pair.ask}</strong>
        </div>
        <a className="buy-button" href="/login">
          Open account{' '}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
      <p className="terminal-note">Platform preview · indicative pricing, not live market data</p>
    </div>
  );
}
