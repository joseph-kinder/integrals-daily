// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import IntegralOfTheDay from './components/Integral';
import MySidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  // State for managing light/dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPrevious, setShowPrevious] = useState(false);

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
        <div className="App-header">
          <h2>Integral of the Day</h2>
        </div>
        <div>
        <IntegralOfTheDay
          isDarkMode={isDarkMode} 
          showPrevious={showPrevious}
        />
        </div>
      </div>
      <footer>
        <Footer showPrevious={showPrevious} setShowPrevious={setShowPrevious}/>
      </footer>
    </div>
  );
}

export default App;
