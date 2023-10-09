// Footer.js

import { useState } from 'react';

export default function Footer() {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [showPrevious, setShowPrevious] = useState(false);

  return (
    <footer>
      <button 
        onClick={() => setShowPrevious(!showPrevious)} 
        style={{ 
          marginLeft: '10px', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          fontSize: 'inherit',
          color: 'inherit',
          fontFamily: 'inherit',
        }}>
        {showPrevious ? '' : 'Yesterday'}  
      </button>
      
      <p>{date}</p>

      <button
        onClick={() => setShowPrevious(!showPrevious)} 
        style={{ 
          marginRight: '10px', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          fontSize: 'inherit',
          color: 'inherit',
          fontFamily: 'inherit',
        }}>
        {showPrevious ? 'Today' : ''}  
      </button>
    </footer>
  );
}