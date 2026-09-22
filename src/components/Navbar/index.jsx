import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import './index.css';

const Navbar = ({ currentView, onViewChange, currentUser, onLogout }) => {
  const [open, setOpen] = useState(false);
  const go = (view) => { onViewChange(view); setOpen(false); };
  return <header className="site-header">
    <div className="emergency-bar"><span>24/7 Emergency & Ambulance</span><a href="tel:+919876543210"><Phone size={14} /> +91 98765 43210</a></div>
    <nav className="navbar" aria-label="Main navigation">
      <button className="brand" onClick={() => go('home')} aria-label="Amrutam Hospital home"><span className="brand-mark">+</span><span>AMRUTAM<small>HOSPITALS</small></span></button>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <div className={`nav-links ${open ? 'is-open' : ''}`}>
        {[['home', 'Home'], ['find-doctors', 'Doctors'], ['about', 'About us']].map(([view, label]) => <button key={view} onClick={() => go(view)} className={currentView === view ? 'active' : ''}>{label}</button>)}
        <button onClick={() => go('home')} className="mobile-appointment">Book appointment</button>
      </div>
      <div className="nav-actions">{currentUser ? <><span className="welcome-text">Hi, {currentUser}</span><button className="text-button" onClick={onLogout}>Log out</button></> : <button className="text-button" onClick={() => go('login')}>Patient login</button>}<button className="nav-cta" onClick={() => go('home')}>Book appointment</button></div>
    </nav>
  </header>;
};
export default Navbar;
