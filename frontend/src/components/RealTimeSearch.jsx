import React from 'react';
import './styles/RealTimeSearch.css';
import { GrLocationPin } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";

const RealTimeSearch = () => {
  return (
    <div className="real-time-search">
      <h1>INSTANT CARE</h1>
      <p>Discover comprehensive health care support services conveniently tailored to meet all your needs in one place.</p>
      <div className="search-bar">
        <icon><GrLocationPin /></icon> <input type="text" placeholder="Location" />
        <icon><IoPerson /></icon> <input type="text" placeholder="Select your Service" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default RealTimeSearch;
