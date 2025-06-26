import React from 'react';
import './BlogCategories.css';

const categories = [
  'All',
  'Inspiration',
  'Education',
  'Volunteering',
  'Women Empowerment',
  'Events',
  'Stories',
  'Impact',
];

const BlogCategories = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="blog-categories-section">
      <div className="blog-categories-list">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`blog-category-chip${activeCategory === cat ? ' active' : ''}`}
            onClick={() => onCategoryChange(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories; 