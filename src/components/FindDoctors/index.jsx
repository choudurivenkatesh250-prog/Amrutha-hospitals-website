import React, { useState } from 'react';
import { Search, MapPin, Star, X } from 'lucide-react';
import Hero from '../../assets/hero.jpg';
import './index.css';

function FindDoctors({ onViewProfile }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedFeeRange, setSelectedFeeRange] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [bookingStatus, setBookingStatus] = useState({});

  // All available doctors
  const allDoctors = [
    {
      id: 1,
      name: "Dr.Prerna Narang",
      avatar: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_incoming&w=740&q=80",
      specialty: "Male-Female Infertility",
      experience: "7 years",
      languages: "English, Hindi, Marathi",
      rating: 4.5,
      videoPrice: "₹800",
      chatPrice: "Free",
      gender: "Female",
      location: "Hyderabad",
      feeRange: "₹500-₹1000"
    },
    {
      id: 2,
      name: "Dr.Arjun Patel",
      avatar: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
      specialty: "Cardiologist",
      experience: "12 years",
      languages: "English, Gujarati, Hindi",
      rating: 4.8,
      videoPrice: "₹1200",
      chatPrice: "₹300",
      gender: "Male",
      location: "Delhi",
      feeRange: "₹1000-₹1500"
    },
    {
      id: 3,
      name: "Dr.Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww",
      specialty: "Dermatologist",
      experience: "5 years",
      languages: "English, Spanish, French",
      rating: 4.6,
      videoPrice: "₹600",
      chatPrice: "₹200",
      gender: "Female",
      location: "Mumbai",
      feeRange: "₹500-₹1000"
    },
    {
      id: 4,
      name: "Dr.Michael Chen",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=150&q=80",
      specialty: "Orthopedic Surgeon",
      experience: "15 years",
      languages: "English, Mandarin, Cantonese",
      rating: 4.9,
      videoPrice: "₹1500",
      chatPrice: "₹500",
      gender: "Male",
      location: "Bangalore",
      feeRange: "₹1500-₹2000"
    },
    {
      id: 5,
      name: "Dr.Venkatesh Chouduri",
      avatar: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
      specialty: "Pediatrician",
      experience: "8 years",
      languages: "English, Spanish, Portuguese",
      rating: 4.7,
      videoPrice: "₹900",
      chatPrice: "₹250",
      gender: "male",
      location: "Hyderabad",
      feeRange: "₹500-₹1000"
    },
    {
      id: 6,
      name: "Dr.James Wilson",
      avatar: "https://media.istockphoto.com/id/1161336374/photo/portrait-of-confident-young-medical-doctor-on-blue-background.jpg?s=612x612&w=0&k=20&c=zaa4MFrk76JzFKvn5AcYpsD8S0ePYYX_5wtuugCD3ig=",
      specialty: "Neurologist",
      experience: "20 years",
      languages: "English, German, French",
      rating: 4.8,
      videoPrice: "₹1800",
      chatPrice: "₹600",
      gender: "Male",
      location: "Delhi",
      feeRange: "₹1500-₹2000"
    },
    {
      id: 7,
      name: "Dr.Priya Sharma",
      avatar: "https://t3.ftcdn.net/jpg/15/75/74/62/360_F_1575746216_ZS5ovZG1rHulQUatTq0WVno9BGInMCwW.jpg",
      specialty: "Endocrinologist",
      experience: "10 years",
      languages: "English, Hindi, Bengali",
      rating: 4.4,
      videoPrice: "₹1000",
      chatPrice: "₹350",
      gender: "Female",
      location: "Mumbai",
      feeRange: "₹1000-₹1500"
    },
    {
      id: 8,
      name: "Dr.Robert Taylor",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80",
      specialty: "General Physician",
      experience: "6 years",
      languages: "English, Russian, Arabic",
      rating: 4.3,
      videoPrice: "₹700",
      chatPrice: "₹150",
      gender: "Male",
      location: "Bangalore",
      feeRange: "₹500-₹1000"
    }
  ];

  // Filter doctors based on all criteria
  const filteredDoctors = allDoctors.filter(doctor => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === '' || 
      doctor.name.toLowerCase().includes(searchLower) ||
      doctor.specialty.toLowerCase().includes(searchLower) ||
      doctor.languages.toLowerCase().includes(searchLower);
    
    const matchesLocation = selectedLocation === '' || doctor.location === selectedLocation;
    const matchesSpecialty = selectedSpecialty === '' || doctor.specialty === selectedSpecialty;
    const matchesGender = selectedGender === '' || doctor.gender === selectedGender;
    const matchesFeeRange = selectedFeeRange === '' || doctor.feeRange === selectedFeeRange;
    const matchesLanguage = selectedLanguage === '' || doctor.languages.includes(selectedLanguage);
    
    return matchesSearch && matchesLocation && matchesSpecialty && matchesGender && matchesFeeRange && matchesLanguage;
  });

  // Get unique values for dropdowns
  const locations = ['All Locations', ...new Set(allDoctors.map(d => d.location))];
  const specialties = ['All Specialties', ...new Set(allDoctors.map(d => d.specialty))];
  const genders = ['All Genders', 'Male', 'Female'];
  const feeRanges = ['All Fees', ...new Set(allDoctors.map(d => d.feeRange))];
  const languages = ['All Languages', 'English', 'Hindi', 'Spanish', 'French', 'Mandarin', 'Cantonese', 'Portuguese', 'German', 'Russian', 'Arabic', 'Bengali', 'Gujarati', 'Marathi'];

  // Handle booking consultation
  const handleBookConsultation = (doctorId) => {
    setBookingStatus(prev => ({ ...prev, [doctorId]: 'booking' }));
    
    setTimeout(() => {
      setBookingStatus(prev => ({ ...prev, [doctorId]: 'success' }));
      setTimeout(() => {
        setBookingStatus(prev => ({ ...prev, [doctorId]: '' }));
      }, 3000);
    }, 2000);
  };

  // Handle view profile with debugging
  const handleViewProfileClick = (doctor) => {
    console.log('FindDoctors handleViewProfileClick called with:', doctor);
    if (onViewProfile) {
      onViewProfile(doctor);
    } else {
      console.error('onViewProfile is not defined');
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm, 'in', selectedLocation);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedLocation('');
    setSelectedSpecialty('');
    setSelectedGender('');
    setSelectedFeeRange('');
    setSelectedLanguage('');
  };

  // Check if any filters are active
  const hasActiveFilters = searchTerm || selectedLocation || selectedSpecialty || selectedGender || selectedFeeRange || selectedLanguage;

  return (
    <div className="find-doctors">
      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <h1>Find Expert Doctors</h1>
        
        {/* Search Bar and Location */}
        <form onSubmit={handleSearch}>
          <div className="search-inputs">
            <div className="input-group location">
              <MapPin className="icon" />
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="dropdown-select"
              >
                {locations.map(location => (
                  <option key={location} value={location === 'All Locations' ? '' : location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="input-group search">
              <Search className="icon" />
              <input
                type="text"
                placeholder="Search by name, specialty, or language..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <button type="submit" className="search-btn">Search</button>
          </div>
        </form>

        {/* Green Dropdown Filters */}
        <div className="filter-dropdowns">
          <div className="dropdown-group">
            <select 
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="green-dropdown"
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty === 'All Specialties' ? '' : specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
          
          <div className="dropdown-group">
            <select 
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="green-dropdown"
            >
              {genders.map(gender => (
                <option key={gender} value={gender === 'All Genders' ? '' : gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
          
          <div className="dropdown-group">
            <select 
              value={selectedFeeRange}
              onChange={(e) => setSelectedFeeRange(e.target.value)}
              className="green-dropdown"
            >
              {feeRanges.map(fee => (
                <option key={fee} value={fee === 'All Fees' ? '' : fee}>
                  {fee}
                </option>
              ))}
            </select>
          </div>
          
          <div className="dropdown-group">
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="green-dropdown"
            >
              {languages.map(language => (
                <option key={language} value={language === 'All Languages' ? '' : language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="active-filters">
            <span className="filter-label">Active Filters:</span>
            {selectedLocation && (
              <span className="filter-tag">
                Location: {selectedLocation} <X className="remove-icon" onClick={() => setSelectedLocation('')} />
              </span>
            )}
            {selectedSpecialty && (
              <span className="filter-tag">
                Specialty: {selectedSpecialty} <X className="remove-icon" onClick={() => setSelectedSpecialty('')} />
              </span>
            )}
            {selectedGender && (
              <span className="filter-tag">
                Gender: {selectedGender} <X className="remove-icon" onClick={() => setSelectedGender('')} />
              </span>
            )}
            {selectedFeeRange && (
              <span className="filter-tag">
                Fee: {selectedFeeRange} <X className="remove-icon" onClick={() => setSelectedFeeRange('')} />
              </span>
            )}
            {selectedLanguage && (
              <span className="filter-tag">
                Language: {selectedLanguage} <X className="remove-icon" onClick={() => setSelectedLanguage('')} />
              </span>
            )}
            <button className="clear-all-btn" onClick={clearAllFilters}>Clear All</button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="results-info">
        <p>Found {filteredDoctors.length} doctors</p>
      </div>

      {/* Doctors Grid */}
      <div className="doctors-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="avatar-wrapper">
                <img src={doctor.avatar} alt={doctor.name} />
                <div className="rating">{doctor.rating} ⭐</div>
              </div>

              <h3>{doctor.name}</h3>
              <div className="doctor-info">
                <p>🩺 {doctor.specialty}</p>
                <p>🎓 {doctor.experience} experience</p>
                <p>🗣️ {doctor.languages}</p>
                <p>📍 {doctor.location}</p>
                <p>👤 {doctor.gender}</p>
              </div>

              <div className="consultation-types">
                <div className="consult-box">
                  <small>Video</small>
                  <strong>{doctor.videoPrice}</strong>
                </div>
                <div className="consult-box">
                  <small>Chat</small>
                  <strong>{doctor.chatPrice}</strong>
                </div>
              </div>

              {bookingStatus[doctor.id] === 'success' && (
                <div className="booking-confirmation">
                  ✅ Consultation booked successfully!
                </div>
              )}

              <div className="card-actions">
                <button onClick={() => handleViewProfileClick(doctor)}>View Profile</button>
                <button 
                  onClick={() => handleBookConsultation(doctor.id)}
                  disabled={bookingStatus[doctor.id] === 'booking'}
                >
                  {bookingStatus[doctor.id] === 'booking' ? 'Booking...' : 'Book Consultation'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No doctors found</h3>
            <p>Try adjusting your search terms or filters</p>
            <button className="clear-filters-btn" onClick={clearAllFilters}>Clear All Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FindDoctors;