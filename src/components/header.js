import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header>
      
      <div className="top-bar">
        <div className="contact-info">
          <span>📞 +91-9414127131</span>
          <span>✉️ omsheelpharma@gmail.com</span>
        </div>
        <div className="top-links">
          <a href="#location">Find a Location</a> 
        </div>
      </div>

      
      <div className="main-header">
      
        <Link to="/" className="logo-area">
          <img src={logo} alt="Shree Omsheel Logo" className="logo-image" />
          <span className="logo-text">
            Shree Omsheel Ayurvedic Pharmacy & Research Centre
          </span>
        </Link>

        
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/card">Products</Link>
          <Link to="/contact" className="bold">Contact</Link>
        </nav>

        <div className="actions">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
