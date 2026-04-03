import React, { useState } from 'react';
import { CheckCircle, Star } from 'lucide-react';
import './index.css';

const ProfileHeader = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStatus, setBookingStatus] = useState('');

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

  return (
    <div className="global-card">
      <div className="profile-banner"></div>
      <div className="profile-content">
        <img 
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80" 
          alt="Doctor" 
          className="profile-image" 
        />
        <div className="profile-info">
          <div className="profile-name">
            <h2>Dr. Arjun Patel</h2>
            <CheckCircle size={20} color="#3b82f6" fill="#3b82f6" style={{color: 'white'}} />
          </div>
          <div className="profile-title">Cardiologist</div>
          <div className="profile-stats">
            <div className="rating-badge">
              4.8 <Star size={14} fill="#fbbf24" color="#fbbf24" />
            </div>
            <span><strong>1,200</strong> Followers</span>
            <span><strong>25K</strong> Following</span>
            <span><strong>450</strong> Posts</span>
          </div>
        </div>
        <div className="profile-actions">
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