import React from 'react';
import './styles/Numericals.css';

const NumericalsComponent = () => {
  return (
    <div className="numericals-container">
      <div className="numerical-box">
        <div className="numerical-value">500+</div>
        <div className="numerical-label">Recovered Patient</div>
      </div>
      <div className="numerical-box">
        <div className="numerical-value">96%</div>
        <div className="numerical-label">Satisfaction Ratio</div>
      </div>
      <div className="numerical-box">
        <div className="numerical-value">4.8/5</div>
        <div className="numerical-label">Service Rating</div>
      </div>
    </div>
  );
};

export default NumericalsComponent;
