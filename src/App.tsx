import React from 'react';
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
    </div>
  );
}

export default App;
