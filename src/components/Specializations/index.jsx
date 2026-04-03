import React from 'react';
import './index.css';

const Specializations = () => {
  const specializations = [
    {
      icon: '❤️',
      title: 'Interventional Cardiology',
      description: 'Advanced cardiac procedures including angioplasty and stenting'
    },
    {
      icon: '🫀',
      title: 'Heart Failure Management',
      description: 'Comprehensive treatment for chronic heart conditions'
    },
    {
      icon: '🔬',
      title: 'Preventive Cardiology',
      description: 'Risk assessment and prevention strategies'
    },
    {
      icon: '🏥',
      title: 'Cardiac Rehabilitation',
      description: 'Post-treatment recovery and lifestyle management'
    },
    {
      icon: '👨‍⚕️',
      title: 'Echocardiography',
      description: 'Advanced cardiac imaging and diagnostics'
    },
    {
      icon: '💊',
      title: 'Hypertension Management',
      description: 'Blood pressure control and medication management'
    }
  ];

  return (
    <div className="global-card">
      <div className="specializations-content">
        <h2 className="section-title">Specializations</h2>
        <div className="specializations-grid">
          {specializations.map((spec, index) => (
            <div key={index} className="specialization-card">
              <div className="spec-icon">{spec.icon}</div>
              <div className="spec-title">{spec.title}</div>
              <div className="spec-description">{spec.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specializations;
