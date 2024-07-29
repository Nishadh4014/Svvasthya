import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RealTimeSearch from '../components/RealTimeSearch';
import HowWeWorks from '../components/HowWeWorks';
import Numericals from '../components/Numericals';
import FeaturedPartners from '../components/FeaturedPartners';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import FAQs from '../components/FAQs'

const Home = () => {
  return (
    <div>
    <Header />
    <Hero />
    <RealTimeSearch />
    <HowWeWorks />
    <RealTimeSearch />
    <Numericals />
    <FeaturedPartners />
    <WhyChooseUs />
    <Testimonials />
    <AboutUs />
    <FAQs />
    <Footer />
    {/* Add more components here */}
  </div>
  );
};

export default Home;