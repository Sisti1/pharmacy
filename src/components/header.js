import React from "react";
import "./header.css";
import logo from '../images/logo.png' // Adjust path based on actual image location

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
        <div className="logo-area">
          
          <img src={logo} alt="Shree Omsheel Logo" className="logo-image" />
          <span className="logo-text">
            Shree Omsheel Ayurvedic Pharmacy & Research Centre
          </span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#contact" className="bold">Contact</a>
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
