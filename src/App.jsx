import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/home/HeroSection';
import WhyChooseUs from './components/home/WhyChooseUs';
import ServicesSection from './components/home/ServicesSection';
import Footer from './components/layout/Footer';
function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-dark selection:bg-primary/20 relative">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <WhyChooseUs />
        
        <div className="relative bg-white z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] rounded-t-[3rem]">
          <ServicesSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
