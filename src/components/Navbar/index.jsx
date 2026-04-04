import React from 'react';
import './index.css';

const Navbar = ({ currentView, onViewChange, currentUser, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">AMRUTAM</div>
      <div className="nav-links">
        <a href="#" onClick={() => onViewChange('home')} className={currentView === 'home' ? 'active' : ''}>Home</a>
        <a href="#" onClick={() => onViewChange('find-doctors')} className={currentView === 'find-doctors' ? 'active' : ''}>Find Doctors</a>
        <a href="#" onClick={() => onViewChange('about')} className={currentView === 'about' ? 'active' : ''}>About Us</a>
      </div>
      <div className="nav-actions">
        <span className="welcome-text">Welcome, {currentUser}!</span>
        <button className="btn btn-outline" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;