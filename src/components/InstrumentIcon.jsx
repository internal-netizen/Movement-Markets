const CURRENCIES = { EUR: ['€', '#193c87'], USD: ['$', '#24644d'], GBP: ['£', '#663e83'], JPY: ['¥', '#ab374a'], AUD: ['A$', '#234873'] };

function Currency({ code, x }) {
  const [symbol, color] = CURRENCIES[code];
  return <g transform={`translate(${x} 0)`}><circle cx="14" cy="23" r="13" fill={color} stroke="var(--instrument-ring, #fff)" strokeWidth="2" /><text x={x === 0 ? 12 : 14} y="24" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="Arial, sans-serif" fontWeight="600" fontSize={symbol.length > 1 ? 11 : 17}>{symbol}</text></g>;
}

export default function InstrumentIcon({ symbol }) {
  const [base, quote] = symbol.split('/');
  return <svg className="instrument-art" width="48" height="46" viewBox="0 0 48 46" fill="none" aria-hidden="true" focusable="false">
    {CURRENCIES[base] ? <><Currency code={base} x={0}/><Currency code={quote} x={20}/></> : base === 'BTC' ? <><circle cx="24" cy="23" r="18" fill="#f7931a" /><text x="24" y="24" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="28" fontFamily="Arial, sans-serif" fontWeight="700">₿</text></> : base === 'XAU' || base === 'XAG' ? <>
      <path d="M8 29 15 14h20l7 15-7 7H15Z" fill={base === 'XAU' ? '#a97628' : '#708393'} />
      <path d="m8 29 7-15h20l7 15Z" fill={base === 'XAU' ? '#eac56e' : '#dbe4ed'} />
      <path d="m15 14 4 4h12l4-4M8 29h34" stroke={base === 'XAU' ? '#fff1bb' : '#fff'} strokeWidth="1.2" />
      <text x="25" y="27" textAnchor="middle" fill={base === 'XAU' ? '#684312' : '#344654'} fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">{base === 'XAU' ? 'Au' : 'Ag'}</text>
    </> : <><rect x="5" y="5" width="38" height="36" rx="11" fill={base === 'US30' ? '#234873' : '#17677b'}/><path d="M13 16h5m3 0h5m3 0h5" stroke="#fff" opacity=".5" strokeWidth="2"/><text x="24" y="31" textAnchor="middle" fill="white" fontSize={base === 'US30' ? 15 : 11} fontWeight="700" fontFamily="Arial, sans-serif">{base === 'US30' ? '30' : 'N100'}</text></>}
  </svg>;
}
