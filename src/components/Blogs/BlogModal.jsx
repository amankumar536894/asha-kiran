import React from 'react';
import './BlogModal.css';

const BlogModal = ({ open, onClose, blog }) => {
  if (!open || !blog) return null;
  return (
    <div className="blog-modal-backdrop" onClick={onClose}>
      <div className="blog-modal" onClick={e => e.stopPropagation()}>
        <button className="blog-modal-close" onClick={onClose} aria-label="Close blog article">&times;</button>
        <div className="blog-modal-header">
          <h2 className="blog-modal-title">{blog.title}</h2>
          <h3 className="blog-modal-subtitle">{blog.subtitle}</h3>
          <div className="blog-modal-meta">
            <span>By {blog.author}</span>
            <span>{new Date(blog.date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="blog-modal-image-wrapper">
          <img src={blog.image} alt={blog.title} className="blog-modal-image" />
        </div>
        <div className="blog-modal-content">
          {/* Example full article content, can be replaced with real data */}
          <p>
            Welcome to the full article! This is where the story unfolds in detail. You can add as much content as you want here, including images, lists, and more.
          </p>
          <img src="/public/Gallery_Component/image4.png" alt="Blog Visual" className="blog-modal-inline-image" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Etiam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <ul>
            <li>Key point one about the blog topic.</li>
            <li>Another important insight for the reader.</li>
            <li>Something inspiring and actionable.</li>
          </ul>
          <p>
            Thank you for reading! Stay tuned for more inspiring stories and updates from Asha Kiran grd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogModal; 