import React from 'react';
import './index.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="global-card">
        <div className="about-content">
          <h1 className="about-title">About Amrutam</h1>
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Amrutam is dedicated to providing accessible, quality healthcare through technology. 
              We connect patients with expert doctors across various specializations, making 
              healthcare convenient and affordable for everyone.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Our Vision</h2>
            <p>
              To become India's most trusted healthcare platform by bridging the gap between 
              patients and healthcare providers through innovative technology and compassionate care.
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>500+ Expert Doctors</h3>
              <p>Experienced specialists across multiple medical fields</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h3>24/7 Availability</h3>
              <p>Round-the-clock medical consultation and support</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💊</div>
              <h3>Affordable Care</h3>
              <p>Competitive pricing for quality healthcare services</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your health information is always protected</p>
            </div>
          </div>
          
          <div className="about-section">
            <h2>Why Choose Amrutam?</h2>
            <ul>
              <li>Easy appointment booking with just a few clicks</li>
              <li>Video, chat, and in-clinic consultation options</li>
              <li>Verified and experienced medical professionals</li>
              <li>Personalized healthcare recommendations</li>
              <li>Comprehensive health records management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
