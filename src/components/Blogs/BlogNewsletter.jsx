import React, { useState } from 'react';
import './BlogNewsletter.css';

const BlogNewsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="blog-newsletter-section">
      <div className="blog-newsletter-container">
        <h2 className="blog-newsletter-title">Stay Inspired!</h2>
        <p className="blog-newsletter-desc">
          Subscribe to our newsletter for the latest stories, updates, and inspiration from Asha Kiran GRD.
        </p>
        {submitted ? (
          <div className="blog-newsletter-success">Thank you for subscribing!</div>
        ) : (
          <form className="blog-newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="blog-newsletter-input"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button className="blog-newsletter-btn" type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default BlogNewsletter; 