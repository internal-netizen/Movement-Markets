import CtaPanel from '../components/CtaPanel.jsx';
import Funding from '../components/Funding.jsx';
import Hero from '../components/Hero.jsx';
import MarketsBento from '../components/MarketsBento.jsx';
import MotionExperience from '../components/MotionExperience.jsx';
import MovementJourney from '../components/MovementJourney.jsx';
import OpenAccount from '../components/OpenAccount.jsx';
import Platforms from '../components/Platforms.jsx';
import PricingPreview from '../components/PricingPreview.jsx';
import ReportSuite from '../components/ReportSuite.jsx';
import ScrollExperience from '../components/ScrollExperience.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import SiteHeader from '../components/SiteHeader.jsx';

export default function Home() {
  return (
    <main id="top">
      <ScrollExperience />
      <MotionExperience />
      <div className="top-shell">
        <SiteHeader />
        <Hero />
      </div>
      <MarketsBento />
      <MovementJourney />
      <ReportSuite />
      <PricingPreview />
      <Platforms />
      <Funding />
      <OpenAccount />
      <CtaPanel />
      <SiteFooter />
    </main>
  );
}
