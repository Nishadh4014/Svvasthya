import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Signup from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import KYCForm from './components/KYCForm.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kycform" element={<KYCForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
