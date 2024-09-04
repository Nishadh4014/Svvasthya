import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ContactDetails from './components/services/ContactDetails';
import CustomDatePicker from './components/services/CustomDatePicker';
import NursingServices from './components/services/NursingServices';
import Home from './pages/Home';
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ContactDetails" element={<ContactDetails />} />
          <Route path="/CustomDatePicker" element={<CustomDatePicker />} />
          <Route path="/nursingservices" element={<NursingServices />}></Route>


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
