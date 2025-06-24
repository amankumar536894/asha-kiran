import React from "react";
import './OurMission.css' 

function OurMission() {
    return(
      <section className="content-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-description">
              Empowering communities through education, healthcare, and sustainable development.
            </p>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="bi bi-book"></i>
                  </div>
                  <h5 className="feature-title">Education</h5>
                  <p className="feature-text">
                    Providing quality education to underprivileged children and youth.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="bi bi-heart-pulse"></i>
                  </div>
                  <h5 className="feature-title">Healthcare</h5>
                  <p className="feature-text">
                    Ensuring access to basic healthcare services for all communities.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="bi bi-tree"></i>
                  </div>
                  <h5 className="feature-title">Development</h5>
                  <p className="feature-text">
                    Supporting sustainable development initiatives and community projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default OurMission;