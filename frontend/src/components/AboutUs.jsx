import React from 'react';
import './styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>ABOUT US</h1>
      <div className="about-us-grid">
        <div className="about-us-item mission">
          <h2>Mission Statement</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="about-us-item values">
          <h2>Core Values</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="about-us-item team">
          <h2>Team Introduction</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="about-us-item experience">
          <h2>Experience</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
