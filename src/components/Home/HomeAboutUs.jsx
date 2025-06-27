import React from 'react';
import './HomeAboutUs.css';
import aboutImg from '../../assets/image.png'; // Use your actual image path
import { Link, useNavigate } from 'react-router-dom';

const HomeAboutUs = () => {
  const navigate = useNavigate()
  const handleDonate = () => {
    navigate('/donate')
  }

  return (
    <section className="homeabout-section">
      <h2 className="homeabout-title">About Us</h2>
      <div className="homeabout-content-row">
        <div className="homeabout-image-col">
          <img src={aboutImg} alt="About Asha Kiran" className="homeabout-image" />
        </div>
        <div className="homeabout-text-col">
          <h3 className="homeabout-welcome">Welcome to Asha Kiran GRD.</h3>
          <p className="homeabout-desc">
            Asha Kiran GRD is a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development. Our mission is to bring hope and positive change to underprivileged lives, lighting the path to a brighter future. We believe in the power of collective action and compassion to transform society, one step at a time.
          </p>
          <div className="homeabout-actions">
            <Link to="/donate" className="homeabout-btn donate-btn" onClick={handleDonate}>Donate Us</Link>
            <a href="tel:+917696728189" className="homeabout-btn call-btn"><i className="fas fa-phone"></i> Call Now +91 76967 28189</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
