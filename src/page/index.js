import React from 'react'
import AppBar from '../components/header';
import HeroSection from '../components/herosection';
import TrustedFeatures from '../components/companies';
import FeaturesSection from '../components/features';
import SocialMarket from '../components/socialmarket';
import ServicesSection from '../components/services';
import CaseStudy from '../components/casestudy';
import DetailedSection from '../components/detail';

const HomePage = () => {
  return (
    <>

    <AppBar />
    <HeroSection />
    <TrustedFeatures />
    <FeaturesSection />
    <SocialMarket />
    <ServicesSection />
    <CaseStudy />
    <DetailedSection />
      
    </>
  )
}

export default HomePage;
