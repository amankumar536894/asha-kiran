import React from 'react';
import './ImpactStories.css';

const stories = [
  {
    name: 'Asha Kumari',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    story: 'With the support of Asha Kiran grd, I was able to complete my education and now teach children in my village.'
  },
  {
    name: 'Ramesh Yadav',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
    story: 'The healthcare camp saved my sons life. We are forever grateful for the timely help and care.'
  },
  {
    name: 'Sunita Devi',
    photo: 'https://randomuser.me/api/portraits/women/51.jpg',
    story: 'I started my own tailoring business after attending the skill training program. Thank you for empowering women like me!'
  }
];

const ImpactStories = () => {
  return (
    <section className="impactstories-section">
      <h2 className="impactstories-title">Impact Stories</h2>
      <div className="impactstories-grid">
        {stories.map((s, idx) => (
          <div className="impactstories-card" key={idx}>
            <div className="impactstories-photo-wrapper">
              <img src={s.photo} alt={s.name} className="impactstories-photo" />
            </div>
            <div className="impactstories-content">
              <p className="impactstories-story">{s.story}</p>
              <div className="impactstories-name">{s.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStories; 