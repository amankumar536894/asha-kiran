import React from 'react';
import './Testonomials.css';

const testimonials = [
  {
    name: 'Ramshankar Gupta',
    photo: '/testonomials/ramshankar_gupta.png',
    quote: 'The dedication of the team is so much inspiring. I am proud to be a part of their journey.'
  },
  {
    name: 'Rekha Sharma',
    photo: '/testonomials/rekha_sharma.png',
    quote: 'Asha Kiran GRD changed my life. Their support and compassion gave me hope and a new beginning.'
  },
  {
    name: 'Sital Solagi',
    photo: '/testonomials/sital_solagi.png',
    quote: 'Their work in the community is truly impactful. I recommend supporting Asha Kiran GRD to everyone.'
  }
];

const Testonomials = ({ id }) => {
  return (
    <section className="testimonials-section" id={id}>
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
