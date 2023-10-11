import { React, useState } from 'react';
import Latex from 'react-latex';
import integrals from '../data/integrals.json';
import '../App.css';
import textToIntegralFunction from './TextToIntegral.js'

const IntegralOfTheDay = ({ isDarkMode, showPrevious, textToIntegral }) => {

    const [userInput, setUserInput] = useState('');
    const [generatedIntegral, setGeneratedIntegral] = useState('');
  
    const handleChange = (event) => {
      setUserInput(event.target.value);
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const integral = await textToIntegralFunction(userInput);
      setGeneratedIntegral(integral);
    }

    const current = new Date();
    const date = `${current.getDate() - (showPrevious ? 1 : 0)}/${current.getMonth() + 1}/${current.getFullYear()}`;
    
    const todaysIntegral = integrals.find(integral => integral.date === date);
    return (
        <div>
        {textToIntegral && 
            <>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  value={userInput}
                  onChange={handleChange}
                  placeholder="Enter text to generate integral" 
                />
                <button style={{ 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    color: 'inherit',
                    fontFamily: 'inherit',
                    }} type="submit">Generate</button>
              </form>
              
              {generatedIntegral && 
                <div className="integral">
                  <Latex>${generatedIntegral}$</Latex>
                </div>
              }
            </>
          }
        {!textToIntegral &&
            <div className={`integral-box ${isDarkMode ? 'dark-mode' : 'light-mode'} glass expand`}>
                <div className="integral-content">
                    <div className="integral">
                        <Latex className="integral-latex">{`${todaysIntegral.latex}`}</Latex>
                    </div>
                </div>
            </div>
        }
        </div>
    );
};

export default IntegralOfTheDay;
