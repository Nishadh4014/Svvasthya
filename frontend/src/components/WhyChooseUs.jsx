import React from 'react';
import './styles//WhyChooseUs.css';
import wcu_1 from '../assets/wcu_1.svg';
import wcu_2 from '../assets/wcu_2.svg';
import wcu_3 from '../assets/wcu_3.png';


const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h1>WHY CHOOSE US</h1>
      <div className="benefits">
        <div className="benefit">
          <img src={wcu_1} alt="100% Safe" />
          <h2>100% Safe</h2>
          <p>Discover comprehensive health care support services conveniently tailored to meet all your needs in one place.</p>
        </div>
        <div className="benefit">
          <img src={wcu_2} alt="Experienced Doctor" />
          <h2>Experienced Doctor</h2>
          <p>Discover comprehensive health care support services conveniently tailored to meet all your needs in one place.</p>
        </div>
        <div className="benefit">
          <img src={wcu_3} alt="Premium Equipment" />
          <h2>Premium Equipment</h2>
          <p>Discover comprehensive health care support services conveniently tailored to meet all your needs in one place.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
