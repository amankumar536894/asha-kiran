import React from 'react';
import './GalleryGrid.css';

const images = [
  '/Gallery_Component/image1.jpeg',
  '/Gallery_Component/image2.jpeg',
  '/Gallery_Component/image3.jpeg',
  '/Gallery_Component/image4.jpeg',
  '/Gallery_Component/image5.jpeg',
  '/Gallery_Component/image6.jpeg',
  '/Gallery_Component/image7.jpeg',
  '/Gallery_Component/image8.jpeg',
  '/Gallery_Component/image9.jpeg',
  '/Gallery_Component/image10.jpeg',
  '/Gallery_Component/image11.jpeg',
  '/Gallery_Component/image12.jpeg',
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