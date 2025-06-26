import React from 'react';
import './ImageGrid.css';
import { useNavigate } from 'react-router-dom';

const images = [
  '/fb_gallery/image.png',
  '/fb_gallery/image copy.png',
  '/fb_gallery/image copy 2.png',
  '/fb_gallery/image copy 3.png',
  '/fb_gallery/image copy 4.png',
  '/fb_gallery/image copy 5.png',
  '/fb_gallery/image copy 6.png',
];

function ImageGrid() {
  const navigate = useNavigate();
  const handleDonate = () => {
    navigate('/donate');
  }
  
  return (
    <section className="image-grid-section">
      <div className="image-grid-header">
        <h2 style={{ fontSize: '2.3rem', fontWeight: 700, color: '#b45f06', margin: 0, letterSpacing: '1px', marginBottom: '2rem' }}>Moments of Impact</h2>
        <p className="image-grid-desc">A glimpse into our journey of compassion, care, and change. Every image tells a story of hope and transformation.</p>
      </div>
      <div className="image-grid">
        {images.slice(0, 6).map((src, idx) => (
          <div className="image-grid-item" key={idx} style={{ animationDelay: `${idx * 0.08 + 0.1}s` }}>
            <img src={src} alt={`Gallery ${idx + 1}`} className="image-grid-img" />
          </div>
        ))}
      </div>
      <div className="image-grid-footer">
        <button className="image-grid-donate-btn" onClick={handleDonate}>Donate Now</button>
      </div>
    </section>
  );
}

export default ImageGrid; 