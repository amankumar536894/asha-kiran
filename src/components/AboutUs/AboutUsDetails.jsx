import React from "react";
import "./AboutUsDetails.css";

const AboutUsDetails = () => {
  return (
    <section className="aboutus-details">
      <div className="aboutus-details__container">
        <div className="aboutus-details__header">
          <h2 className="aboutus-details__title">Who We Are</h2>
          <p className="aboutus-details__subtitle">
            Empowering communities, transforming lives. Discover our vision, mission, and the values that drive us every day.
          </p>
        </div>
        <div className="aboutus-details__cards">
          <div className="aboutus-details__card">
            <div className="aboutus-details__icon" aria-hidden="true">🌟</div>
            <h3 className="aboutus-details__card-title">Our Vision</h3>
            <div className="aboutus-details__card-image-area">
              <img src="https://source.unsplash.com/400x180/?vision,hope" alt="Our Vision" className="aboutus-details__card-image" />
            </div>
            <p className="aboutus-details__card-desc">
              To create a world where every individual has the opportunity to thrive, regardless of their background or circumstances.
            </p>
          </div>
          <div className="aboutus-details__card">
            <div className="aboutus-details__icon" aria-hidden="true">🤝</div>
            <h3 className="aboutus-details__card-title">Our Mission</h3>
            <div className="aboutus-details__card-image-area">
              <img src="https://source.unsplash.com/400x180/?mission,community" alt="Our Mission" className="aboutus-details__card-image" />
            </div>
            <p className="aboutus-details__card-desc">
              We strive to uplift underprivileged communities through education, healthcare, and empowerment initiatives that foster lasting change.
            </p>
          </div>
          <div className="aboutus-details__card">
            <div className="aboutus-details__icon" aria-hidden="true">💛</div>
            <h3 className="aboutus-details__card-title">Our Values</h3>
            <div className="aboutus-details__card-image-area">
              <img src="https://source.unsplash.com/400x180/?values,teamwork" alt="Our Values" className="aboutus-details__card-image" />
            </div>
            <ul className="aboutus-details__values-list">
              <li>Compassion & Empathy</li>
              <li>Integrity & Transparency</li>
              <li>Inclusivity & Respect</li>
              <li>Collaboration & Innovation</li>
            </ul>
          </div>
        </div>
        <div className="aboutus-details__cta-section">
          <h4 className="aboutus-details__cta-title">Join Us in Making a Difference</h4>
          <p className="aboutus-details__cta-desc">
            Whether you want to volunteer, donate, or simply spread the word, your support helps us light up more lives. Together, we can build a brighter future.
          </p>
          <a href="#donate" className="aboutus-details__cta-btn">Get Involved</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDetails; 