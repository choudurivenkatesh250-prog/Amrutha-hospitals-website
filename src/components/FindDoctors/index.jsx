import React, { useState } from 'react';
import { Search, MapPin, Star, X } from 'lucide-react';
import './index.css';

export default function FindDoctors({ onViewProfile }) {
  const [bookingStatus, setBookingStatus] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [activeTags, setActiveTags] = useState(['Hair care', 'Female', 'Rs.0-Rs.500', 'Hindi']);

  const allDoctors = [
    {
      id: 1,
      name: "Dr. Prerna Narang",
      avatar: "https://i.pravatar.cc/150?img=5",
      specialty: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "Speaks: English, Hindi, Marathi",
      rating: 4.5,
      videoPrice: "₹800",
      chatPrice: "Free"
    },
    {
      id: 2,
      name: "Dr. Arjun Patel",
      avatar: "https://i.pravatar.cc/150?img=10",
      specialty: "Cardiologist",
      experience: "12 years of Experience",
      languages: "Speaks: English, Gujarati, Hindi",
      rating: 4.8,
      videoPrice: "₹1200",
      chatPrice: "₹300"
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=26",
      specialty: "Dermatologist",
      experience: "5 years of Experience",
      languages: "Speaks: English, Spanish, French",
      rating: 4.6,
      videoPrice: "₹600",
      chatPrice: "₹200"
    }
  ];

  const filteredDoctors = allDoctors.filter(doctor => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      doctor.name.toLowerCase().includes(searchLower) ||
      doctor.specialty.toLowerCase().includes(searchLower) ||
      doctor.languages.toLowerCase().includes(searchLower);
    
    const matchesLocation = selectedLocation === '' || true; // Can be enhanced with location data
    
    return matchesSearch && matchesLocation;
  });

  const handleBookConsultation = (doctorId) => {
    setBookingStatus(prev => ({ ...prev, [doctorId]: 'booking' }));
    
    // Simulate booking process
    setTimeout(() => {
      setBookingStatus(prev => ({ ...prev, [doctorId]: 'success' }));
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setBookingStatus(prev => ({ ...prev, [doctorId]: '' }));
      }, 3000);
    }, 2000);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery, 'in', selectedLocation);
    // Search is already handled by filteredDoctors
  };

  const removeTag = (tagToRemove) => {
    setActiveTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="find-doctors">
  
      <div className="hero-search">
        <h1>Find Expert Doctors For An In-Clinic Session Here</h1>
        <form className="search-inputs" onSubmit={handleSearch}>
          <div className="input-group location">
            <MapPin className="icon" />
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
            </select>
          </div>
          <div className="input-group query">
            <Search className="icon right" />
            <input 
              type="text" 
              placeholder="eg. Doctor, specialisation, clinic name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="search-btn">Search</button>
        </form>
      </div>

      
      <div className="filters">
        {['Expertise', 'Gender', 'Fees', 'Languages', 'All filters'].map(filter => (
          <select key={filter} className="filter-select">
            <option>{filter}</option>
          </select>
        ))}
      </div>

      
      {activeTags.length > 0 && (
        <div className="active-tags">
          {activeTags.map(tag => (
            <div key={tag} className="tag" onClick={() => removeTag(tag)}>
              {tag} <X className="icon-small" />
            </div>
          ))}
        </div>
      )}

     
      <div className="doctors-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="avatar-wrapper">
                <img src={doctor.avatar} alt={doctor.name} />
                <div className="rating">{doctor.rating} <Star className="icon-star" /></div>
              </div>
              <h3>{doctor.name}</h3>
              <div className="doctor-info">
                <span>⚕️ {doctor.specialty}</span>
                <span>🎓 {doctor.experience}</span>
                <span>🗣️ {doctor.languages}</span>
              </div>
              <div className="consultation-types">
                <div className="consult-box">
                  <small>Video Consultation</small>
                  <strong>{doctor.videoPrice}</strong>
                </div>
                <div className="consult-box">
                  <small>Chat Consultation</small>
                  <strong>{doctor.chatPrice}</strong>
                </div>
              </div>
              
              {bookingStatus[doctor.id] === 'success' && (
                <div className="booking-confirmation">
                  ✅ Consultation booked successfully!
                </div>
              )}
              
              <div className="card-actions">
                <button className="btn-view" onClick={onViewProfile}>View Profile</button>
                <button 
                  className="btn-book"
                  onClick={() => handleBookConsultation(doctor.id)}
                  disabled={bookingStatus[doctor.id] === 'booking'}
                >
                  {bookingStatus[doctor.id] === 'booking' ? 'Booking...' : 'Book a consultation'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No doctors found</h3>
            <p>Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}