import React from 'react'
import AppBar from '../components/header';
import HeroSection from '../components/herosection';
import TrustedFeatures from '../components/companies';
import FeaturesSection from '../components/features';
import SocialMarket from '../components/socialmarket';
import ServicesSection from '../components/services';

const HomePage = () => {
  return (
    <>

    <AppBar />
    <HeroSection />
    <TrustedFeatures />
    <FeaturesSection />
    <SocialMarket />
    <ServicesSection />
      
    </>
  )
}

export default HomePage;
