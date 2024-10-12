import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Program1Details from './components/Program1Details';
import Program2Details from './components/Program2Details';
import Program3Details from './components/Program3Details';
import Program4Details from './components/Program4Details';
import './App.css';

function App() {
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // Get navigate function

  useEffect(() => {
    // Redirect to root if path is '/programs'
    if (location.pathname === '/programs') {
      navigate('/programs'); // Redirect to root
    } else {
      window.scrollTo(0, 0); // Scroll to top for other routes
    }
  }, [location.pathname, navigate]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/programs" element={<HeroSection showPrograms />} />
        <Route path="/program1-details" element={<Program1Details />} />
        <Route path="/program2-details" element={<Program2Details />} />
        <Route path="/program3-details" element={<Program3Details />} />
        <Route path="/program4-details" element={<Program4Details />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

