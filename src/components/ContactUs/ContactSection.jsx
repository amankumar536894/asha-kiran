import React, { useState } from 'react';
import './ContactSection.css';

const CONTACT = {
  address: '123 Hope Street, Near City Center, Dehradun, Uttarakhand, India',
  phone: '+91 82351 51802',
  email: 'info@ashakiran.org',
  socials: [
    { icon: 'bi-facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'bi-instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'bi-youtube', url: 'https://youtube.com', label: 'YouTube' },
    { icon: 'bi-envelope-fill', url: 'mailto:info@ashakiran.org', label: 'Email' },
  ],
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section-main">
      <div className="contact-section-flex">
        {/* Contact Info */}
        <div className="contact-info-box">
          <h2 className="contact-info-title">Get in Touch</h2>
          <div className="contact-info-row">
            <i className="bi bi-geo-alt-fill contact-info-icon"></i>
            <span>{CONTACT.address}</span>
          </div>
          <div className="contact-info-row">
            <i className="bi bi-telephone-fill contact-info-icon"></i>
            <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>{CONTACT.phone}</a>
          </div>
          <div className="contact-info-row">
            <i className="bi bi-envelope-fill contact-info-icon"></i>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div className="contact-info-socials">
            {CONTACT.socials.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="contact-social-icon">
                <i className={`bi ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <div className="contact-form-box">
          <h2 className="contact-form-title">Send Us a Message</h2>
          {submitted ? (
            <div className="contact-form-success">Thank you for reaching out! We'll get back to you soon.</div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
              <div className="contact-form-row">
                <input
                  type="text"
                  name="name"
                  className="contact-form-input"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form-row">
                <input
                  type="email"
                  name="email"
                  className="contact-form-input"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form-row">
                <input
                  type="text"
                  name="subject"
                  className="contact-form-input"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form-row">
                <textarea
                  name="message"
                  className="contact-form-input contact-form-textarea"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                ></textarea>
              </div>
              <button className="contact-form-btn" type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
      {/* Embedded Map */}
      <div className="contact-map-box">
        <iframe
          title="Asha Kiran GRD Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.123456789!2d78.0322!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929b1b1b1b1b1%3A0x123456789abcdef!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          width="100%"
          height="220"
          style={{ border: 0, borderRadius: '1.2rem', boxShadow: '0 2px 12px rgba(44,34,51,0.08)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection; 