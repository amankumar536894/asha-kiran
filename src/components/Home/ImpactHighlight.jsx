import React from 'react';
import './ImpactHighlight.css';

function ImpactHighlight() {
  return (
    <section className="impact-highlight-section container py-5">
      <div className="impact-highlight-header text-center mb-4">
        <h2 className="impact-highlight-title">
          Together, We Make a Difference
        </h2>
        <p className="impact-highlight-desc">
          Every small act of kindness creates a ripple of hope. Here's a glimpse of the positive change we're building—thanks to supporters like you.
        </p>
      </div>
      <div className="row text-center g-4">
        <div className="col-6 col-md-3">
          <div className="impact-highlight-card">
            <div className="impact-highlight-icon">
              <i className="bi bi-people-fill"></i>
            </div>
            <div className="impact-highlight-value">12,500+</div>
            <div className="impact-highlight-label">Lives Impacted</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="impact-highlight-card">
            <div className="impact-highlight-icon">
              <i className="bi bi-book"></i>
            </div>
            <div className="impact-highlight-value">3,200+</div>
            <div className="impact-highlight-label">Children Educated</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="impact-highlight-card">
            <div className="impact-highlight-icon">
              <i className="bi bi-heart-pulse"></i>
            </div>
            <div className="impact-highlight-value">1,800+</div>
            <div className="impact-highlight-label">Health Camps</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="impact-highlight-card">
            <div className="impact-highlight-icon">
              <i className="bi bi-tree"></i>
            </div>
            <div className="impact-highlight-value">5,000+</div>
            <div className="impact-highlight-label">Trees Planted</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactHighlight; 