import React from 'react';
import './index.css';

const Navbar = ({ currentView, onViewChange }) => {
  return (
    <nav className="navbar">
      <div className="logo">AMRUTAM</div>
      <div className="nav-links">
        <a href="#" onClick={() => onViewChange('profile')} className={currentView === 'profile' ? 'active' : ''}>Home</a>
        <a href="#" onClick={() => onViewChange('find-doctors')} className={currentView === 'find-doctors' ? 'active' : ''}>Find Doctors</a>
        <a href="#" onClick={() => onViewChange('about')} className={currentView === 'about' ? 'active' : ''}>About Us</a>
      </div>
      <div className="nav-actions">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-solid">Sign-up</button>
      </div>
    </nav>
  );
};

export default Navbar;