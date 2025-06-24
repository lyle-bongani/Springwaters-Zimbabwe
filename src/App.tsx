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
import WaterServices from './pages/Services';
import OurClients from './pages/OurClients';
import Contact from './pages/Contact';
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
          <Route path="/clients" element={<OurClients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div id="footer-section"><Footer /></div>
      </div>
    </Router>
  );
}

export default App;
