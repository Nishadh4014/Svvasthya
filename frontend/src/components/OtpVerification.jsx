import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { mobileNumber } = location.state;

  const handleVerifyOtp = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/verify-otp', { mobileNumber, otp });
      navigate('/profile-completion', { state: { mobileNumber } });
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
};

export default OtpVerification;
