import React, { useState, useRef } from 'react';
import './ContactSection.css';
import emailjs from '@emailjs/browser';

const CONTACT = {
  address: 'Malti Niwas, 2nd floor, Anisabad, Patna, India',
  phone: '+91 82351 51802',
  email: 'ashakirangrd11@gmail.com',
  socials: [
    { icon: 'bi-facebook', url: 'https://www.facebook.com/share/1Ccvekj7od/', label: 'Facebook' },
    { icon: 'bi-youtube', url: 'https://youtube.com/@tcs-lh4ry?si=CQpZL5QrSksm52ms', label: 'YouTube' },
    { icon: 'bi-whatsapp', url: 'https://wa.me/917696728189', label: 'WhatsApp' },
    { icon: 'bi-envelope-fill', url: 'mailto:ashakirangrd11@gmail.com.org', label: 'Email' },
  ],
};

// Replace these with your actual EmailJS values
const SERVICE_ID = 'service_ru7zxzl';
const TEMPLATE_ID = 'template_v2tgome';
const PUBLIC_KEY = '2uDeDyp8Jqq-PJAGC';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    setError(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setSending(false);
      })
      .catch(error => {
        console.error("EmailJS Error:", error);
        setError('Failed to send message. Please try again.');
        setSending(false);
      });
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
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit} autoComplete="off">
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
              <button className="contact-form-btn" type="submit" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {error && <div className="career-form-error">{error}</div>}
            </form>
          )}
        </div>
      </div>

      {/* Embedded Map */}
      <div className="contact-map-box">
        <iframe
          title="Asha Kiran GRD Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6097341247955!2d85.0983704!3d25.584647699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed571a4fb13005%3A0x4791884ba938dbef!2sAnisabad%20Patna!5e0!3m2!1sen!2sin!4v1750945155671!5m2!1sen!2sin"
          width="100%"
          height="320"
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
