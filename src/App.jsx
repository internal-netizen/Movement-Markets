import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomeGrid from './pages/HomeGrid.jsx';
import HomeMix from './pages/HomeMix.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
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

const TITLES = {
  '/': 'Movement Markets — Trade the Move',
  '/login': 'Login | Movement Markets',
  '/v1': 'Movement Markets — Previous home',
  '/v3': 'Movement Markets — Home (mixed bands)',
  '/legal': 'Legal Documents & Policies | Movement Markets',
  '/terms': 'Website Terms of Use | Movement Markets',
  '/privacy': 'Privacy Policy | Movement Markets',
  '/cookies': 'Cookie Policy | Movement Markets',
  '/cookie-policy': 'Cookie Policy | Movement Markets',
  '/risk-disclosure': 'General Risk Disclosure | Movement Markets',
  '/aml-kyc': 'AML & KYC Policy | Movement Markets',
  '/client-agreement': 'Client Agreement | Movement Markets',
  '/affiliate-agreement': 'Affiliate Agreement | Movement Markets',
  '/affiliates': 'Affiliate Agreement | Movement Markets',
  '/general-business-terms': 'General Business Terms | Movement Markets',
};

export default function App() {
  const { pathname } = useLocation();

  // Inner pages set their own titles through <PageShell>; only the routes
  // listed above are titled here.
  useEffect(() => {
    if (TITLES[pathname]) document.title = TITLES[pathname];
  }, [pathname]);

  return (
    <>
      <IntroLoader />
      <Routes>
        <Route path="/" element={<HomeGrid />} />
        <Route path="/login" element={<Login />} />
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
        {/* The previous home, kept intact and reachable. */}
        <Route path="/v1" element={<Home />} />
        {/* Retained so existing links to the design cuts keep working. */}
        <Route path="/v2" element={<HomeGrid />} />
        <Route path="/v3" element={<HomeMix />} />
        <Route path="*" element={<HomeGrid />} />
      </Routes>

      {/* Global Cookiebot Cookie Consent CMP Banner & Modal */}
      <CookieConsent />
    </>
  );
}
