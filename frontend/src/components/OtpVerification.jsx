// src/components/OtpVerification.js

import React, { useState } from 'react';
import axios from 'axios';

const OtpVerification = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [role, setRole] = useState('Customer'); // or 'Customer' based on your application logic
    const [message, setMessage] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleSendOtp = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/send-otp', { mobileNumber, role });
            setMessage(response.data.message);
            setIsOtpSent(true);
        } catch (error) {
            console.error('Error sending OTP:', error);
            setMessage(error.response?.data?.error || 'Error sending OTP');
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/verify-otp', { mobileNumber, otp, role });
            setMessage(response.data.message);
            // Handle successful OTP verification (e.g., redirect to a different page or show success message)
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setMessage(error.response?.data?.error || 'Error verifying OTP');
        }
    };

    return (
        <div className="otp-verification">
            <h2>OTP Verification</h2>
            <div>
                <label>Mobile Number:</label>
                <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter mobile number"
                />
            </div>
            {!isOtpSent && (
                <button onClick={handleSendOtp}>Send OTP</button>
            )}
            {isOtpSent && (
                <>
                    <div>
                        <label>OTP:</label>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                        />
                    </div>
                    <button onClick={handleVerifyOtp}>Verify OTP</button>
                </>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default OtpVerification;
