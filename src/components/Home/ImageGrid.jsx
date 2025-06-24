import React from 'react';
import './ImageGrid.css';

const images = [
  '/fb_gallery/image.png',
  '/fb_gallery/image copy.png',
  '/fb_gallery/image copy 2.png',
  '/fb_gallery/image copy 3.png',
  '/fb_gallery/image copy 4.png',
  '/fb_gallery/image copy 5.png',
  '/fb_gallery/image copy 6.png',
  // 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80',
  // 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  // 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
  // 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  // 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80',
];

function ImageGrid() {
  return (
    <section className="image-grid-section">
      <div className="image-grid-header">
        <h2 style={{ fontSize: '2.3rem', fontWeight: 700, color: '#4a3a5a', margin: 0, letterSpacing: '1px', marginBottom: '2rem' }}>Moments of Impact</h2>
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
        <button className="image-grid-donate-btn">Donate Now</button>
      </div>
    </section>
  );
}

export default ImageGrid; 