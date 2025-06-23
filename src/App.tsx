import React from 'react';
<<<<<<< HEAD
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUsSection from './components/AboutUsSection';
import WaterAccessSection from './components/WaterAccessSection';
import WhyChooseSection from './components/WhyChooseSection';
import Footer from './components/Footer';
import NewsletterSection from './components/NewsletterSection';

function App() {
  return (
    <div className="min-h-screen bg-white rounded-2xl shadow-lg overflow-hidden font-sans">
      <Header />
      {/* Navbar */}
      {/* <nav className="flex items-center justify-between px-10 py-6 bg-white rounded-t-2xl">
        <div className="text-2xl font-bold tracking-wide text-gray-800">CONSTRUCTY</div>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-700">Home</a></li>
          <li><a href="#" className="hover:text-blue-700">About Us</a></li>
          <li><a href="#" className="hover:text-blue-700">Service</a></li>
          <li><a href="#" className="hover:text-blue-700">Blog</a></li>
          <li><a href="#" className="hover:text-blue-700">Contact Us</a></li>
        </ul>
      </nav> */}

      {/* Hero Section */}
      <div id="hero-section"><Hero /></div>
      {/* About Us Section */}
      <div id="about-section"><AboutUsSection /></div>
      {/* Water Access Section */}
      <div id="water-access-section"><WaterAccessSection /></div>
      {/* Why Choose Section */}
      <div id="why-choose-section"><WhyChooseSection /></div>
      {/* Newsletter Section */}
      <div id="newsletter-section"><NewsletterSection /></div>
      {/* Footer */}
      <div id="footer-section"><Footer /></div>
=======
import Header from './components/home/Header';
import Hero from './components/home/Hero';
import AboutSection from './components/home/AboutSection';
import ServicesSection from './components/home/ServicesSection';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import Footer from './components/home/Footer';
import './App.css';

function App() {
  return (
    <div className="App bg-white min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <Footer />
>>>>>>> 32dfd871929e7a1d32524a3f0292c25b7d48abb4
    </div>
  );
}

export default App;
