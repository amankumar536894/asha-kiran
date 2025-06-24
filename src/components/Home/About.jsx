import './About.css'

function About() {
  return (
    <section className="about-section">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 className='about-header'>About Us</h2>
      </div>
      <div className="container about-content-wrapper">
        <div className="row align-items-center">
          <div className="col-lg-6 about-img-col about-img-col-large">
            <div className="about-img-wrapper animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80"
                alt="Bodhi Foundation in action"
                className="about-img about-img-large"
              />
            </div>
          </div>
          <div className="col-lg-6 about-text-col animate-slide-in">
            <h2 className="about-title">
              Welcome to <span>Asha Kiran GRD</span>.
            </h2>
            <p className="about-description">
              <div>
              At Asha Kiran GRD, we believe that a stronger society starts with care, opportunity, and support for those who need it most. Since 2008, we've been on a mission to improve lives through education, health, and community empowerment. 
              </div>
              <div>
              We're proudly registered under the Societies Registration Act, XXI of 1860 (Reg. No. 1180/2008-2009)—but more than paperwork, it's our impact on real people that defines us.
              </div>
            </p>
            <div className="about-stats-row">
              <div className="about-stat">
                <i className="bi bi-people-fill"></i>
                <div className="stat-label">Join Our Team</div>
                <div className="stat-value">6,472</div>
              </div>
              <div className="about-stat">
                <i className="bi bi-cash-coin"></i>
                <div className="stat-label">Donate Now</div>
                <div className="stat-value">₹38,768</div>
              </div>
              <div className="about-stat">
                <i className="bi bi-graph-up-arrow"></i>
                <div className="stat-label">Total Fund Raised</div>
                <div className="stat-value">1,193,210</div>
              </div>
            </div>
            <div className="about-actions animate-fade-in">
              <a href="#donate" className="about-donate-btn">
                <i className="bi bi-arrow-right"></i> Donate Us
              </a>
              <div className="about-contact about-contact-animated">
                <span className="about-contact-icon"><i className="bi bi-telephone"></i></span>
                <span className="about-contact-label">Call Any Time</span>
                <span className="about-contact-value">+91 76967 28189</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 