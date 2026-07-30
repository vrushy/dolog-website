import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import LocationCTA from './components/LocationCTA';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <LocationCTA />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
