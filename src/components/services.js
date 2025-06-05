
import React from 'react';
import './services.css';

const services = [
  {
    title: 'Naadi Parikshan',
    description: 'Personalized pulse diagnosis for a comprehensive health assessment.',
    icon: '💊'
  },
  {
    title: 'Tailored Medications',
    description: 'Custom Ayurvedic formulations crafted for your unique needs.',
    icon: '🩺'
  },
  {
    title: 'Dhatu Agni Poshanam',
    description: 'Harmonizing your body and digestion for foundational well-being.',
    icon: '📋'
  },
  {
    title: 'Emergency Support',
    description: 'Specialized Ayurvedic capsules for managing withdrawal symptoms and crises.',
    icon: '💉'
  },
  {
    title: 'Stress & Mind Wellness',
    description: 'Ayurvedic Harmony Holistic treatments and practices to calm the mind, reduce stress, and enhance mental clarity.'
,
    icon: '💙'
  },
  {
    title: 'Ayurvedic Pain Reduction Therapy ',
    description: 'Natural, holistic approaches to alleviate chronic and acute pain, promoting comfort and mobility'
,
    icon: '📦'
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        We provide a comprehensive range of Ayurvedic treatments to meet all your healthcare needs.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
