import React, { useRef, useEffect, useState } from 'react';
import './GalleryGallery.css';
import { useNavigate } from 'react-router-dom';

const galleryData = [
  {
    id: 1,
    image: '/fb_gallery/image.png',
    category: 'Animal',
    title: 'Beyond Borders: Unity, Love, And Care For Stray Stories.'
  },
  {
    id: 2,
    image: '/fb_gallery/image copy.png',
    category: 'Animal',
    title: 'Paws With Purpose: Rescuing And Embracing Hope.'
  },
  {
    id: 3,
    image: '/fb_gallery/image copy 2.png',
    category: 'Animal',
    title: 'Love Unleashed: Caring For Street Animals.'
  },
  {
    id: 4,
    image: '/fb_gallery/image copy 3.png',
    category: 'Plantation',
    title: "Our Green Mission: Nurturing Earth's Future."
  },
  {
    id: 5,
    image: '/fb_gallery/image copy 4.png',
    category: 'Education',
    title: 'Education For All: Lighting The Path To Knowledge.'
  },
  {
    id: 6,
    image: '/fb_gallery/image copy 5.png',
    category: 'Healthcare',
    title: 'Wellness For Everyone: Spreading Smiles Through Healthcare.'
  }
];

function GalleryGallery() {
  const navigate = useNavigate();
  const handleDonate = () => {
    navigate('/donate');
  }
  
  const scrollRef = useRef(null);
  const rowRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Infinite auto-scroll effect with pause/resume
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const row = rowRef.current;
    let animationFrame;
    const speed = 1; // px per frame

    function scrollStep() {
      if (!paused && scrollContainer && row) {
        scrollContainer.scrollLeft += speed;
        // Reset scroll to start for infinite effect
        if (scrollContainer.scrollLeft >= row.scrollWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollStep);
    }
    animationFrame = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  // Touch drag support (does not pause auto-scroll)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;
    if (!scrollContainer) return;
    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };
    const onMouseLeave = () => { isDown = false; };
    const onMouseUp = () => { isDown = false; };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };
    scrollContainer.addEventListener('mousedown', onMouseDown);
    scrollContainer.addEventListener('mouseleave', onMouseLeave);
    scrollContainer.addEventListener('mouseup', onMouseUp);
    scrollContainer.addEventListener('mousemove', onMouseMove);
    // Touch events
    let touchStartX = 0;
    let touchScrollLeft = 0;
    const onTouchStart = (e) => {
      touchStartX = e.touches[0].pageX;
      touchScrollLeft = scrollContainer.scrollLeft;
    };
    const onTouchMove = (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - touchStartX) * 2;
      scrollContainer.scrollLeft = touchScrollLeft - walk;
    };
    scrollContainer.addEventListener('touchstart', onTouchStart);
    scrollContainer.addEventListener('touchmove', onTouchMove);
    return () => {
      scrollContainer.removeEventListener('mousedown', onMouseDown);
      scrollContainer.removeEventListener('mouseleave', onMouseLeave);
      scrollContainer.removeEventListener('mouseup', onMouseUp);
      scrollContainer.removeEventListener('mousemove', onMouseMove);
      scrollContainer.removeEventListener('touchstart', onTouchStart);
      scrollContainer.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-title-area">
        <h2 className="gallery-title">Our Impactful Stories</h2>
      </div>
      <div
        className="gallery-scroll"
        ref={scrollRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="gallery-row" ref={rowRef}>
          {[...galleryData, ...galleryData].map((item, idx) => (
            <div className="gallery-card" key={item.id + '-' + idx}>
              <div className="gallery-img-wrapper">
                <img src={item.image} alt={item.title} className="gallery-img" />
              </div>
              <div className="gallery-card-body">
                <h5 className="gallery-card-title">{item.title}</h5>
                <button className="gallery-donate-btn" onClick={handleDonate}>Donate</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryGallery; 