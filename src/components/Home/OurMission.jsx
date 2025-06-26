import React from 'react';
import './OurMission.css';

function OurMission() {
  return (
    <section className="our-mission-section">
      <div className="our-mission-header">
        <h2 className="our-mission-title">Our Mission</h2>
        <p className="our-mission-desc">
          Empowering communities, nurturing hope, and building a brighter future for all. Our mission is rooted in compassion, action, and impact.
        </p>
      </div>
      <div className="our-mission-cards">
        <div className="our-mission-card">
          <div className="our-mission-icon">🌱</div>
          <h3 className="our-mission-card-title">Empowerment</h3>
          <p className="our-mission-card-text">
            We strive to empower individuals and families through education, skill development, and access to resources, enabling them to lead self-reliant lives.
          </p>
        </div>
        <div className="our-mission-card">
          <div className="our-mission-icon">🤝</div>
          <h3 className="our-mission-card-title">Community</h3>
          <p className="our-mission-card-text">
            Building strong, inclusive communities where everyone has the opportunity to thrive, fostering a sense of belonging and collective growth.
          </p>
        </div>
        <div className="our-mission-card">
          <div className="our-mission-icon">💡</div>
          <h3 className="our-mission-card-title">Innovation</h3>
          <p className="our-mission-card-text">
            Driving positive change through innovative solutions, creative thinking, and a commitment to continuous improvement in all we do.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMission; 