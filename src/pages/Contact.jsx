import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="display-4 mb-4 text-center">Contact Us</h1>
          
          <div className="row">
            <div className="col-md-6">
              <h3>Get in Touch</h3>
              <p className="lead mb-4">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              
              <div className="mb-4">
                <h5>Contact Information</h5>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  <span>123 Foundation Street, City, State 12345</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-envelope-fill me-2"></i>
                  <span>info@bodhifoundation.org</span>
                </div>
              </div>

              <div className="mb-4">
                <h5>Office Hours</h5>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed</p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Send us a Message</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
