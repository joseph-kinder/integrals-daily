// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import IntegralOfTheDay from './components/Integral';
import MySidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  // State for managing light/dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fade, setFade] = useState(false);
  // Toggle function for light/dark mode
  const toggleDarkMode = () => {
    setFade(true);
  
    setTimeout(() => {
      setIsDarkMode(!isDarkMode);
      setFade(false);  
    }, 300);
  };

  return (
    <div className={`App ${fade ? 'fade' : ''} ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
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
          toggleDarkMode={toggleDarkMode} 
        />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
