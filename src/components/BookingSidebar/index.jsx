import React, { useState } from 'react';
import './index.css';

const BookingSidebar = () => {
  const [mode, setMode] = useState('Video');
  const [day, setDay] = useState('Mon, 10 Oct');
  const [time, setTime] = useState('11:00 AM');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStatus, setBookingStatus] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('cardiologist');

  // Profile data for different doctors
  const profileData = {
    cardiologist: {
      name: 'Dr. Arjun Patel',
      specialty: 'Cardiologist',
      experience: '12 years',
      fee: '₹1200.00',
      modes: [
        { id: 'In-Clinic', time: '45 Mins' },
        { id: 'Video', time: '30 Mins' },
        { id: 'Chat', time: '15 Mins' }
      ],
      availability: {
        days: [
          { id: 'Mon, 10 Oct', slots: '10 slots', isGreen: true },
          { id: 'Tue, 11 Oct', slots: '08 slots', isGreen: false },
          { id: 'Wed, 12 Oct', slots: '05 slots', isGreen: false },
          { id: 'Thu, 13 Oct', slots: '12 slots', isGreen: true },
          { id: 'Fri, 14 Oct', slots: '15 slots', isGreen: true }
        ],
        times: ['09:00 AM', '09:30 AM', '10:00 AM', '10:15 AM', '10:45 AM', '11:00 AM', '11:30 AM']
      }
    },
    dermatologist: {
      name: 'Dr. Sarah Johnson',
      specialty: 'Dermatologist',
      experience: '5 years',
      fee: '₹600.00',
      modes: [
        { id: 'In-Clinic', time: '30 Mins' },
        { id: 'Video', time: '20 Mins' },
        { id: 'Chat', time: '10 Mins' }
      ],
      availability: {
        days: [
          { id: 'Mon, 10 Oct', slots: '15 slots', isGreen: true },
          { id: 'Tue, 11 Oct', slots: '12 slots', isGreen: true },
          { id: 'Wed, 12 Oct', slots: '08 slots', isGreen: false },
          { id: 'Thu, 13 Oct', slots: '10 slots', isGreen: true },
          { id: 'Fri, 14 Oct', slots: '20 slots', isGreen: true }
        ],
        times: ['08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM']
      }
    },
    pediatrician: {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      experience: '8 years',
      fee: '₹900.00',
      modes: [
        { id: 'In-Clinic', time: '40 Mins' },
        { id: 'Video', time: '25 Mins' },
        { id: 'Chat', time: '12 Mins' }
      ],
      availability: {
        days: [
          { id: 'Mon, 10 Oct', slots: '08 slots', isGreen: true },
          { id: 'Tue, 11 Oct', slots: '10 slots', isGreen: false },
          { id: 'Wed, 12 Oct', slots: '06 slots', isGreen: false },
          { id: 'Thu, 13 Oct', slots: '14 slots', isGreen: true },
          { id: 'Fri, 14 Oct', slots: '18 slots', isGreen: true }
        ],
        times: ['08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM']
      }
    }
  };

  // Get current profile data
  const currentProfile = profileData[selectedProfile] || profileData.cardiologist;
  const modes = currentProfile.modes;
  const days = currentProfile.availability.days;
  const times = currentProfile.availability.times;

  const handleBookAppointment = () => {
    setIsBooking(true);
    setBookingStatus('');
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      setBookingStatus('success');
      
      // Reset form after successful booking
      setTimeout(() => {
        setBookingStatus('');
        setMode('Video');
        setDay('Mon, 10 Oct');
        setTime('11:00 AM');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="global-card sidebar-sticky">
      <div className="sidebar-body">
        {/* Profile Selection */}
        <div className="profile-selector">
          <div className="section-title">Select Doctor Profile</div>
          <div className="profile-grid">
            {Object.keys(profileData).map(profile => (
              <div 
                key={profile}
                className={`profile-card ${selectedProfile === profile ? 'active' : ''}`}
                onClick={() => setSelectedProfile(profile)}
              >
                <div className="profile-name">{profileData[profile].name}</div>
                <div className="profile-specialty">{profileData[profile].specialty}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Current Profile Info */}
        <div className="profile-info">
          <div className="info-row">
            <span className="info-label">Doctor:</span>
            <span className="info-value">{currentProfile.name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Specialty:</span>
            <span className="info-value">{currentProfile.specialty}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Experience:</span>
            <span className="info-value">{currentProfile.experience}</span>
          </div>
        </div>
        
        {/* Fee Box */}
        <div className="fee-box">
          <span className="fee-label">Appointment Fee</span>
          <span className="fee-amount">{currentProfile.fee}</span>
        </div>

        {/* Session Mode Selection */}
        <div className="section-title">Select your mode of session</div>
        <div className="grid-3">
          {modes.map(m => (
            <div 
              key={m.id} 
              className={`select-box ${mode === m.id ? 'active' : ''}`}
              onClick={() => setMode(m.id)}
            >
              <div className="select-box-title">{m.id}</div>
              <div className="select-box-sub">{m.time}</div>
            </div>
          ))}
        </div>

        {/* Day Selection */}
        <div className="section-title">
          Pick a time slot
          <span className="calendar-icon">📅</span>
        </div>
        <div className="grid-3 no-gap">
          {days.map(d => (
            <div 
              key={d.id} 
              className={`select-box slim ${day === d.id ? 'active' : ''}`}
              onClick={() => setDay(d.id)}
            >
              <div className="select-box-title small-text">{d.id}</div>
              <div className={`select-box-sub ${d.isGreen ? 'green-text' : ''}`}>
                {d.slots}
              </div>
            </div>
          ))}
        </div>

        {/* Time Selection */}
        <div className="section-title mt-20">Morning</div>
        <div className="grid-4">
          {times.map(t => (
            <div 
              key={t} 
              className={`time-slot ${time === t ? 'active' : ''}`}
              onClick={() => setTime(t)}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Booking Status */}
        {bookingStatus === 'success' && (
          <div className="booking-success">
            ✅ Appointment booked successfully! We'll send you a confirmation shortly.
          </div>
        )}

        {/* Submit Button */}
        <button 
          className="book-submit-btn"
          onClick={handleBookAppointment}
          disabled={isBooking}
        >
          {isBooking ? 'Booking...' : 'Make An Appointment'}
        </button>
      </div>
    </div>
  );
};

export default BookingSidebar;