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
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white rounded-2xl shadow-lg overflow-hidden font-sans">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero-section"><Hero /></div>
              <div id="about-section"><AboutUsSection /></div>
              <div id="water-access-section"><WaterAccessSection /></div>
              <div id="why-choose-section"><WhyChooseSection /></div>
              <div id="newsletter-section"><NewsletterSection /></div>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/water-services" element={<WaterServices />} />
          <Route path="/water-services/borehole" element={<BoreholeServices />} />
          <Route path="/water-services/irrigation" element={<IrrigationServices />} />
          <Route path="/water-services/bulk-water-delivery" element={<BulkWaterDelivery />} />
          <Route path="/water-services/borehole-siting" element={<BoreholeSiting />} />
          <Route path="/water-services/borehole-drilling" element={<BoreholeDrilling />} />
          <Route path="/water-services/borehole-casing" element={<BoreholeCasing />} />
          <Route path="/water-services/water-quality-testing" element={<WaterQualityTesting />} />
          <Route path="/water-services/water-pump-installation" element={<WaterPumpInstallation />} />
          <Route path="/water-services/water-tank-installation" element={<WaterTankInstallation />} />
          <Route path="/water-services/borehole-fishing" element={<BoreholeFishing />} />
          <Route path="/water-services/borehole-flushing" element={<BoreholeFlushing />} />
          <Route path="/water-services/borehole-rehabilitation" element={<BoreholeRehabilitation />} />
          <Route path="/water-services/borehole-deepening" element={<BoreholeDeepening />} />
          <Route path="/clients" element={<OurClients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div id="footer-section"><Footer /></div>
      </div>
    </Router>
  );
}

export default App;
