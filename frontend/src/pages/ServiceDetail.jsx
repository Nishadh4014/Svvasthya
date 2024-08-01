import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import nurseImage from '../assets/nursing.png';
import '../components/styles/ServiceDetail.css';

const ServiceDetail = () => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState(new Date());

    const handleContactFormSubmit = (event) => {
        event.preventDefault();
        setShowContactForm(false);
        setShowCalendar(true);
    };

    const handleSubmit = () => {
        setShowContactForm(true);
    };

    return (
        <div>
            <Header />
            <div className='services-back'>
                {!showContactForm && !showCalendar ? (
                    <div className="service-detail">
                        <h1 className="service-title">EXPLORE OUR SERVICES</h1>
                        <div className="service-cards">
                            <h2 className="service-name">Nursing</h2>
                            <div className="service-points">
                                <div className="point">
                                    <h3>Point 1</h3>
                                    <p>Clear and effective communication with clients, families, and medical professionals.</p>
                                </div>
                                <div className="point">
                                    <h3>Point 2</h3>
                                    <p>Understanding common health conditions, medications, and their side effects.</p>
                                </div>
                                <div className="point">
                                    <h3>Point 3</h3>
                                    <p>Knowing how to handle emergencies and basic first aid procedures.</p>
                                </div>
                                <div className="point">
                                    <h3>Point 4</h3>
                                    <p>Documenting daily activities, changes in health, and any incidents.</p>
                                </div>
                            </div>
                            <button className="book-now" onClick={handleSubmit}>Book Now</button>
                            <img src={nurseImage} alt="Nursing" className="service-image" />
                        </div>
                    </div>
                ) : showContactForm ? (
                    <div className="contact-form">
                        <h1>Enter Contact Details</h1>
                        <form onSubmit={handleContactFormSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Mobile Number" />
                                <button type="button">Send OTP</button>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Enter OTP" />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                ) : showCalendar ? (
                    <div className="calendar-container">
                        <h1>Select Date</h1>
                        <Calendar
                            onChange={setDate}
                            value={date}
                            minDate={new Date()}
                        />
                    </div>
                ) : null}
            </div>
            <Footer />
        </div>
    );
};

export default ServiceDetail;
