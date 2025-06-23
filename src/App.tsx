import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUsSection from './components/AboutUsSection';
import WaterAccessSection from './components/WaterAccessSection';
import WhyChooseSection from './components/WhyChooseSection';
import Footer from './components/Footer';
import NewsletterSection from './components/NewsletterSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white rounded-2xl shadow-lg overflow-hidden font-sans">
      <Header />
      <div id="hero-section"><Hero /></div>
      <div id="about-section"><AboutUsSection /></div>
      <div id="water-access-section"><WaterAccessSection /></div>
      <div id="why-choose-section"><WhyChooseSection /></div>
      <div id="newsletter-section"><NewsletterSection /></div>
      <div id="footer-section"><Footer /></div>
    </div>
  );
}

export default App;
