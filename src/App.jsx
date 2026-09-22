import { Navigate, Route, Routes } from 'react-router-dom';
import HomeGrid from './pages/HomeGrid.jsx';
import NotFound from './pages/NotFound.jsx';
import Legal from './pages/Legal.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import IntroLoader from './components/IntroLoader.jsx';
import MarketsHub, { MarketPage } from './pages/Markets.jsx';
import PlatformsHub, { PlatformPage } from './pages/Platforms.jsx';
import Accounts from './pages/Accounts.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Partners from './pages/Partners.jsx';
import Help from './pages/Help.jsx';
import Insights, { ArticlePage } from './pages/Insights.jsx';
import Tools from './pages/Tools.jsx';
import EconomicCalendar from './pages/tools/EconomicCalendar.jsx';
import MarketHours from './pages/tools/MarketHours.jsx';
import Calculators from './pages/tools/Calculators.jsx';
import { CLIENT_LOGIN_URL } from './config/portalLinks.js';
import SeoHead from './seo/SeoHead.jsx';

function ExternalRedirect({ to }) {
  if (typeof window !== 'undefined') window.location.replace(to);
  return null;
}

export default function App() {
  return (
    <>
      <SeoHead />
      <IntroLoader />
      <Routes>
        <Route path="/" element={<HomeGrid />} />
        <Route path="/login" element={<ExternalRedirect to={CLIENT_LOGIN_URL} />} />
        {/* Trading */}
        <Route path="/markets" element={<MarketsHub />} />
        <Route path="/markets/:slug" element={<MarketPage />} />
        <Route path="/platforms" element={<PlatformsHub />} />
        <Route path="/platforms/:slug" element={<PlatformPage />} />
        <Route path="/accounts" element={<Accounts />} />
        {/* Tools */}
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/economic-calendar" element={<EconomicCalendar />} />
        <Route path="/tools/market-hours" element={<MarketHours />} />
        <Route path="/tools/calculators" element={<Calculators />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<ArticlePage />} />
        <Route path="/help" element={<Help />} />
        {/* Company */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        {/* Legal Hub & Policy Document Routes */}
        <Route path="/legal" element={<Legal />} />
        <Route path="/legal/:docId" element={<Legal />} />
        <Route path="/terms" element={<Legal defaultDoc="terms-of-use" />} />
        <Route path="/privacy" element={<Legal defaultDoc="privacy-policy" />} />
        <Route path="/cookies" element={<Legal defaultDoc="cookie-policy" />} />
        <Route path="/cookie-policy" element={<Legal defaultDoc="cookie-policy" />} />
        <Route path="/risk-disclosure" element={<Legal defaultDoc="risk-disclosure" />} />
        <Route path="/aml-kyc" element={<Legal defaultDoc="aml-kyc" />} />
        <Route path="/client-agreement" element={<Legal defaultDoc="client-agreement" />} />
        <Route path="/affiliate-agreement" element={<Legal defaultDoc="affiliate-agreement" />} />
        <Route path="/affiliates" element={<Legal defaultDoc="affiliate-agreement" />} />
        <Route path="/general-business-terms" element={<Legal defaultDoc="general-business-terms" />} />
        {/* /v1 and /v3 were earlier designs that contradicted the live site;
            /v2 was a duplicate of /. Unknown URLs now 404 instead of silently
            rendering the homepage. */}
        <Route path="/v2" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Global Cookiebot Cookie Consent CMP Banner & Modal */}
      <CookieConsent />
    </>
  );
}
