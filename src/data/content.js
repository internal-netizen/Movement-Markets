/**
 * Copy and figures for the inner pages. Anything numeric here is an
 * illustrative trading condition and is labelled as such where it renders.
 */

export const PLATFORMS = [
  {
    slug: 'xpert-trader',
    name: 'Xpert Trader',
    tag: 'Recommended',
    title: 'Xpert Trader, connected to raw liquidity',
    lead: 'Our trading terminal, connected to our execution stack. Multiple timeframes, native hedging, Depth of Market and unrestricted automated strategies on desktop, web and mobile.',
    highlights: ['No requotes', 'Hedging & netting', 'Algos & custom indicators', 'Depth of Market'],
    downloads: [
      { os: 'Windows', note: 'PC & laptop', href: '/login' },
      { os: 'macOS', note: 'Apple silicon & Intel', href: '/login' },
      { os: 'Web', note: 'No download needed', href: '/platforms/webtrader' },
      { os: 'iOS', note: 'iPhone & iPad', href: '/login' },
      { os: 'Android', note: 'Phone & tablet', href: '/login' },
    ],
    features: [
      ['Chart timeframes', 'Multiple, from tick to monthly'],
      ['Built-in indicators', 'Full standard library'],
      ['Graphical objects', 'Full drawing toolset'],
      ['Pending order types', 'Limit, stop and stop-limit'],
      ['Depth of Market', 'Yes'],
      ['Economic calendar', 'Built in'],
      ['Automated trading', 'Algos & custom indicators'],
      ['Position accounting', 'Hedging & netting'],
      ['Markets', 'FX, indices, metals, energy, shares, crypto'],
    ],
    faq: [
      { q: 'Is Xpert Trader free?', a: 'Yes. Download it for any device from your client portal and log in with your Movement Markets account. Demo accounts are free too.' },
      { q: 'Can I bring my own automated strategies?', a: 'Yes. Xpert Trader runs custom strategies and indicators, and the FIX API is open if you would rather run your own execution stack. Our desk will help you port an existing setup.' },
      { q: 'Does the mobile app support all order types?', a: 'Market, limit, stop and stop-limit orders, plus full position management. Charting carries the standard indicator and drawing toolset.' },
      { q: 'Are there requotes?', a: 'No. Orders are filled at the best available price. During fast markets you may see slippage, which can be positive or negative, but never a requote.' },
    ],
  },
  {
    slug: 'webtrader',
    name: 'WebTrader',
    tag: 'New',
    title: 'Trade from any browser. Nothing to install.',
    lead: 'A full trading terminal that opens in a tab. The same account, the same prices and the same execution as Xpert Trader, on whatever machine is in front of you.',
    highlights: ['Zero install', 'Syncs with XT', 'One-click trading', 'Works on any OS'],
    downloads: [
      { os: 'Launch WebTrader', note: 'Opens in your browser', href: '/login' },
    ],
    features: [
      ['Install required', 'None'],
      ['Chart types', 'Candles, bars, line, Heikin Ashi'],
      ['Indicators', 'Full standard library'],
      ['Drawing tools', 'Full drawing toolset'],
      ['One-click trading', 'Yes'],
      ['Account sync', 'Shared with XT in real time'],
      ['Two-factor login', 'Yes'],
      ['Browsers', 'Chrome, Safari, Firefox, Edge'],
    ],
    faq: [
      { q: 'Do I need a separate account for WebTrader?', a: 'No. WebTrader and Xpert Trader share the same account and positions. Open a trade in one and manage it in the other.' },
      { q: 'Is it safe to trade from a shared computer?', a: 'Sessions end when you close the tab, and two-factor authentication is enforced on every login. We still recommend not saving credentials on machines you do not control.' },
      { q: 'Can I run automated strategies?', a: 'Not in WebTrader. Automated strategies need the Xpert Trader desktop terminal, a VPS or the FIX API.' },
    ],
  },
];

export const PLATFORM_BY_SLUG = Object.fromEntries(PLATFORMS.map((p) => [p.slug, p]));

export const ACCOUNTS = [
  {
    id: 'standard',
    name: 'Standard',
    strap: 'Everything in the spread. No commission.',
    deposit: '$50',
    featured: false,
    rows: [
      ['FX majors', 'From 1.0 pip, all-inclusive'],
      ['Gold', 'From $0.25'],
      ['Commission', 'None'],
      ['Maximum leverage', '1:500'],
      ['Minimum lot', '0.01'],
      ['Maximum lot', '100'],
      ['Swap-free', 'Available'],
      ['Margin call / stop out', '50% / 30%'],
      ['Minimum withdrawal', '$20'],
      ['Platforms', 'XT · WebTrader'],
    ],
  },
  {
    id: 'raw',
    name: 'Raw',
    strap: 'Spreads from 0.0 plus a fixed commission.',
    deposit: '$1,000',
    featured: true,
    rows: [
      ['FX majors', 'From 0.0 pips'],
      ['Gold', 'From $0.10'],
      ['Commission', 'From $3 per lot per side'],
      ['Maximum leverage', '1:500'],
      ['Minimum lot', '0.01'],
      ['Maximum lot', '200'],
      ['Swap-free', 'Available'],
      ['Margin call / stop out', '50% / 30%'],
      ['Minimum withdrawal', '$20'],
      ['Platforms', 'XT · WebTrader'],
    ],
  },
  {
    id: 'institutional',
    name: 'Institutional',
    strap: 'Prime access and terms negotiated per desk.',
    deposit: '$20,000',
    featured: false,
    rows: [
      ['FX majors', 'Raw interbank'],
      ['Gold', 'Raw interbank'],
      ['Commission', 'From $5 per lot per side'],
      ['Maximum leverage', '1:200'],
      ['Minimum lot', '0.01'],
      ['Maximum lot', 'By agreement'],
      ['Swap-free', 'Available'],
      ['Margin call / stop out', 'By agreement'],
      ['Minimum withdrawal', '$20'],
      ['Platforms', 'XT · WebTrader · FIX'],
    ],
  },
];

export const ACCOUNT_FAQ = [
  { q: 'Which account should I start with?', a: 'Compare the table above — it lists the minimum deposit, spread, commission and leverage for each account side by side. If you are unsure, the desk will talk it through with you.' },
  { q: 'Can I switch later?', a: 'Yes. Ask support or request it from the client portal. Open positions are unaffected; new trades take the new account’s pricing.' },
  { q: 'Is there a demo account?', a: 'Every client gets a free demo that mirrors live pricing on every account type. It never expires while you keep using it.' },
  { q: 'How do deposits and withdrawals work?', a: 'Cards, bank transfer, local payment methods and crypto. Deposits are credited immediately in most cases and we do not charge withdrawal fees. Withdrawals go back to the method the funds arrived from.' },
  { q: 'What is negative balance protection?', a: 'Where it applies, it means a gap cannot leave you owing more than your balance. Negative balance protection is available on eligible retail accounts — see the Client Agreement.' },
];

export const HELP = [
  {
    title: 'Account & verification',
    items: [
      { q: 'How long does verification take?', a: 'Most accounts are verified within an hour of uploading a photo ID and a proof of address. Complex cases can take up to one business day.' },
      { q: 'What documents do I need?', a: 'A government-issued photo ID (passport, national ID or driving licence) and a proof of address dated within the last three months, such as a utility bill or bank statement.' },
      { q: 'Can I hold more than one trading account?', a: 'Yes. You can open several accounts under one profile, for example a Standard and a Raw, or accounts in different base currencies.' },
    ],
  },
  {
    title: 'Deposits & withdrawals',
    items: [
      { q: 'What is the minimum deposit?', a: '$50 on a Standard account, $1,000 on a Raw account and $20,000 on an Institutional account. There is no maximum.' },
      { q: 'How fast are withdrawals?', a: 'Requests are processed within a few hours during business days. Card and e-wallet withdrawals usually land the same day; bank transfers can take one to three days.' },
      { q: 'Do you charge withdrawal fees?', a: 'No. Your bank or payment provider may apply its own charges. The minimum withdrawal is $20.' },
    ],
  },
  {
    title: 'Trading conditions',
    items: [
      { q: 'What are your trading hours?', a: 'Forex and metals trade 24/5, crypto 24/7, indices and shares follow their exchange sessions. The market hours tool shows everything in your local time.' },
      { q: 'Do you allow hedging, scalping and EAs?', a: 'All three are allowed without restriction.' },
      { q: 'How is margin calculated?', a: 'Lots multiplied by contract size multiplied by the market price, divided by the leverage. The margin calculator does this for any instrument.' },
    ],
  },
  {
    title: 'Leverage & risk',
    items: [
      { q: 'What leverage can I use?', a: 'Up to 1:500 on forex majors, lower on other asset classes. You can lower your own maximum from the client portal at any time.' },
      { q: 'When does a margin call happen?', a: 'When your equity falls to 50% of the margin used. Positions are closed automatically at 30% to protect the account.' },
      { q: 'Is there negative balance protection?', a: 'Negative balance protection is available on eligible retail accounts — see the Client Agreement.' },
    ],
  },
  {
    title: 'Platforms',
    items: [
      { q: 'Which platforms do you offer?', a: 'Xpert Trader on Windows, macOS, iOS and Android, and WebTrader in any modern browser.' },
    ],
  },
  {
    title: 'Partners',
    items: [
      { q: 'How do introducing brokers get paid?', a: 'A fixed rebate per lot traded by your referred clients, paid weekly to your partner wallet. Withdraw it or trade with it.' },
      { q: 'Is there a cost to join?', a: 'No. The programme is free and you can apply from the partners page in a couple of minutes.' },
    ],
  },
  {
    title: 'Security & compliance',
    items: [
      { q: 'Are client funds segregated?', a: 'Yes. Client money is held in segregated accounts with tier-one banks, separate from company funds.' },
      { q: 'How is my account protected?', a: 'Two-factor authentication, device recognition and encrypted sessions on every platform. We will never ask for your password.' },
      { q: 'Where can I read your policies?', a: 'The legal hub lists every agreement, policy and disclosure, including the client agreement and the risk disclosure.' },
    ],
  },
];

export const PARTNER_TIERS = [
  { name: 'Starter', rebate: 4, clients: 'Entry level', volume: '—' },
  { name: 'Growth', rebate: 6, clients: '10+ active clients', volume: '250 lots / month' },
  { name: 'Pro', rebate: 8, clients: '25+ active clients', volume: '1,000 lots / month' },
  { name: 'Elite', rebate: 10, clients: '50+ active clients', volume: '5,000 lots / month' },
];

export const PARTNER_PERKS = [
  { title: 'Weekly payouts', text: 'Rebates land in your partner wallet every week, with a live statement of every lot that earned them.' },
  { title: 'Lifetime attribution', text: 'A client you refer is yours for as long as they trade. No expiry, no clawbacks on activity.' },
  { title: 'Real-time dashboard', text: 'Registrations, deposits, volume and earnings in one view, with tracking links and sub-IB management.' },
  { title: 'Marketing kit', text: 'Banners, landing pages and localised creatives, refreshed monthly, in your partner portal.' },
  { title: 'Dedicated manager', text: 'From Growth tier up, a partnership manager who knows your business and can approve custom terms.' },
  { title: 'Multi-level structure', text: 'Build a network of sub-partners and earn an override on their volume as well as your own.' },
];

export const ABOUT_VALUES = [
  { title: 'Raw over retail', text: 'We built the business on institutional pricing rather than a retail markup. Raw accounts show the spread and the commission separately, so you can see what each costs.' },
  { title: 'Speed is a feature', text: 'Execution, funding, verification and support are all measured in minutes or milliseconds. Slowness is treated as a defect.' },
  { title: 'Nothing hidden', text: 'Commissions, swaps and every policy are published. If a cost is not on the page, it does not exist.' },
  { title: 'Humans on the desk', text: 'Support is staffed by people who trade, around the clock, and who can actually change something on your account.' },
];

export const ABOUT_NUMBERS = [
  { value: '300+', label: 'Instruments across six asset classes' },
  { value: '12 ms', label: 'Median order execution' },
  { value: '24/7', label: 'Multilingual support' },
  { value: '0', label: 'Deposit or withdrawal fees' },
];

export const TOOLS = [
  { to: '/tools/economic-calendar', name: 'Economic calendar', text: 'Every scheduled release that moves currencies, with consensus, previous and actual figures.', tag: 'Live' },
  { to: '/tools/market-hours', name: 'Market hours', text: 'The four FX sessions in your local time, which are open right now, and the year’s market holidays.', tag: 'Live' },
  { to: '/tools/calculators#pip', name: 'Pip value calculator', text: 'What one pip is worth for any pair, lot size and account currency.', tag: 'Calculator' },
  { to: '/tools/calculators#position', name: 'Position size calculator', text: 'Size a trade from the amount you are willing to risk and your stop distance.', tag: 'Calculator' },
  { to: '/tools/calculators#margin', name: 'Margin calculator', text: 'The margin a position will lock at a given leverage.', tag: 'Calculator' },
  { to: '/tools/calculators#pnl', name: 'Profit & loss calculator', text: 'Profit or loss between an entry and an exit price, in your account currency.', tag: 'Calculator' },
  { to: '/tools/calculators#pivot', name: 'Pivot point calculator', text: 'Classic, Fibonacci and Camarilla pivots from the previous session’s high, low and close.', tag: 'Calculator' },
  { to: '/insights', name: 'Insights', text: 'Plain-English guides on pips, leverage, sessions and risk.', tag: 'Learn' },
];

export const ARTICLES = [
  {
    slug: 'what-is-a-pip',
    title: 'What is a pip, and what is it worth?',
    category: 'Basics',
    minutes: 4,
    summary: 'The smallest standard price move in forex, and why its cash value changes with the pair and the lot size.',
    body: [
      'A pip is the standard unit of movement in a currency pair. For most pairs it is the fourth decimal place, so a move from 1.1000 to 1.1001 in EUR/USD is one pip. For pairs quoted against the Japanese yen it is the second decimal place: 147.28 to 147.29 is one pip.',
      'Brokers now quote a fifth decimal, sometimes called a pipette or point, which is a tenth of a pip. When you see a spread of 0.3 pips, that is three points.',
      'What a pip is worth in money depends on the size of the position and the currency the pair is quoted in. For a standard lot of 100,000 units, one pip on EUR/USD is worth 10 US dollars. On a mini lot (10,000 units) it is 1 dollar, and on a micro lot (1,000 units) it is 10 cents.',
      'If the quote currency is not your account currency, the value is converted at the current rate. That is why one pip on USD/JPY is worth a slightly different dollar amount every day. Our pip value calculator does the conversion for you.',
      'Knowing pip value is the foundation of position sizing. Once you know what one pip costs, you can decide how many pips of stop you can afford and size the trade to match.',
    ],
  },
  {
    slug: 'leverage-and-margin-explained',
    title: 'Leverage and margin, explained without the hype',
    category: 'Risk',
    minutes: 5,
    summary: 'How leverage lets you control a large position with a small deposit, and why margin, not leverage, is the number to watch.',
    body: [
      'Leverage is the ratio between the size of a position and the money you have to put up to open it. At 1:100, a 100,000-unit position needs 1,000 units of margin. At 1:500 it needs 200.',
      'Margin is that deposit. It is not a fee; it is set aside while the position is open and released when it closes. Your free margin is what remains to open new positions or absorb losses.',
      'Higher leverage does not change how much a position can win or lose. A one-pip move on a standard lot of EUR/USD is 10 dollars whether your leverage is 1:30 or 1:500. What changes is how much of your account is tied up and how close a loss brings you to a margin call.',
      'A margin call happens when your equity falls to a set percentage of the margin used, 50% on our accounts. At the stop-out level, 30%, positions are closed automatically starting with the largest loser.',
      'The practical rule: pick your position size from the amount you are willing to lose and your stop distance, then check that the margin required leaves you plenty of room. Leverage is a tool for capital efficiency, not a reason to trade bigger.',
    ],
  },
  {
    slug: 'standard-vs-raw-account',
    title: 'Standard or Raw: which account is cheaper for you?',
    category: 'Accounts',
    minutes: 4,
    summary: 'All-in spreads versus raw spread plus commission. The answer depends on how often you trade and what you trade.',
    body: [
      'A Standard account has one cost: the spread. On EUR/USD it starts around 1.0 pip and there is no commission. A Raw account shows the market spread, which can be zero, and charges a fixed commission of 3 dollars per lot on each side, 6 dollars round trip.',
      'Six dollars per round-trip lot is 0.6 pips on a pair where one pip is worth 10 dollars. So a Raw trade on EUR/USD at a 0.1 pip spread costs about 0.7 pips all in, against 1.0 on Standard.',
      'The gap widens on pairs with naturally wider spreads and narrows on exotics, where the raw spread itself is large. It also matters what you trade: commission is the same for gold and for an exotic cross, but the spread saving is very different.',
      'If you place a few trades a week and hold them for hours or days, the difference is small and Standard is simpler. If you scalp, trade the news or run an EA that fires dozens of times a day, Raw usually saves real money.',
      'You can hold both. Many clients keep a Standard account for discretionary swing trades and a Raw account for their systematic strategies.',
    ],
  },
  {
    slug: 'forex-sessions-and-volatility',
    title: 'How the four forex sessions shape volatility',
    category: 'Markets',
    minutes: 5,
    summary: 'Sydney, Tokyo, London and New York each have a character. Knowing which is open tells you what kind of market to expect.',
    body: [
      'Forex trades around the clock from Monday morning in Sydney to Friday evening in New York, but it is not one continuous market. Liquidity and volatility rise and fall with the four regional sessions.',
      'The Sydney and Tokyo sessions are quieter for the majors, with the yen, Australian and New Zealand dollars most active. Ranges are narrower and spreads on exotic pairs can be wider.',
      'London is the largest session by volume. The open at 08:00 London time frequently sets the day’s direction for European currencies, and the London fix at 16:00 brings a burst of flow in metals as well as FX.',
      'New York overlaps with London for roughly four hours in the afternoon, European time. This overlap is the most liquid window of the day and the one where major US data releases land.',
      'The practical use: match your strategy to the session. Breakout approaches suit the London open; range strategies suit the Asian hours; news traders live in the overlap. Our market hours tool shows every session in your local time and which are open right now.',
    ],
  },
  {
    slug: 'reading-the-economic-calendar',
    title: 'Reading an economic calendar like a trader',
    category: 'Markets',
    minutes: 4,
    summary: 'Consensus, previous and actual, and why the surprise matters more than the number.',
    body: [
      'An economic calendar lists scheduled data releases and central bank events with the time, the currency affected, the previous reading and the market’s consensus forecast. When the figure is published, the actual value appears beside them.',
      'Markets price the consensus in advance. What moves price at the release is the gap between actual and consensus, the surprise. A strong number that matches expectations can be a non-event; a modest miss can move a pair fifty pips.',
      'Not every release matters equally. Calendars grade events by expected impact. Interest rate decisions, inflation, employment reports and GDP sit at the top. Minor surveys rarely move the majors on their own.',
      'Spreads widen and liquidity thins in the seconds around a high-impact release. Pending orders can fill with slippage. If you are not trading the event, many traders simply stand aside for a few minutes on either side.',
      'Use the calendar defensively as much as offensively: check what is scheduled before you open a position, so a stop is not sitting a few pips from a number that will move the market.',
    ],
  },
  {
    slug: 'position-sizing-basics',
    title: 'Position sizing: the risk decision that comes first',
    category: 'Risk',
    minutes: 5,
    summary: 'Decide what you are willing to lose, measure the stop, and let the position size fall out of the arithmetic.',
    body: [
      'Most trading losses that end accounts are not bad ideas; they are good ideas sized badly. Position sizing is the habit of choosing how much to trade from how much you can afford to lose, rather than from how confident you feel.',
      'Start with a risk per trade, commonly one or two percent of the account. On a 5,000 dollar account at one percent, the maximum loss on any single trade is 50 dollars.',
      'Next, measure the stop. If your analysis says the trade is wrong once price moves 25 pips against you, the stop is 25 pips. Do not move the stop to fit a position size; adjust the size to fit the stop.',
      'Divide the risk by the stop distance in pip value terms. Fifty dollars divided by 25 pips is 2 dollars per pip, which on EUR/USD is 0.2 lots. That is the trade size, regardless of the leverage available.',
      'Sizing this way makes every trade the same risk, so a run of losses is survivable and a run of wins compounds cleanly. The position size calculator does the arithmetic for any pair and account currency.',
    ],
  },
];

export const ARTICLE_BY_SLUG = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]));
