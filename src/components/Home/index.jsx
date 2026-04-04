import React from 'react';
import './index.css';

function Home() {
  return (
    <div className="home-container">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to Amrutam Hospital</h1>
          <p className="welcome-subtitle">
            Providing quality healthcare services with compassion and excellence since 1995
          </p>
          <div className="welcome-features">
            <div className="welcome-feature">
              <span className="feature-icon">🏥</span>
              <span className="feature-text">24/7 Emergency Care</span>
            </div>
            <div className="welcome-feature">
              <span className="feature-icon">👨‍⚕️</span>
              <span className="feature-text">200+ Expert Doctors</span>
            </div>
            <div className="welcome-feature">
              <span className="feature-icon">💬</span>
              <span className="feature-text">Online Consultations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="main-content">
        {/* Statistics Section */}
        <div className="content-section stats-section">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Happy Patients</div>
              <div className="stat-description">Trusted by thousands of families</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Expert Doctors</div>
              <div className="stat-description">Across 25+ specializations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Specializations</div>
              <div className="stat-description">Comprehensive medical services</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
              <div className="stat-description">Patient satisfaction guaranteed</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="content-section services-section">
          <h2 className="section-title">Our Medical Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🏥</div>
              <h3 className="service-title">Emergency Care</h3>
              <p className="service-description">
                24/7 emergency services with dedicated medical team ready for any critical situation
              </p>
              <ul className="service-points">
                <li>Immediate medical attention</li>
                <li>Critical care specialists</li>
                <li>Advanced life support systems</li>
              </ul>
            </div>
            <div className="service-item">
              <div className="service-icon">👨‍⚕️</div>
              <h3 className="service-title">Expert Doctors</h3>
              <p className="service-description">
                200+ board-certified physicians across all major medical specializations
              </p>
              <ul className="service-points">
                <li>Experienced medical professionals</li>
                <li>Multiple specializations available</li>
                <li>Continuous medical education</li>
              </ul>
            </div>
            <div className="service-item">
              <div className="service-icon">💬</div>
              <h3 className="service-title">Online Consultations</h3>
              <p className="service-description">
                Connect with doctors through video or chat from the comfort of your home
              </p>
              <ul className="service-points">
                <li>Video consultations available</li>
                <li>Chat with medical experts</li>
                <li>Flexible appointment scheduling</li>
              </ul>
            </div>
            <div className="service-item">
              <div className="service-icon">🏥</div>
              <h3 className="service-title">Advanced Facilities</h3>
              <p className="service-description">
                State-of-the-art medical equipment and modern infrastructure for accurate diagnosis
              </p>
              <ul className="service-points">
                <li>Modern diagnostic equipment</li>
                <li>Digital health records</li>
                <li>Clean and comfortable environment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="content-section choose-section">
          <h2 className="section-title">Why Choose Amrutam Hospital?</h2>
          <div className="choose-grid">
            <div className="choose-item">
              <div className="choose-icon">🏆</div>
              <h3 className="choose-title">28 Years of Excellence</h3>
              <p className="choose-description">
                Serving the community with commitment to quality healthcare and patient satisfaction since 1995
              </p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">💰</div>
              <h3 className="choose-title">Affordable Healthcare</h3>
              <p className="choose-description">
                Transparent pricing with multiple payment options and insurance coverage for maximum accessibility
              </p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">❤️</div>
              <h3 className="choose-title">Patient-Centered Care</h3>
              <p className="choose-description">
                Personalized treatment plans with focus on patient comfort, privacy, and recovery
              </p>
            </div>
            <div className="choose-item">
              <div className="choose-icon">🌟</div>
              <h3 className="choose-title">Quality & Safety</h3>
              <p className="choose-description">
                Internationally recognized medical standards with strict safety protocols and quality control
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
