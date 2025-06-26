import React from 'react';
import './OurServices.css';

const services = [
  {
    icon: '🌱',
    title: 'Community Empowerment',
    desc: 'Empowering local communities through education, training, and sustainable development initiatives.'
  },
  {
    icon: '🏥',
    title: 'Healthcare Initiatives',
    desc: 'Providing access to essential healthcare, medical camps, and wellness programs for all.'
  },
  {
    icon: '📚',
    title: 'Education for All',
    desc: 'Ensuring every child and adult has the opportunity to learn, grow, and succeed.'
  },
  {
    icon: '🤝',
    title: 'Women & Child Welfare',
    desc: 'Supporting women and children with resources, safety, and opportunities for a brighter future.'
  }
];

const OurServices = () => {
  return (
    <section className="ourservices-section">
      <h2 className="ourservices-title">Our Services</h2>
      <div className="ourservices-grid">
        {services.map((s, idx) => (
          <div className="ourservices-card" key={idx}>
            <div className="ourservices-icon">{s.icon}</div>
            <h3 className="ourservices-card-title">{s.title}</h3>
            <p className="ourservices-card-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices; 