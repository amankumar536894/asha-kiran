import React from 'react';
import './Testonomials.css';

const testimonials = [
  {
    name: 'Prashant Roy',
    photo: '/testonomials/prashant_roy.jpeg',
    quote: 'The dedication of the team is so much inspiring. I am proud to be a part of their journey.'
  },
  {
    name: 'Rekha Sharma',
    photo: '/testonomials/rekha_sharma.jpeg',
    quote: 'Asha Kiran grd changed my life. Their support and compassion gave me hope and a new beginning.'
  },
  {
    name: 'Sital Solagi',
    photo: '/testonomials/sital_solagi.jpeg',
    quote: 'Their work in the community is truly impactful. I recommend supporting Asha Kiran grd to everyone.'
  },
  {
    name: 'Mithilesh Kumar Pande',
    photo: '/testonomials/Mithlesh_Kumar_Pande.png',
    quote: 'Asha Kiran GRD has brought hope to areas that were once forgotten. Their dedication to grassroots change is inspiring.'
  },
  {
    name: 'Rajendar Varma',
    photo: '/testonomials/rajendar_varma.png',
    quote: 'I’ve seen firsthand how their education and health programs transform lives. Their impact goes deeper than words can express.'
  },
  {
    name: 'Manoj Kumar Pande',
    photo: '/testonomials/manoj_kumar_pande.png',
    quote: 'Supporting Asha Kiran GRD means being part of something bigger — a movement toward dignity, equality, and opportunity.'
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
