import { useContext, useEffect, useRef } from 'react';
import PageShell, { ThemeContext } from '../../components/page/PageShell.jsx';
import { PageHero, SectionHead, Cards, Notice } from '../../components/page/Blocks.jsx';

/**
 * TradingView's economic-events widget, re-embedded when the theme changes.
 * The widget script reads its options from its own text content, so it has
 * to be created by hand rather than rendered as JSX.
 */
function CalendarEmbed() {
  const theme = useContext(ThemeContext);
  const ref = useRef(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return undefined;
    host.innerHTML = '';
    const inner = document.createElement('div');
    inner.className = 'tradingview-widget-container__widget';
    host.appendChild(inner);
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.async = true;
    script.text = JSON.stringify({
      colorTheme: theme === 'dark' ? 'dark' : 'light',
      isTransparent: true,
      width: '100%',
      height: 640,
      locale: 'en',
      importanceFilter: '-1,0,1',
      countryFilter: 'us,eu,gb,jp,au,ca,ch,nz,cn',
    });
    host.appendChild(script);
    return () => { host.innerHTML = ''; };
  }, [theme]);

  return <div className="pg-embed tradingview-widget-container" ref={ref} />;
}

export default function EconomicCalendar() {
  return (
    <PageShell title="Economic calendar">
      <PageHero
        eyebrow="Tools · Economic calendar"
        title="What is scheduled, and how much it matters."
        lead="Every data release and central bank event for the major currencies, with previous, consensus and actual figures as they print. Times are shown in your local time zone."
        compact
      />
      <section className="pg-section is-tight">
        <div className="pg-wrap">
          <CalendarEmbed />
          <Notice>Calendar data is provided by TradingView. Impact ratings are the provider’s own. High-impact releases widen spreads and thin liquidity for a few minutes around the print.</Notice>
        </div>
      </section>
      <section className="pg-section is-alt">
        <div className="pg-wrap">
          <SectionHead eyebrow="How to read it" title="Consensus, actual, surprise" />
          <Cards cols={3} items={[
            { title: 'The market prices the consensus', text: 'Forecasts are already reflected in price by the time a release arrives. A number that matches expectations is often a non-event.' },
            { title: 'The surprise moves price', text: 'The gap between actual and consensus is what matters. Bigger surprises on higher-impact events move currencies further.' },
            { title: 'Plan around it', text: 'Check the calendar before opening a position so a stop is not sitting a few pips from a number that will move the market.', to: '/insights/reading-the-economic-calendar', linkLabel: 'Read the guide' },
          ]} />
        </div>
      </section>
    </PageShell>
  );
}
