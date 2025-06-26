import React from 'react';
import './GalleryGrid.css';

const images = [
  '/Gallery_Component/image1.png',
  '/Gallery_Component/image2.png',
  '/Gallery_Component/image3.png',
  '/Gallery_Component/image4.png',
  '/Gallery_Component/image5.png',
  '/Gallery_Component/image6.png',
  '/Gallery_Component/image7.png',
  '/Gallery_Component/image8.png',
  '/Gallery_Component/image9.png',
  '/Gallery_Component/image10.png',
  '/Gallery_Component/image11.png',
  '/Gallery_Component/image12.png',
];

const GalleryGrid = () => (
  <section className="gallery-grid-section">
    <div className="gallery-grid-container">
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div className="gallery-grid-item" key={idx}>
            <img src={src} alt={`Gallery ${idx + 1}`} className="gallery-grid-img" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GalleryGrid; 