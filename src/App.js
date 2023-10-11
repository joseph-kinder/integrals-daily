// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import IntegralOfTheDay from './components/Integral';
import MySidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  // State for managing light/dark mode
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true' || false);
  const [showPrevious, setShowPrevious] = useState(false);
  const [textToIntegral, setTextToIntegral] = useState(localStorage.getItem('textToIntegral') === 'true' || false);

  
  // Toggle function for light/dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const toggleTextToIntegral = () => {
    const newMode = !textToIntegral;
    setTextToIntegral(newMode);
    localStorage.setItem('textToIntegral', newMode.toString());
  };
  

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="sidebar">
        <MySidebar 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode}
          toggleTextToIntegral={toggleTextToIntegral}
        />
      </div>
      <div className="content">
        <div className="App-header">
          <h2>{textToIntegral ? "Text to Integral" : "Today's Integral"}</h2>
        </div>
        <div>
        <IntegralOfTheDay
          isDarkMode={isDarkMode} 
          showPrevious={showPrevious}
          textToIntegral={textToIntegral}
        />
        </div>
      </div>
      <footer>
        <Footer 
          showPrevious={showPrevious}
          setShowPrevious={setShowPrevious}
          textToIntegral={textToIntegral}
        />
      </footer>
    </div>
  );
}

export default App;
