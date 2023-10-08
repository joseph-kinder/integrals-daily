import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import IntegralOfTheDay from './components/Integral';
import MySidebar from './components/Sidebar';

function App() {
  // State for managing light/dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function for light/dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="sidebar">
        <MySidebar 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode}
        />
      </div>
      <div className="content">
      <IntegralOfTheDay 
      />
      </div>
    </div>
  );
}

export default App;
