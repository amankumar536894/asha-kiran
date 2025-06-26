import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero about-hero--fullwidth">
      <div className="about-hero__bg-overlay">
        <div className="about-hero__content">
          <h1 className="about-hero__title">Lighting Lives Since 2008</h1>
          <p className="about-hero__subtitle">
            Asha Kiran GRD is dedicated to illuminating the lives of underprivileged communities through education, empowerment, and compassion. Join us in our mission to create brighter futures and lasting change.
          </p>
          <a href="#join-us" className="about-hero__cta">Join Our Mission</a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 