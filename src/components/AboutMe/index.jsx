import React from 'react';
import './index.css';

const AboutMe = () => {
  return (
    <div className="global-card">
      <div className="about-me-content">
        <h2 className="section-title">About Me</h2>
        <p className="about-description">
          Dr. Arjun Patel is a highly experienced cardiologist with over 12 years of practice 
          in cardiovascular medicine. He specializes in interventional cardiology, heart failure management, 
          and preventive cardiology. Dr. Patel is known for his patient-centered approach and 
          expertise in complex cardiac procedures.
        </p>
        <div className="education-section">
          <h3 className="subsection-title">Education</h3>
          <div className="education-item">
            <div className="edu-degree">MBBS</div>
            <div className="edu-institution">AIIMS, New Delhi</div>
            <div className="edu-year">2008</div>
          </div>
          <div className="education-item">
            <div className="edu-degree">MD - Cardiology</div>
            <div className="edu-institution">PGIMER, Chandigarh</div>
            <div className="edu-year">2012</div>
          </div>
        </div>
        <div className="experience-section">
          <h3 className="subsection-title">Experience</h3>
          <div className="experience-item">
            <div className="exp-role">Senior Consultant - Cardiology</div>
            <div className="exp-hospital">Apollo Hospitals, Hyderabad</div>
            <div className="exp-duration">2018 - Present</div>
          </div>
          <div className="experience-item">
            <div className="exp-role">Interventional Cardiologist</div>
            <div className="exp-hospital">Fortis Healthcare, Delhi</div>
            <div className="exp-duration">2015 - 2018</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
