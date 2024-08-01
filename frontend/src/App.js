import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Signup from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import OtpVerification from './components/OtpVerification.jsx';
import Home from './pages/Home.jsx';
import './global.css';
import ServiceDetail from './pages/ServiceDetail.jsx';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServiceDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otpverification" element={<OtpVerification />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
