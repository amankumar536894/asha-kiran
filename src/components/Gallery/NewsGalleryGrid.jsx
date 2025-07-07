import React from 'react';
import './NewsGalleryGrid.css';

const images = [
  '/news_gallery/image1.jpeg',
  '/news_gallery/image2.jpeg',
  '/news_gallery/image3.jpeg',
  '/news_gallery/image4.jpeg',
  '/news_gallery/image5.jpeg',
  '/news_gallery/image6.jpeg',
  '/news_gallery/image7.jpeg',
  '/news_gallery/image8.jpeg',
  '/news_gallery/image9.jpeg',
  '/news_gallery/image10.jpeg',
  '/news_gallery/image11.jpeg',
  '/news_gallery/image12.jpeg',
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