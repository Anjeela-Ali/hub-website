import React from 'react'
import AppBar from '../components/header';
import HeroSection from '../components/herosection';
import TrustedFeatures from '../components/companies';
import FeaturesSection from '../components/features';
import SocialMarket from '../components/socialmarket';
import ServicesSection from '../components/services';
import CaseStudy from '../components/casestudy';
import DetailedSection from '../components/detail';
import AboutSection from '../components/about';
import Companies from '../components/companiesusinghub';
import TestimonialsSection from '../components/testimonials';
import LatestPosts from '../components/blogs';
import ContactUsSection from '../components/contactus';
import FooterSection from '../components/footer';

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
    <AboutSection />
    <Companies />
    <TestimonialsSection />
    <LatestPosts />
    <ContactUsSection />
    <FooterSection />
      
    </>
  )
}

export default HomePage;
