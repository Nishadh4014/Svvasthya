import React from 'react';
import './styles/FeaturedPartners.css';
import Partner from '../assets/Partner.png'

const FeaturedPartners = () => {
  return (
    <div className="featured-partners">
      <h1>OUR BEST HIGHLY PERFORM CAREGIVER</h1>
      <div className="partners">
        <img src={Partner} alt="Caregiver 1" />
        <img src={Partner} alt="Caregiver 2" />
        <img src={Partner} alt="Caregiver 3" />
        <img src={Partner} alt="Caregiver 4" />
      </div>
    </div>
  );
};

export default FeaturedPartners;
