import React from 'react';
import './styles/Footer.css';
import logo from '../assets/svvasthya_logo.svg'; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.</p>
        <a href="mailto:info@swasthya.com">info@swasthya.com</a>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>Company</h3>
          <a href="#">Menu 1</a>
          <a href="#">Menu 2</a>
          <a href="#">Menu 3</a>
          <a href="#">Menu 4</a>
          <a href="#">Menu 5</a>
        </div>
        <div className="footer-column">
          <h3>For customers</h3>
          <a href="#">Menu 1</a>
          <a href="#">Menu 2</a>
          <a href="#">Menu 3</a>
          <a href="#">Menu 4</a>
          <a href="#">Menu 5</a>
        </div>
        <div className="footer-column">
          <h3>For partners</h3>
          <a href="#">Menu 1</a>
          <a href="#">Menu 2</a>
          <a href="#">Menu 3</a>
          <a href="#">Menu 4</a>
          <a href="#">Menu 5</a>
        </div>
      </div>
      <div className="footer-social">
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default Footer;
