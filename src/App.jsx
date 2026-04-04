import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import BookingSidebar from './components/BookingSidebar';
import FindDoctors from './components/FindDoctors';
import DoctorProfile from './components/DoctorProfile';
import AboutMe from './components/AboutMe';
import Specializations from './components/Specializations';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import './index.css';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(savedUser);
      setIsLoggedIn(true);
      setCurrentView('home');
    }
  }, []);

  const handleLogin = (username) => {
    setCurrentUser(username);
    setIsLoggedIn(true);
    localStorage.setItem('currentUser', username);
    setCurrentView('home'); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser('');
    localStorage.removeItem('currentUser');
    setCurrentView('home');
    setSelectedDoctor(null);
  };

  const handleViewProfile = (doctor) => {
    console.log('App handleViewProfile called with:', doctor);
    setSelectedDoctor(doctor);
    setCurrentView('doctor-profile');
  };


  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <Navbar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      
      <main className="container">
        {currentView === 'home' ? (
          <Home />
        ) : currentView === 'find-doctors' ? (
          <FindDoctors onViewProfile={handleViewProfile} />
        ) : currentView === 'about' ? (
          <About />
        ) : currentView === 'doctor-profile' ? (
          <DoctorProfile doctor={selectedDoctor} />
        ) : (
          <>
            <ProfileHeader />
            
            <div className="grid-layout">
           
              <div className="left-column">
                <AboutMe />
                <Specializations />
              </div>

             
              <aside className="right-sidebar">
                <BookingSidebar />
              </aside>
            </div>
          </>
        )}
      </main>
    </div>
  );
}