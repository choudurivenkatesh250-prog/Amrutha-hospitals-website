import React from 'react';
import {
  Star,
  CheckCircle2,
  Building2,
  Calendar,
  MapPin,
  Users,
  MessageCircle,
} from 'lucide-react';
import './index.css';

export default function DoctorProfile({ doctor }) {
  console.log('DoctorProfile received doctor:', doctor);

  // Safety check
  if (!doctor || Object.keys(doctor).length === 0) {
    return (
      <div className="profile-container">
        <div className="no-doctor-selected">
          <h3>No Doctor Selected</h3>
          <p>Please select a doctor from Find Doctors page to view their profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      {/* Banner */}
      <div className="profile-banner">
        <div className="banner-bg"></div>

        <div className="banner-content">
          <div className="profile-info">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="profile-img"
              onError={(e) => {
                e.target.src = 'https://i.pravatar.cc/150?img=1';
              }}
            />

            <div>
              <h2>
                {doctor.name || 'Doctor Name'}{' '}
                <CheckCircle2 className="badge-icon" />
              </h2>

              <p className="specialty">
                {doctor.specialty || 'Specialty'}
              </p>

              <div className="rating">
                {doctor.rating || '4.5'} <Star className="star-icon" />
              </div>
            </div>
          </div>

          <div className="stats-actions">
            <div className="stat">
              <span>Followers</span>
              <strong>{doctor.followers || '1,200'}</strong>
            </div>

            <div className="stat">
              <span>Following</span>
              <strong>{doctor.following || '25K'}</strong>
            </div>

            <div className="stat">
              <span>Posts</span>
              <strong>{doctor.posts || '450'}</strong>
            </div>

            <button className="btn-book-nav">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="profile-grid">
        {/* LEFT COLUMN */}
        <div className="left-column">
          {/* About */}
          <section className="section-card">
            <div className="section-header">
              <h3>A Little About me</h3>
              <button className="btn-follow">Follow +</button>
            </div>

            <p className="about-text">
              Hello I am {doctor.name} a {doctor.specialty} with{' '}
              {doctor.experience} of experience. I am dedicated to providing
              the best medical care to my patients.
            </p>

            <div className="languages">
              <strong>Language Spoken</strong>
              {(doctor.languages || 'English, Hindi')
                .split(', ')
                .map((lang, index) => (
                  <span key={index} className="lang-tag">
                    {lang}
                  </span>
                ))}
            </div>
          </section>

          {/* Clinic Info */}
          <section className="section-card">
            <h3>Clinic Information</h3>

            <div className="clinic-info">
              <div className="info-item">
                <MapPin size={16} />
                <span>{doctor.location || 'Hyderabad'}</span>
              </div>

              <div className="info-item">
                <Building2 size={16} />
                <span>Amrutam Hospital</span>
              </div>

              <div className="info-item">
                <Users size={16} />
                <span>{doctor.experience || '5 years'} experience</span>
              </div>
            </div>
          </section>

          {/* Specializations */}
          <section className="section-card">
            <h3>I Specialize In</h3>

            <div className="specialize-grid">
              {(doctor.specialty || '').includes('Cardiologist') &&
                ['Heart Health', 'Cardiac Surgery', 'Blood Pressure'].map(
                  (spec) => (
                    <div key={spec} className="spec-item">
                      <CheckCircle2 />
                      <span>{spec}</span>
                    </div>
                  )
                )}

              {(doctor.specialty || '').includes('Dermatologist') &&
                ['Skin Care', 'Acne', 'Cosmetic'].map((spec) => (
                  <div key={spec} className="spec-item">
                    <CheckCircle2 />
                    <span>{spec}</span>
                  </div>
                ))}

              {(doctor.specialty || '').includes('General Physician') &&
                ['Primary Care', 'Health Checkups'].map((spec) => (
                  <div key={spec} className="spec-item">
                    <CheckCircle2 />
                    <span>{spec}</span>
                  </div>
                ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          <div className="booking-widget">
            <div className="fee-row">
              <span>Appointment Fee</span>
              <strong>{doctor.videoPrice || '₹800'}</strong>
            </div>

            <h4>Select your mode</h4>

            <div className="mode-grid">
              <div className="mode-box">In-Clinic</div>
              <div className="mode-box active">Video</div>
              <div className="mode-box">Chat</div>
            </div>

            <h4>
              Pick time <Calendar size={16} />
            </h4>

            <div className="time-slots">
              {['09:00 AM', '10:00 AM', '11:00 AM'].map((t) => (
                <span key={t} className="slot">
                  {t}
                </span>
              ))}
            </div>

            <div className="consultation-fees">
              <div className="fee-card">
                <MessageCircle size={16} />
                <span>Video</span>
                <strong>{doctor.videoPrice || '₹800'}</strong>
              </div>

              <div className="fee-card">
                <MessageCircle size={16} />
                <span>Chat</span>
                <strong>{doctor.chatPrice || 'Free'}</strong>
              </div>
            </div>

            <button className="btn-book-large">
              Make Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}