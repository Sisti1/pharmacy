
import React from 'react';
import './consult.css';

const consult = () => {
  return (
    <div className="consult-container">
      <div className="consult-info">
        <h2>Schedule a Consultation</h2>
        <p>Speak with our expert doctors to get personalized advice for your health needs.</p>
        <ul className="consult-benefits">
          <li>
            <span className="icon">🩺</span>
            <div>
              <strong>Personalized Consultation</strong>
              <p>Get tailored advice specific to your health concerns and medication needs.</p>
            </div>
          </li>
          <li>
            <span className="icon">⏱️</span>
            <div>
              <strong>Quick and Convenient</strong>
              <p>Book at a time that suits your schedule with our flexible appointment system.</p>
            </div>
          </li>
          <li>
            <span className="icon">📄</span>
            <div>
              <strong>Comprehensive Care Plan</strong>
              <p>Receive a detailed care plan after your consultation to help manage your health.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="consult-form">
        <h3>Book Your Appointment</h3>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Aadhaar Number" required />
          </div>
          <div className="form-row">
            <input type="date" required />
            <input type="time" required />
          </div>
          <select required>
            <option value="">Select a service</option>
            <option value="consultation">Consultation</option>
            <option value="medication">Medication Management</option>
            <option value="screening">Health Screening</option>
          </select>
          <textarea placeholder="Message (Optional)" rows="4" />
          <button type="submit">Schedule Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default consult;
