import React from 'react';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import BookingSidebar from './components/BookingSidebar';
import FindDoctors from './components/FindDoctors';
import AboutMe from './components/AboutMe';
import Specializations from './components/Specializations';
import About from './components/About';
import './index.css';

export default function App() {
  const [currentView, setCurrentView] = React.useState('profile');

  const handleViewProfile = () => {
    setCurrentView('profile');
  };

  return (
    <div>
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="container">
        {currentView === 'find-doctors' ? (
          <FindDoctors onViewProfile={handleViewProfile} />
        ) : currentView === 'about' ? (
          <About />
        ) : (
          <>
            <ProfileHeader />
            
            <div className="grid-layout">
              {/* Left Column */}
              <div className="left-column">
                <AboutMe />
                <Specializations />
              </div>

              {/* Right Column */}
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