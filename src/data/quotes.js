/**
 * Public, keyless reference prices for the market pages.
 *
 *  - FX: European Central Bank reference rates via Frankfurter (one fix a
 *    day on business days), with the last 30 days for a sparkline.
 *  - Crypto: CoinGecko spot with 24h change and a 7-day sparkline.
 *
 * Neither is a tradable quote; the pages say so. Every fetch fails soft so a
 * blocked network just leaves the static table in place.
 */
const FX_SYMBOLS = ['EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'NZD'];
const FX_PAIRS = [
  { symbol: 'EUR/USD', quote: (r) => 1 / r.EUR, dp: 5 },
  { symbol: 'GBP/USD', quote: (r) => 1 / r.GBP, dp: 5 },
  { symbol: 'USD/JPY', quote: (r) => r.JPY, dp: 3 },
  { symbol: 'AUD/USD', quote: (r) => 1 / r.AUD, dp: 5 },
  { symbol: 'USD/CAD', quote: (r) => r.CAD, dp: 5 },
  { symbol: 'USD/CHF', quote: (r) => r.CHF, dp: 5 },
  { symbol: 'NZD/USD', quote: (r) => 1 / r.NZD, dp: 5 },
  { symbol: 'EUR/GBP', quote: (r) => r.GBP / r.EUR, dp: 5 },
];
const COINS = [
  { id: 'bitcoin', symbol: 'BTC/USD' },
  { id: 'ethereum', symbol: 'ETH/USD' },
  { id: 'solana', symbol: 'SOL/USD' },
  { id: 'ripple', symbol: 'XRP/USD' },
  { id: 'litecoin', symbol: 'LTC/USD' },
  { id: 'cardano', symbol: 'ADA/USD' },
];

const iso = (d) => d.toISOString().slice(0, 10);

async function getJson(url, signal) {
  const res = await fetch(url, { signal, headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

async function frankfurter(path, signal) {
  // The service moved hosts in 2024; try the current one, fall back to the old.
  try { return await getJson(`https://api.frankfurter.dev/v1/${path}`, signal); }
  catch { return getJson(`https://api.frankfurter.app/${path}`, signal); }
}

export async function fetchForex(signal) {
  const to = new Date();
  const from = new Date(to.getTime() - 32 * 86400000);
  const series = await frankfurter(`${iso(from)}..${iso(to)}?base=USD&symbols=${FX_SYMBOLS.join(',')}`, signal);
  const days = Object.keys(series.rates).sort();
  if (!days.length) throw new Error('no rates');
  const last = series.rates[days[days.length - 1]];
  const prev = series.rates[days[days.length - 2]] ?? last;
  return {
    source: 'ECB reference rates via Frankfurter',
    asOf: days[days.length - 1],
    rows: FX_PAIRS.map((p) => {
      const price = p.quote(last);
      const before = p.quote(prev);
      return {
        symbol: p.symbol,
        price: price.toFixed(p.dp),
        change: ((price - before) / before) * 100,
        spark: days.map((d) => p.quote(series.rates[d])),
      };
    }),
  };
}

export async function fetchCrypto(signal) {
  const ids = COINS.map((c) => c.id).join(',');
  const data = await getJson(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&sparkline=true&price_change_percentage=24h`, signal);
  const byId = Object.fromEntries(data.map((d) => [d.id, d]));
  return {
    source: 'CoinGecko spot',
    asOf: new Date().toISOString(),
    rows: COINS.filter((c) => byId[c.id]).map((c) => {
      const d = byId[c.id];
      const price = d.current_price;
      return {
        symbol: c.symbol,
        price: price >= 100 ? price.toLocaleString('en-US', { maximumFractionDigits: 0 }) : price.toLocaleString('en-US', { maximumFractionDigits: price >= 1 ? 2 : 4 }),
        change: d.price_change_percentage_24h ?? 0,
        spark: d.sparkline_in_7d?.price ?? [],
      };
    }),
  };
}

export const LIVE_FETCHERS = { forex: fetchForex, crypto: fetchCrypto };
