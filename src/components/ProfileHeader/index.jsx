import React, { useState } from 'react';
import { CheckCircle, Star } from 'lucide-react';
import './index.css';

const ProfileHeader = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStatus, setBookingStatus] = useState('');
  const [currentDoctor, setCurrentDoctor] = useState('arjun');

  // Doctor profiles with male images
  const doctors = {
    arjun: {
      name: 'Dr. Arjun Patel',
      specialty: 'Cardiologist',
      image: 'https://i.pravatar.cc/150?img=10',
      rating: 4.8,
      followers: '1,200',
      following: '25K',
      posts: '450'
    },
    michael: {
      name: 'Dr. Michael Chen',
      specialty: 'Orthopedic Surgeon',
      image: 'https://i.pravatar.cc/150?img=32',
      rating: 4.9,
      followers: '2,500',
      following: '30K',
      posts: '680'
    }
  };

  const currentDoctorData = doctors[currentDoctor];

  const handleBookAppointment = () => {
    setIsBooking(true);
    setBookingStatus('');
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      setBookingStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setBookingStatus('');
      }, 3000);
    }, 2000);
  };

  const switchDoctor = (doctorKey) => {
    setCurrentDoctor(doctorKey);
    setBookingStatus('');
  };

  return (
    <div className="global-card">
      <div className="profile-banner"></div>
      <div className="profile-content">
        <img 
          src={currentDoctorData.image}
          alt={currentDoctorData.name}
          className="profile-image" 
        />
        <div className="profile-info">
          <div className="profile-name">
            <h2>{currentDoctorData.name}</h2>
            <CheckCircle size={20} color="#3b82f6" fill="#3b82f6" style={{color: 'white'}} />
          </div>
          <div className="profile-title">{currentDoctorData.specialty}</div>
          <div className="profile-stats">
            <div className="rating-badge">
              {currentDoctorData.rating} <Star size={14} fill="#fbbf24" color="#fbbf24" />
            </div>
            <span><strong>{currentDoctorData.followers}</strong> Followers</span>
            <span><strong>{currentDoctorData.following}</strong> Following</span>
            <span><strong>{currentDoctorData.posts}</strong> Posts</span>
          </div>
        </div>
        <div className="profile-actions">
          {/* Doctor Switcher */}
          <div className="doctor-switcher">
            <button 
              className={`switcher-btn ${currentDoctor === 'arjun' ? 'active' : ''}`}
              onClick={() => switchDoctor('arjun')}
            >
              Dr. Arjun Patel
            </button>
            <button 
              className={`switcher-btn ${currentDoctor === 'michael' ? 'active' : ''}`}
              onClick={() => switchDoctor('michael')}
            >
              Dr. Michael Chen
            </button>
          </div>
          
          {bookingStatus === 'success' && (
            <div className="booking-success-top">
              Appointment booked successfully! Check the booking sidebar for details.
            </div>
          )}
          <button 
            className="book-top-btn"
            onClick={handleBookAppointment}
            disabled={isBooking}
          >
            {isBooking ? 'Booking...' : 'Book an Appointment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;