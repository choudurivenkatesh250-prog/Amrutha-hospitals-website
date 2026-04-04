import React from 'react';
import { Star, CheckCircle2, Building2, Calendar, MapPin, Users, MessageCircle } from 'lucide-react';
import './index.css';

export default function DoctorProfile({ doctor }) {
  // Debug: Log received doctor data
  console.log('DoctorProfile received doctor:', doctor);
  
  if (!doctor) {
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
              <h2>{doctor.name || 'Doctor Name'} <CheckCircle2 className="badge-icon" /></h2>
              <p className="specialty">{doctor.specialty || 'Specialty'}</p>
              <div className="rating">{doctor.rating || '4.5'} <Star className="star-icon" /></div>
            </div>
          </div>
          <div className="stats-actions">
            <div className="stat"><span>Followers</span><strong>{doctor.followers || '1,200'}</strong></div>
            <div className="stat"><span>Following</span><strong>{doctor.following || '25K'}</strong></div>
            <div className="stat"><span>Posts</span><strong>{doctor.posts || '450'}</strong></div>
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
              Hello I am {doctor.name} a {doctor.specialty} with {doctor.experience} of experience. 
              I am dedicated to providing the best medical care to my patients and staying updated with the latest medical advancements.
              I speak {doctor.languages || 'English, Hindi'} and am committed to making my patients feel comfortable and well-cared for.
            </p>
            <div className="languages">
              <strong>Language Spoken</strong>
              {(doctor.languages || 'English, Hindi').split(', ').map((lang, index) => (
                <span key={index} className="lang-tag">{lang}</span>
              ))}
            </div>
          </section>

          <section className="section-card">
            <h3>Clinic Information</h3>
            <div className="clinic-info">
              <div className="info-item">
                <MapPin size={16} className="info-icon" />
                <span>{doctor.location || 'Hyderabad'}</span>
              </div>
              <div className="info-item">
                <Building2 size={16} className="info-icon" />
                <span>Amrutam Hospital</span>
              </div>
              <div className="info-item">
                <Users size={16} className="info-icon" />
                <span>{doctor.experience || '5 years'} experience</span>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h3>I Specialize In</h3>
            <div className="specialize-grid">
              {(doctor.specialty || '').includes('Cardiologist') && [
                'Heart Health', 'Cardiac Surgery', 'Blood Pressure', 'Chest Pain'
              ].map(spec => (
                 <div key={spec} className="spec-item">
                    <div className="spec-icon"><CheckCircle2 /></div>
                    <span>{spec}</span>
                 </div>
              ))}
              {(doctor.specialty || '').includes('Dermatologist') && [
                'Skin Care', 'Acne Treatment', 'Cosmetic Dermatology', 'Skin Cancer'
              ].map(spec => (
                 <div key={spec} className="spec-item">
                    <div className="spec-icon"><CheckCircle2 /></div>
                    <span>{spec}</span>
                 </div>
              ))}
              {(doctor.specialty || '').includes('Pediatrician') && [
                'Child Health', 'Vaccination', 'Growth & Development', 'Pediatric Emergency'
              ].map(spec => (
                 <div key={spec} className="spec-item">
                    <div className="spec-icon"><CheckCircle2 /></div>
                    <span>{spec}</span>
                 </div>
              ))}
              {(doctor.specialty || '').includes('Orthopedic') && [
                'Bone Health', 'Joint Replacement', 'Sports Medicine', 'Fracture Care'
              ].map(spec => (
                 <div key={spec} className="spec-item">
                    <div className="spec-icon"><CheckCircle2 /></div>
                    <span>{spec}</span>
                 </div>
              ))}
              {(doctor.specialty || '').includes('Neurologist') && [
                'Brain Health', 'Nerve Disorders', 'Stroke Care', 'Headache Treatment'
              ].map(spec => (
                 <div key={spec} className="spec-item">
                    <div className="spec-icon"><CheckCircle2 /></div>
                    <span>{spec}</span>
                 </div>
              ))}
              {(doctor.specialty || '').includes('Endocrinologist') && [
                'Diabetes Care', 'Hormone Balance', 'Thyroid Disorders', 'Metabolic Health'
              ].map(spec => (
                 <div key={spec} className="spec-item">
                    <div className="spec-icon"><CheckCircle2 /></div>
                    <span>{spec}</span>
                 </div>
              ))}
              {(doctor.specialty || '').includes('Infertility') && [
                'Women\'s Health', 'Fertility Treatment', 'IVF', 'Reproductive Health'
              ].map(spec => (
                 <div key={spec} className="spec-item">
                    <div className="spec-icon"><CheckCircle2 /></div>
                    <span>{spec}</span>
                 </div>
              ))}
              {(doctor.specialty || '').includes('General Physician') && [
                'Primary Care', 'Preventive Health', 'General Medicine', 'Health Checkups'
              ].map(spec => (
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
              <strong className="fee-amount">{doctor.videoPrice || '₹800'}</strong>
            </div>

            <h4>Select your mode of session</h4>
            <div className="mode-grid">
              <div className="mode-box">
                <strong>In-Clinic</strong>
                <small>45 Mins</small>
              </div>
              <div className="mode-box active">
                <strong>Video <CheckCircle2 size={14}/></strong>
                <small>30 Mins</small>
              </div>
              <div className="mode-box">
                <strong>Chat</strong>
                <small>15 Mins</small>
              </div>
            </div>

            <h4>Pick a time slot <Calendar size={18} className="calendar-icon" /></h4>
            <div className="dates-slider">
              <button>&lt;</button>
              <div className="date-box active">
                <strong>Mon, 10 Oct</strong>
                <small>10 slots</small>
              </div>
              <div className="date-box">
                <strong>Tue, 11 Oct</strong>
                <small>08 slots</small>
              </div>
              <div className="date-box">
                <strong>Wed, 12 Oct</strong>
                <small>05 slots</small>
              </div>
              <button>&gt;</button>
            </div>

            <div className="time-slots">
              <h5>Morning</h5>
              <div className="slots-grid">
                {['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM'].map(t => (
                  <span key={t} className="slot">{t}</span>
                ))}
                <span className="slot active">11:00 AM</span>
              </div>
            </div>

            <div className="consultation-fees">
              <h5>Consultation Fees</h5>
              <div className="fee-cards">
                <div className="fee-card">
                  <MessageCircle size={16} />
                  <span>Video Consultation</span>
                  <strong>{doctor.videoPrice || '₹800'}</strong>
                </div>
                <div className="fee-card">
                  <MessageCircle size={16} />
                  <span>Chat Consultation</span>
                  <strong>{doctor.chatPrice || 'Free'}</strong>
                </div>
              </div>
            </div>

            <button className="btn-book-large">Make An Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
