import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="subheading">
          We're here to help with any questions or concerns you may have.
        </p>

        <div className="contact-content">
          {/* Left: Map + Info */}
          <div className="map-section">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=Road+No.+10,+near+Vikas+High+School,+Aggarsen+Colony,+Sirsa,+Haryana+125055&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-info">
              <h3>Find Us</h3>
              <p>
                Visit us at our convenient location in the heart of the city. We're easily
                accessible by public transportation and offer dedicated parking for our customers.
              </p>
              <button>Get Directions</button>
            </div>
          </div>

          {/* Right: Info Grid */}
          <div className="info-grid">
            <div className="info-card">
              <span className="icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>Road No. 10, near Vikas High School, Aggarsen Colony, Sirsa, Haryana 125055</p>
              </div>
            </div>

            <div className="info-card">
              <span className="icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+91-9414127131</p>
              </div>
            </div>

            <div className="info-card">
              <span className="icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>omsheelpharma@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <span className="icon">⏰</span>
              <div>
                <h4>Hours</h4>
                <p>
                  Mon-Fri: 9:30 AM - 5:00 PM<br />
                  Sat: 9:00 AM - 1:00 PM<br />
                  Off on Sundays and Public Holidays
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
