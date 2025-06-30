import React from 'react';
import './NGOInfo.css';

const NGOInfo = ({ id }) => (
  <section className="ngo-info-section" id={id}>
    <div className="ngo-info-container">
      <h2 className="ngo-info-title">More About Our NGO</h2>
      <p className="ngo-info-founded">Founded in <span>2008</span></p>
      <div className="ngo-info-grid">
        <div className="ngo-info-block">
          <h3 className="ngo-info-heading">Operations</h3>
          <ul className="ngo-info-list">
            <li>Jharkhand</li>
            <li>Bihar</li>
            <li>West Bengal</li>
            <li>Rajasthan</li>
          </ul>
        </div>
        <div className="ngo-info-block">
          <h3 className="ngo-info-heading">Head Office</h3>
          <p className="ngo-info-office">Jharkhand</p>
        </div>
        <div className="ngo-info-block">
          <h3 className="ngo-info-heading">Branch Offices</h3>
          <ul className="ngo-info-list">
            <li>Bihar</li>
            <li>West Bengal</li>
            <li>Rajasthan</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default NGOInfo; 