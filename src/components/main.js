import React from 'react';
import './css/main.css';

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-content">
        <div className="left-container">
          <h1 className="main-title">PHARMA</h1>
          <p className="main-description">
          Pharma-Care is a platform that leverages technology to improve access to medicine and medical assistance for communities. 
          The platform is designed to connect individuals with local pharmacies and hospitals,
          enabling them to easily access the medications or medical services they require
          </p>
        </div>
        <div className="right-container"></div>
      </div>
    </div>
  );
};

export default Main;
