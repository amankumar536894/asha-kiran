import React from 'react';
import './Testonomials.css';

const testimonials = [
  {
    name: 'Riya Mehra',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'Asha Kiran GRD changed my life. Their support and compassion gave me hope and a new beginning.'
  },
  {
    name: 'Vikram Joshi',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The dedication of the team is inspiring. I am proud to be a part of their journey.'
  },
  {
    name: 'Sonal Gupta',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Their work in the community is truly impactful. I recommend supporting Asha Kiran GRD to everyone.'
  }
];

const Testonomials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What People Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-photo-wrapper">
                <img src={t.photo} alt={t.name} className="testimonial-photo" />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-name">{t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testonomials;
