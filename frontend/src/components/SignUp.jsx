import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        setVerificationStatus('OTP sent successfully. Check your mobile.');

      } else {
        setVerificationStatus('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setVerificationStatus('Error sending OTP. Please try again later.');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        setVerificationStatus('OTP verification successful. Proceed with registration.');
        setIsVerified(true);

      } else {
        setVerificationStatus('OTP verification failed. Please check your OTP and try again.');
        setIsVerified(false);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setVerificationStatus('Error verifying OTP. Please try again later.');
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('User registered successfully:', data);
        setVerificationStatus('User registered successfully!');
        navigate('/dashboard'); 
      } else {
        console.error('Failed to register user:', data.error);
        setVerificationStatus('Failed to register user. Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setVerificationStatus('Error registering user. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>
        Mobile Number:
        <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSendOTP}>Send OTP</button>
      <br />
      {verificationStatus && <p>{verificationStatus}</p>}
      <br />
      {isVerified && (
        <>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <label>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleSignup}>Sign Up</button>
        </>
      )}
      <br />
      {!isVerified && (
        <>
          <label>
            OTP:
            <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} />
          </label>
          <br />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default SignUp;
