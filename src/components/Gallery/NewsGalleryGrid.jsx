import React from 'react';
import './NewsGalleryGrid.css';

const images = [
  '/news_gallery/image1.png',
  '/news_gallery/image2.png',
  '/news_gallery/image3.png',
  '/news_gallery/image4.png',
  '/news_gallery/image5.png',
  '/news_gallery/image6.png',
  '/news_gallery/image7.png',
  '/news_gallery/image8.png',
  '/news_gallery/image9.png',
  '/news_gallery/image10.png',
  '/news_gallery/image11.png',
  '/news_gallery/image12.png',
];

const NewsHeader = () => (
  <header className="news-header-section">
    <div className="news-header-content">
      <h1 className="news-header-title">News Gallery</h1>
    </div>
  </header>
);

const NewsGalleryGrid = () => (
  <section className="gallery-grid-section">
    <NewsHeader />
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

export default NewsGalleryGrid; 