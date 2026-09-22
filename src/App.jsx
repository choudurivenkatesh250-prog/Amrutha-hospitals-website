import { useState } from 'react';
import Navbar from './components/Navbar';
import FindDoctors from './components/FindDoctors';
import DoctorProfile from './components/DoctorProfile';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import './index.css';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [currentUser, setCurrentUser] = useState(() => localStorage.getItem('currentUser') || '');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const navigate = (view) => { setCurrentView(view); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleLogin = (username) => { setCurrentUser(username); navigate('home'); };
  const handleLogout = () => { localStorage.removeItem('currentUser'); setCurrentUser(''); navigate('home'); };
  return <div className="app-shell">
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Navbar currentView={currentView} onViewChange={navigate} currentUser={currentUser} onLogout={handleLogout} />
    <main id="main-content">
      {currentView === 'home' && <Home onNavigate={navigate} />}
      {currentView === 'find-doctors' && <FindDoctors onViewProfile={(doctor) => { setSelectedDoctor(doctor); navigate('doctor-profile'); }} />}
      {currentView === 'about' && <About />}
      {currentView === 'doctor-profile' && <DoctorProfile doctor={selectedDoctor} />}
      {currentView === 'login' && <Login onLogin={handleLogin} />}
    </main>
  </div>;
}
