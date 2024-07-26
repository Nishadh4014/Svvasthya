import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
    <Header />
    <Hero />
    {/* Add more components here */}
  </div>
  );
};

export default Home;