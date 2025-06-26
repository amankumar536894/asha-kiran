import React from 'react';
import './DonateBanner.css';
import { useNavigate } from 'react-router-dom';

const DonateBanner = () => {
  const navigate = useNavigate();
  const handleDonate = (e) => {
    e.preventDefault();
    navigate('/donate');
  };
  return (
  <section className="donate-banner-section">
    <div className="donate-banner-content">
      <h2 className="donate-banner-title">Support Our Mission</h2>
      <p className="donate-banner-desc">
        Your contribution helps us empower communities, provide education, healthcare, and hope to those in need. Every donation makes a real difference in someone's life.
      </p>
        <a href="/donate" className="donate-banner-btn" onClick={handleDonate}>Donate Now</a>
    </div>
  </section>
);
};

export default DonateBanner; 