import React from 'react';
import './index.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="global-card">
        <div className="about-content">
          <h1 className="about-title">About Amrutam Hospital</h1>
          
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Amrutam Hospital is dedicated to providing exceptional healthcare services 
              with compassion and excellence. We strive to make quality medical care 
              accessible to everyone in our community.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Our Vision</h2>
            <p>
              To be the leading healthcare provider known for our commitment to 
              patient-centered care, medical innovation, and community wellness.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Compassion</h3>
                <p>We treat every patient with empathy and kindness</p>
              </div>
              <div className="value-item">
                <h3>Excellence</h3>
                <p>We maintain the highest standards in medical care</p>
              </div>
              <div className="value-item">
                <h3>Integrity</h3>
                <p>We operate with transparency and honesty</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>We embrace modern medical technologies and treatments</p>
              </div>
            </div>
          </div>
          
          <div className="about-section">
            <h2>Contact Information</h2>
            <div className="contact-info">
              <p><strong>Address:</strong> 123 Healthcare Avenue, Medical District, City - 500001</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Email:</strong> info@amrutamhospital.com</p>
              <p><strong>Emergency:</strong> 24/7 Emergency Services Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
