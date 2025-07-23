import React, { useState, useRef } from 'react';
import './CareerForm.css';
import emailjs from '@emailjs/browser';

const POSITIONS = [
  'Select Position',
  'Volunteer',
  'Other',
];

// Replace these with your actual EmailJS values
const SERVICE_ID = 'service_xtfxpad';
const TEMPLATE_ID = 'template_jxe3b2f';
const PUBLIC_KEY = 'ht6Mxy_KLv6WTH5Bw'; // formerly called USER_ID

const CareerForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    linkedin: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    setError(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setSending(false);
        setForm({ name: '', email: '', phone: '', position: '', linkedin: '', message: '' });
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to send application. Please try again.');
        setSending(false);
      });
  };

  return (
    <section className="career-form-section">
      <div className="career-form-container">
        <h2 className="career-form-title">Apply for a Position</h2>
        {submitted ? (
          <div className="career-form-success">
            Thank you for applying! We will review your application and contact you soon.
          </div>
        ) : (
          <form className="career-form" ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <div className="career-form-row">
              <label className="career-form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="career-form-input"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="career-form-row">
              <label className="career-form-label">Email</label>
              <input
                type="email"
                name="email"
                className="career-form-input"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="career-form-row">
              <label className="career-form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                className="career-form-input"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10,15}"
              />
            </div>
            <div className="career-form-row">
              <label className="career-form-label">Position</label>
              <select
                name="position"
                className="career-form-input"
                value={form.position}
                onChange={handleChange}
                required
              >
                {POSITIONS.map(pos => (
                  <option key={pos} value={pos === 'Select Position' ? '' : pos} disabled={pos === 'Select Position'}>{pos}</option>
                ))}
              </select>
            </div>

            {/* No file upload because EmailJS cannot send files directly */}
            
            <div className="career-form-row">
              <label className="career-form-label">LinkedIn Profile <span className="career-form-label-hint">(optional)</span></label>
              <input
                type="url"
                name="linkedin"
                className="career-form-input"
                placeholder="LinkedIn URL"
                value={form.linkedin}
                onChange={handleChange}
              />
            </div>
            <div className="career-form-row">
              <label className="career-form-label">Cover Letter / Message</label>
              <textarea
                name="message"
                className="career-form-input career-form-textarea"
                placeholder="Tell us why you want to join..."
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
              ></textarea>
            </div>
            <button className="career-form-btn" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Submit Application'}
            </button>
            {error && <div className="career-form-error">{error}</div>}
          </form>
        )}
      </div>
    </section>
  );
};

export default CareerForm;
