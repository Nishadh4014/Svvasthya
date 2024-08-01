import React from 'react';
import './styles/Header.css';
import logo from '../assets/svvasthya_logo.svg'; 

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Svasthya Logo" />
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#faqs">Svvasthya Army</a></li>
                    <li><a href="#faqs">Svvasthya Saathi</a></li>
                </ul>
            </nav>
            <div className="emergency">
                <a href="tel:+919998877777" className="emergency-call">Emergency Call<br/>+91 99988 77777</a>
            </div>
        </header>
    );
}

export default Header;
