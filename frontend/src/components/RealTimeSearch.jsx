import React from 'react';
import './styles/RealTimeSearch.css';

const RealTimeSearch = () => {
  return (
    <div className="real-time-search">
      <h1>MEET SPECIALIST</h1>
      <p>Discover comprehensive health care support services conveniently tailored to meet all your needs in one place.</p>
      <div className="search-bar">
        <input type="text" placeholder="📍 Location" />
        <input type="text" placeholder="👤 Select your Service" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default RealTimeSearch;
