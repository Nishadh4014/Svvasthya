import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RealTimeSearch from '../components/RealTimeSearch';
import HowWeWorks from '../components/HowWeWorks';
import Numericals from '../components/Numericals';

const Home = () => {
  return (
    <div>
    <Header />
    <Hero />
    <RealTimeSearch />
    <HowWeWorks />
    <RealTimeSearch />
    <Numericals />
    {/* Add more components here */}
  </div>
  );
};

export default Home;