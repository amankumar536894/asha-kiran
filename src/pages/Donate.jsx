import React, { useState } from 'react';
import './Donate.css';
import Footer from '../components/Footer';

function Donate() {
  const [form, setForm] = useState({ name: '', email: '', amount: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', amount: '', message: '' });
  };

  return (
    <>
      <section className="donate-section">
        <div className="donate-container">
          <h1 className="donate-title">Support Our Mission</h1>
          <p className="donate-desc">Your contribution helps us bring hope, education, and empowerment to those who need it most. Every donation makes a difference!</p>
          {submitted ? (
            <div className="donate-success">Thank you for your generous donation!</div>
          ) : (
            <form className="donate-form" onSubmit={handleSubmit} autoComplete="off">
              <div className="donate-form-row">
                <input
                  type="text"
                  name="name"
                  className="donate-form-input"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="donate-form-row">
                <input
                  type="email"
                  name="email"
                  className="donate-form-input"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="donate-form-row">
                <input
                  type="number"
                  name="amount"
                  className="donate-form-input"
                  placeholder="Amount (INR)"
                  value={form.amount}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
              <div className="donate-form-row">
                <textarea
                  name="message"
                  className="donate-form-input donate-form-textarea"
                  placeholder="Message (optional)"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                ></textarea>
              </div>
              <button className="donate-form-btn" type="submit">Donate Now</button>
            </form>
          )}
          <div className="donate-divider">or</div>
          <div className="donate-bank-details">
            <h2 className="donate-bank-title">Bank/UPI Details</h2>
            <div className="donate-bank-info">
              <div><strong>Account Name:</strong> Asha Kiran GRD</div>
              <div><strong>Account Number:</strong> 1234567890</div>
              <div><strong>IFSC:</strong> ABCD0123456</div>
              <div><strong>Bank Name:</strong> State Bank of India</div>
              <div><strong>UPI ID:</strong> ashakiran@sbi</div>
            </div>
            <div className="donate-qr-section">
              <img src="/assets/upi_qr_placeholder.png" alt="UPI QR Code" className="donate-qr-img" />
              <div className="donate-qr-caption">Scan to Donate via UPI</div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </>
  );
}

export default Donate; 