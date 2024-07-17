import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Signup from './components/SignUp.jsx';
import Login from './components/Login.jsx';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Your App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
