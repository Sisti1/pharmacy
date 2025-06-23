import React from "react";
import "./footer.css"; // Ensure you have a CSS file for styling
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo-area">
                    
                    <img src={logo} alt="Shree Omsheel Logo" className="logo-image" />
                    <span className="logo-text">
                      Shree Omsheel Ayurvedic Pharmacy & Research Centre
                    </span>
                  </div>
                  <br />
          <p> Combating Opium Addiction in India's Youth: A Holistic Ayurvedic Solution</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About </li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Naadi Parikshan</li>
            <li>Tailored Medications</li>
            <li>Dhatu Agni Poshanam</li>
            <li>Emergency Support</li>
            <li>Stress & Mind Wellness</li>
            <li>Ayurvedic Pain Reduction Therapy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaPhone /> +91-9414127131</p>
          <p><FaEnvelope />  omsheelpharma@gmail.com</p>
          <p><FaMapMarkerAlt /> Road No. 10, near Vikas High School, Aggarsen Colony, Sirsa, Haryana 125055</p>
          <p><FaClock /> Mon-Fri: 9:30 AM - 5:00 PM</p>
          <p>Sat: 9:00 AM - 1:00 PM</p>
          <p>Off on Sundays and Public Holidays</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025  Shree Omsheel Ayurvedic Pharmacy & Research Centre. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
