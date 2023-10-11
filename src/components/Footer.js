// Footer.js
const Footer = ({ showPrevious, setShowPrevious, textToIntegral }) => {

  const current = new Date();
  const date = `${current.getDate() - (showPrevious ? 1 : 0)}/${current.getMonth() + 1}/${current.getFullYear()}`;

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
          visibility: !showPrevious && !textToIntegral ? 'visible' : 'hidden',
        }}>
        Yesterday's integral
      </button>
           <div style={{ flex: 1, textAlign: 'center' }}>
        <p>{date}</p>
      </div>

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
          visibility: showPrevious && !textToIntegral ? 'visible' : 'hidden',
        }}>
        Today's integral
      </button>
    </footer>
  );
}

export default Footer;