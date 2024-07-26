import React, { useEffect } from 'react';
import './styles/Hero.css';
import watermark from '../assets/watermark.svg';
import textlogo from '../assets/svvasthya_letter_logo.svg';
import caregiverImage from '../assets/caregiver.png';
import nurseImage from '../assets/nursing.png';
import babycareImage from '../assets/babycare.png';
import { FiArrowRightCircle } from "react-icons/fi";

function Hero() {
    useEffect(() => {
        const timer1 = setTimeout(() => {
            const svvasthyaElement = document.querySelector('.hero-svvasthya');
            if (svvasthyaElement) {
                svvasthyaElement.style.display = 'flex';
            }
        }, 1000);

        const timer2 = setTimeout(() => {
            const svvasthyaElement2 = document.querySelector('.hero-content');
            if (svvasthyaElement2) {
                svvasthyaElement2.style.display = 'block';
            }
        }, 2500);

        const timer3 = setTimeout(() => {
            const svvasthyaElement3 = document.querySelector('.hero-svvasthya');
            if (svvasthyaElement3) {
                svvasthyaElement3.style.display = 'none';
            }
        }, 3500);

        const timer4 = setTimeout(() => {
            const svvasthyaElement4 = document.querySelector('.services');
            if (svvasthyaElement4) {
                svvasthyaElement4.style.display = 'flex';
            }
        }, 3500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);

    return (
        <div className="hero">
            <div className="hero-background">
                <img src={watermark} alt="Watermark" className="watermark" />
            </div>
            <div className="hero-svvasthya">
                <img src={textlogo} alt="textlogo" className="textlogo" />
            </div>
            <div className="hero-content">
                <h1>Your Ultimate Hub for Health Care Support Services</h1>
                <p>Discover comprehensive health care support services conveniently tailored to meet all your needs in one place.</p>
                <a className="emergency-btn">Emergency Call Now</a>
            </div>
            <div className="services">
                <div className="service-card">
                    <img src={nurseImage} alt="Nursing" />
                    <h2 className="h21">Nursing</h2>
                    <a className="service-link"><FiArrowRightCircle /></a>
                </div>
                <div className="service-card">
                    <img src={caregiverImage} alt="Caregiver" />
                    <h2 className="h22">Caregiver</h2>
                    <a className="service-link"><FiArrowRightCircle /></a>
                </div>
                <div className="service-card">
                    <img src={babycareImage} alt="Baby Care" />
                    <h2 className="h23">BabyCare</h2>
                    <a className="service-link"><FiArrowRightCircle className="service-icon"/></a>
                </div>
            </div>

        </div>
    );
}

export default Hero;
