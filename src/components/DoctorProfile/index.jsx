import React from 'react';
import { Star, CheckCircle2, Building2, Calendar } from 'lucide-react';
import './index.css';

export default function DoctorProfile() {
  return (
    <div className="profile-container">
      {/* Banner */}
      <div className="profile-banner">
        <div className="banner-bg"></div>
        <div className="banner-content">
          <div className="profile-info">
            <img src="https://i.pravatar.cc/150?img=9" alt="Doctor" className="profile-img" />
            <div>
              <h2>Dr. Bruce Willis <CheckCircle2 className="badge-icon" /></h2>
              <p className="specialty">Gynecologist</p>
              <div className="rating">4.2 <Star className="star-icon" /></div>
            </div>
          </div>
          <div className="stats-actions">
            <div className="stat"><span>Followers</span><strong>850</strong></div>
            <div className="stat"><span>Following</span><strong>18K</strong></div>
            <div className="stat"><span>Posts</span><strong>250</strong></div>
            <button className="btn-book-nav">Book an Appointment</button>
          </div>
        </div>
      </div>

      <div className="profile-grid">
        {/* Left Column */}
        <div className="left-column">
          <section className="section-card">
            <div className="section-header">
              <h3>A Little About me</h3>
              <button className="btn-follow">Follow +</button>
            </div>
            <p className="about-text">
              Hello I am Dr. Bruce Willis a Gynecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and senior doctors...
            </p>
            <div className="languages">
              <strong>Language Spoken</strong>
              <span className="lang-tag">English</span>
              <span className="lang-tag">Hindi</span>
              <span className="lang-tag">Telugu</span>
            </div>
          </section>

          <section className="section-card">
            <h3>I Specialize In</h3>
            <div className="specialize-grid">
              {['Women\'s Health', 'Skin Care', 'Immunity', 'Hair Care'].map(spec => (
                 <div key={spec} className="spec-item">
                    <div className="spec-icon"><CheckCircle2 /></div>
                    <span>{spec}</span>
                 </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (Widget) */}
        <div className="right-column">
          <div className="booking-widget">
            <div className="fee-row">
              <span>Appointment Fee</span>
              <strong className="fee-amount">₹999.00</strong>
            </div>

            <h4>Select your mode of session</h4>
            <div className="mode-grid">
              <div className="mode-box"><strong>In-Clinic</strong><small>45 Mins</small></div>
              <div className="mode-box active"><strong>Video <CheckCircle2 size={14}/></strong><small>45 Mins</small></div>
              <div className="mode-box"><strong>Chat</strong><small>10 Mins</small></div>
            </div>

            <h4>Pick a time slot <Calendar size={18} className="calendar-icon" /></h4>
            <div className="dates-slider">
              <button>&lt;</button>
              <div className="date-box active"><strong>Mon, 10 Oct</strong><small>10 slots</small></div>
              <div className="date-box"><strong>Tue, 11 Oct</strong><small>02 slots</small></div>
              <div className="date-box"><strong>Wed, 12 Oct</strong><small>05 slots</small></div>
              <button>&gt;</button>
            </div>

            <div className="time-slots">
              <h5>Morning</h5>
              <div className="slots-grid">
                {['09:00 AM', '09:30 AM', '10:00 AM'].map(t => <span key={t} className="slot">{t}</span>)}
                <span className="slot active">11:00 AM</span>
              </div>
            </div>

            <button className="btn-book-large">Make An Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
