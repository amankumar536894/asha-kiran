import React from 'react';
import logo from '../assets/logo.png'
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section-wide">
      <div className="footer-main container-fluid py-5">
        <div className="row gy-5 align-items-start">
          {/* Left: Logo, Name, Tagline, Mission */}
          <div className="col-12 col-md-4 col-lg-4 text-center text-md-start mb-4 mb-md-0">
            <div className="footer-logo mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
              <img src={logo} alt="NGO Logo" className="footer-logo-img me-2" />
              <span className="footer-title">Asha Kiran GRD</span>
            </div>
            <div className="footer-tagline mb-2">Lighting Lives, Spreading Hope</div>
            <div className="footer-mission">
              <span>Empowering communities through education, healthcare, and sustainable development for a brighter tomorrow.</span>
            </div>
          </div>
          {/* Center: Navigation & Quick Links side by side */}
          <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-start mb-4 mb-md-0">
            <div className="footer-links-flex">
              <div className="footer-links-col">
                <div className="footer-links-title">Navigation</div>
                <ul className="footer-nav list-unstyled mb-3">
                  <li><a href="#about">About</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#impact">Impact</a></li>
                  <li><a href="#donate">Donate</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-links-divider"></div>
              <div className="footer-links-col">
                <div className="footer-links-title">Quick Links</div>
                <ul className="footer-quick-links list-unstyled">
                  <li><a href="#volunteer">Volunteer</a></li>
                  <li><a href="#events">Events</a></li>
                  <li><a href="#stories">Stories</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right: Contact, Social, Newsletter all left-aligned */}
          <div className="col-12 col-md-4 col-lg-4 text-start">
            <div className="footer-contact mb-3">
              <div><i className="bi bi-envelope"></i> info@ashakiran.org</div>
              <div><i className="bi bi-telephone"></i> +91 76967 28189</div>
              <div><i className="bi bi-geo-alt"></i> Dehradun, Uttarakhand, India</div>
            </div>
            <div className="footer-social mb-3">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
            </div>
            <form className="footer-newsletter d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-start" onSubmit={e => e.preventDefault()}>
              <input type="email" className="form-control me-sm-2 mb-2 mb-sm-0" placeholder="Your email" aria-label="Email for newsletter" required style={{ maxWidth: 180 }} />
              <button className="btn btn-newsletter" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <hr className="footer-divider my-4" />
        <div className="row">
          <div className="col-12 text-center footer-copyright">
            &copy; {new Date().getFullYear()} Asha Kiran GRD. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 