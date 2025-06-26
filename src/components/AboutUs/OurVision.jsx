import React from 'react';
import './OurVision.css';
import { useNavigate } from 'react-router-dom';

const OurVision = () => {
  const navigate = useNavigate();
  const handleDonate = () => navigate('/donate');

  return (
    <section className="our-vision-section">
      <div className="our-vision-container">
        <div className="our-vision-image-area">
          <img src="/Gallery_Component/image4.png" alt="Our Vision" className="our-vision-image" />
        </div>
        <div className="our-vision-content">
          <h2 className="our-vision-title">Our Vision</h2>
          <p className="our-vision-desc">
            To create a world where every individual has the opportunity to thrive, regardless of their background or circumstances. We envision empowered communities, sustainable growth, and a future filled with hope and dignity for all.
          </p>
          <button className="our-vision-donate-btn" onClick={handleDonate}>Donate</button>
        </div>
      </div>
    </section>
  );
};

export default OurVision; 