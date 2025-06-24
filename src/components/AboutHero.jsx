import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero about-hero--fullwidth">
      <div className="about-hero__content">
        <h1 className="about-hero__title">Lighting the Path to Brighter Futures</h1>
        <p className="about-hero__subtitle">
          At Asha Kiran GRD, we strive to bring hope and opportunity to underprivileged communities through education, empowerment, and compassion. Be a part of our journey to create lasting change.
        </p>
        <a href="#join-us" className="about-hero__cta">Support Our Cause</a>
      </div>
    </section>
  );
};

export default AboutHero; 