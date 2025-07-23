import React from 'react';
import './HomeAboutUs.css';
import aboutImg from '../../assets/image.png'; // Use your actual image path
import { Link, useNavigate } from 'react-router-dom';

const HomeAboutUs = ({ id }) => {
  const navigate = useNavigate()
  const handleDonate = () => {
    navigate('/donate')
  }

  return (
    <section className="homeabout-section" id={id}>
      <h2 className="homeabout-title">About Us</h2>
      <div className="homeabout-content-row">
        <div className="homeabout-image-col">
          <img src={aboutImg} alt="About Asha Kiran" className="homeabout-image" />
        </div>
        <div className="homeabout-text-col">
          <h3 className="homeabout-welcome">Welcome to Asha Kiran grd.</h3>
          <p className="homeabout-desc">
          Asha Kiran GRD is a non-profit organization committed to empowering underprivileged communities through education, healthcare, and sustainable development. Since 2008, we’ve been lighting lives across Jharkhand, Bihar, West Bengal, and Rajasthan — creating opportunities, restoring dignity, and building a brighter, more inclusive future for all.
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
