import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import CreateProfile from './pages/CreateProfile';
import RoommateFinder from './pages/RoommateFinder';
import { useState } from 'react';

export type UserProfile = {
  name: string;
  branch: string;
  year: string;
  sleepSchedule: string;
  cleanlinessLevel: string;
  interests: string[];
  hostelBlock: string;
};

function App() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/create-profile" 
            element={<CreateProfile setUserProfile={setUserProfile} />} 
          />
          <Route 
            path="/find-roommates" 
            element={<RoommateFinder userProfile={userProfile} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 