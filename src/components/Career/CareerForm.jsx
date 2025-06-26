import React, { useState } from 'react';
import './CareerForm.css';

const POSITIONS = [
  'Select Position',
  'Volunteer',
  'Other',
];

const CareerForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    linkedin: '',
    message: '',
    resume: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setForm({ ...form, resume: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', position: '', linkedin: '', message: '', resume: null });
  };

  return (
    <section className="career-form-section">
      <div className="career-form-container">
        <h2 className="career-form-title">Apply for a Position</h2>
        {submitted ? (
          <div className="career-form-success">Thank you for applying! We will review your application and contact you soon.</div>
        ) : (
          <form className="career-form" onSubmit={handleSubmit} autoComplete="off">
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
            <div className="career-form-row">
              <label className="career-form-label">Resume <span className="career-form-label-hint">(PDF, DOC, DOCX)</span></label>
              <input
                type="file"
                name="resume"
                className="career-form-input"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
            </div>
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
                placeholder="Tell us why you want to join Asha Kiran GRD..."
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
              ></textarea>
            </div>
            <button className="career-form-btn" type="submit">Submit Application</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default CareerForm; 