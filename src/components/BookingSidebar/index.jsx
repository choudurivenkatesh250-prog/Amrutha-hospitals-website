import React, { useState } from 'react';
import './index.css';

const BookingSidebar = () => {
  const [mode, setMode] = useState('Video');
  const [day, setDay] = useState('Mon, 10 Oct');
  const [time, setTime] = useState('11:00 AM');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStatus, setBookingStatus] = useState('');

  const modes = [
    { id: 'In-Clinic', time: '45 Mins' },
    { id: 'Video', time: '45 Mins' },
    { id: 'Chat', time: '10 Mins' }
  ];

  const days = [
    { id: 'Mon, 10 Oct', slots: '10 slots', isGreen: true },
    { id: 'Tue, 11 Oct', slots: '02 slots', isGreen: false },
    { id: 'Wed, 12 Oct', slots: '05 slots', isGreen: false }
  ];

  const times = ['09:00 AM', '09:30 AM', '10:00 AM', '10:15 AM', '10:45 AM', '11:00 AM'];

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
        
        <div className="fee-box">
          <span className="fee-label">Appointment Fee</span>
          <span className="fee-amount">₹999.00</span>
        </div>

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

        {bookingStatus === 'success' && (
          <div className="booking-success">
            ✅ Appointment booked successfully! We'll send you a confirmation shortly.
          </div>
        )}

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