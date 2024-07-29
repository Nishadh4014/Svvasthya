import React from 'react';
import './styles/HowWeWorks.css';
import howitworks from '../assets/howitworks.png'


const HowWeWorks = () => {
    return (
      <div className="how-we-works">
        <div className="text-section">
          <div className="watermark">
            <h2>HOW WE WORKS?</h2>
            <p>Discover comprehensive health care support services.</p>
            <div className="steps">
              <div className="step">
                <div className="step-text">01    Book an Appointment    →</div>
              </div>
              <div className="step">
                <div className="step-text">02    Match with Attendees    →</div>
              </div>
              <div className="step">
                <div className="step-text">03    Receive Call    →</div>
              </div>
              <div className="step">
                <div className="step-text">04    Provide Feedback    →</div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={howitworks} alt="Healthcare Support" />
          <p>Discover comprehensive health care support services conveniently tailored to meet all your needs in one place.</p>
        </div>
      </div>
    );
  }
  
  export default HowWeWorks;
