import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<ServiceDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otpverification" element={<OtpVerification />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
