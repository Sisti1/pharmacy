import React from 'react';
import  "../components/card.css";
import logo from "../images/logo.png"; 

const card = () => {
  return (
    <div className="product-card">
      <div className="card-image">
        <span className="category-badge">Medical Supplies</span>
        <img src={logo} alt="First Aid Kit" />
      </div>
      <div className="card-content">
        <h3 className="product-title">Niramaya</h3>
        <p className="product-description">
          Used for deaddicton and detoxification of opium addiction.
        </p>
        <div className="card-footer">
          <span className="product-price">Rs. 13</span>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default card;
