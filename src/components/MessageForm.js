import React from 'react';
import './MessageForm.css';
import formImage from "../images/messageForm.jpg" // Make sure to add the image in your project

const MessageForm = () => {
  return (
    <div className="message-form-container">
      <div className="form-section">
        <h2>Send Us a Message</h2>
        <p>Have questions or feedback? Use this form to get in touch with our team.</p>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="image-section">
        <img src={formImage} alt="Contact Visual" />
      </div>
    </div>
  );
};

export default MessageForm;
