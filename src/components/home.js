import React from "react";
import { useNavigate } from "react-router-dom"; // ← Import the navigation hook
import "./home.css";

const Home = () => {
  const navigate = useNavigate(); // ← Initialize navigate

  const handleConsultClick = () => {
    navigate("/consult"); // ← Route to /consult
  };

  return (
    <section className="home">
      <div className="home-content">
        <span className="tagline">Your Health, Our Priority</span>
        <h1>
          Combating Opium Addiction in India's Youth: A Holistic Ayurvedic Solution
        </h1>
        <p>
          A Proven Approach for Effective Rehabilitation by Shree Omsheel Ayurvedic Pharmacy
        </p>
        <div className="home-buttons">
          <button className="btn green" onClick={handleConsultClick}>
            Book a Consultation
          </button>
        </div>
      </div>

      <div className="home-image">
        <img
          src="https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&w=800"
          alt="Healthcare"
        />
      </div>
    </section>
  );
};

export default Home;
