import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsletterSection from './components/NewsletterSection';
import Hero from './components/Hero';
import AboutUsSection from './components/AboutUsSection';
import WaterAccessSection from './components/WaterAccessSection';
import WhyChooseSection from './components/WhyChooseSection';
import About from './pages/About';
import WaterServices from './components/services/WaterServices';
import OurClients from './pages/OurClients';
import Contact from './pages/Contact';
import BoreholeServices from './components/services/BoreholeServices';
import IrrigationServices from './components/services/IrrigationServices';
import BulkWaterDelivery from './components/services/BulkWaterDelivery';
import BoreholeSiting from './components/services/BoreholeSiting';
import BoreholeDrilling from './components/services/BoreholeDrilling';
import BoreholeCasing from './components/services/BoreholeCasing';
import WaterQualityTesting from './components/services/WaterQualityTesting';
import WaterPumpInstallation from './components/services/WaterPumpInstallation';
import WaterTankInstallation from './components/services/WaterTankInstallation';
import BoreholeFishing from './components/services/BoreholeFishing';
import BoreholeFlushing from './components/services/BoreholeFlushing';
import BoreholeRehabilitation from './components/services/BoreholeRehabilitation';
import BoreholeDeepening from './components/services/BoreholeDeepening';
import PrivacyPolicy from './pages/PrivacyPolicy';
import OurProcess from './pages/OurProcess';
import SiteMap from './pages/SiteMap';
import './App.css';
import { useLocation } from 'react-router-dom';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ScrollToTop from './components/ScrollToTop';

// ServicePageWrapper: wraps service pages to inject Header with white logo logic
const ServicePageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Header forceWhiteLogo={true} />
    {children}
  </>;
};

// SiteMapWrapper: wraps SiteMap page to inject Header with black links logic
const SiteMapWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Header forceBlackLinks={true} />
    {children}
  </>;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white shadow-lg overflow-hidden font-sans">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <AboutUsSection />
              <WaterAccessSection />
              <WhyChooseSection />
              <NewsletterSection />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<OurProcess />} />
          <Route path="/water-services" element={<ServicePageWrapper><WaterServices /></ServicePageWrapper>} />
          <Route path="/water-services/borehole" element={<ServicePageWrapper><BoreholeServices /></ServicePageWrapper>} />
          <Route path="/water-services/irrigation" element={<ServicePageWrapper><IrrigationServices /></ServicePageWrapper>} />
          <Route path="/water-services/bulk-water-delivery" element={<ServicePageWrapper><BulkWaterDelivery /></ServicePageWrapper>} />
          <Route path="/water-services/borehole-siting" element={<ServicePageWrapper><BoreholeSiting /></ServicePageWrapper>} />
          <Route path="/water-services/borehole-drilling" element={<ServicePageWrapper><BoreholeDrilling /></ServicePageWrapper>} />
          <Route path="/water-services/borehole-casing" element={<ServicePageWrapper><BoreholeCasing /></ServicePageWrapper>} />
          <Route path="/water-services/water-quality-testing" element={<ServicePageWrapper><WaterQualityTesting /></ServicePageWrapper>} />
          <Route path="/water-services/water-pump-installation" element={<ServicePageWrapper><WaterPumpInstallation /></ServicePageWrapper>} />
          <Route path="/water-services/water-tank-installation" element={<ServicePageWrapper><WaterTankInstallation /></ServicePageWrapper>} />
          <Route path="/water-services/borehole-fishing" element={<ServicePageWrapper><BoreholeFishing /></ServicePageWrapper>} />
          <Route path="/water-services/borehole-flushing" element={<ServicePageWrapper><BoreholeFlushing /></ServicePageWrapper>} />
          <Route path="/water-services/borehole-rehabilitation" element={<ServicePageWrapper><BoreholeRehabilitation /></ServicePageWrapper>} />
          <Route path="/water-services/borehole-deepening" element={<ServicePageWrapper><BoreholeDeepening /></ServicePageWrapper>} />
          <Route path="/clients" element={<OurClients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/site-map" element={<SiteMapWrapper><SiteMap /></SiteMapWrapper>} />
        </Routes>
        <WhatsAppFloatingButton />
        <div id="footer-section"><Footer /></div>
      </div>
    </Router>
  );
}

export default App;
