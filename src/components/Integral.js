import { React, useState } from 'react';
import Latex from 'react-latex';
import integrals from '../data/integrals.json';
import '../App.css';
import textToIntegralFunction from './TextToIntegral'

const IntegralOfTheDay = ({ isDarkMode, showPrevious, textToIntegral }) => {

    const [userInput, setUserInput] = useState('');
    const [generatedIntegral, setGeneratedIntegral] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleChange = (event) => {
      setUserInput(event.target.value);
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true); 
      const integral = await textToIntegralFunction(userInput);
      setLoading(false);
      setGeneratedIntegral(integral);
    }

    document.addEventListener('DOMContentLoaded', function() {
        const inputElement = document.getElementById('expanding-input');

        inputElement.addEventListener('input', function() {
            this.style.width = (this.value.length + 1) * 8 + 'px';
        });
    });


    const current = new Date();
    const date = `${current.getDate() - (showPrevious ? 1 : 0)}/${current.getMonth() + 1}/${current.getFullYear()}`;
    
    const todaysIntegral = integrals.find(integral => integral.date === date);
    return (
        <div>
        {textToIntegral && 
            <>
              <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={handleSubmit}>
                <input 
                  type="text"
                  value={userInput}
                  onChange={handleChange}
                  placeholder="Enter text to generate integral"
                  className={"glass expand"} 
                  style={{
                    padding: '12px 20px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '16px',
                    marginBottom: '10px',
                    fontFamily: 'inherit',
                    color: 'inherit',
                    width: '500px' 
                  }}
                />

                <div className={`integral-box glass expand`} style={{margin: '20px'}}>
                    {generatedIntegral && 
                        <div className="integral">
                        <Latex>{generatedIntegral}</Latex>
                        </div>
                    }
                </div>
                <button style={{ 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    color: 'inherit',
                    fontFamily: 'inherit',
                    }} type="submit">Generate</button>
              </form>
              
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
