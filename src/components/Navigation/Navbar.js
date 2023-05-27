import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item logo nav-header custom-link">
              <Link to="/">Pharmatech</Link>
            </li>
          </ul>
          <ul className="nav nav-pills margin-right">
            <li className="nav-item custom-link">
            </li>
            <li className="nav-item ms-1 custom-link">
            </li>
          </ul>
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;