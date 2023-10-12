import { React, useState } from 'react';
import Latex from 'react-latex';
import integrals from '../data/integrals.json';
import '../App.css';

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

    const textToIntegralFunction = async (userInput) => {
        const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
        console.log('API key:', apiKey);
    
        const apiUrl = 'https://api.openai.com/v1/completions';
      
        try {
            console.log('Sending fetch request');
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: `Generate this integral: ${userInput}, in Latex between two $ signs`,
                max_tokens: 50 // You can adjust this value based on your desired output length
                })
            });
            
            console.log('Received response');
            const data = await response.json();
            console.log(data);
            
            console.log('Parsed response data');
            let integral = data.choices[0].text.trim();
            console.log(integral); // Extract the generated integral
        
            // If integral is not in LaTeX format, call the API again
            //   if (!integral.includes('$')) {
            //     integral = await textToIntegralFunction(userInput);
            //   }
        
            if (integral.includes('$')) {
                return integral;
            } else {
                return `$${integral}$`; // Could not extract integral
            }
            } catch (error) {
                console.error('Error:', error);
                return null;
            }
      }


    const current = new Date();
    const date = `${current.getDate() - (showPrevious ? 1 : 0)}/${current.getMonth() + 1}/${current.getFullYear()}`;
    
    const todaysIntegral = integrals.find(integral => integral.date === date);
    return (
        <div>
        {textToIntegral && 
            <>
              <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={handleSubmit}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
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
                    <button 
                        className={"glass"} 
                        style={{
                            border: '1px solid #ccc',
                            marginLeft: '10px',
                            cursor: 'pointer',
                            fontSize: 'inherit',
                            color: 'inherit',
                            fontFamily: 'inherit',
                            borderRadius: '6px',
                            height: '46px',
                            width: '100px'
                        }} 
                        type="submit">Generate</button>
                </div>

                <div className={`integral-box glass expand`} style={{margin: '20px'}}>
                    {generatedIntegral && 
                        <div className="integral">
                        <Latex>{generatedIntegral}</Latex>
                        </div>
                    }
                </div>
              </form>
              
            </>
          }
        {!textToIntegral &&
            <div className={`integral-box ${isDarkMode ? 'dark-mode' : 'light-mode'} glass expand`}>
                <div className="integral-content">
                    <div className="integral">
                        <Latex className="integral-latex">{`$${todaysIntegral.latex}$`}</Latex>
                    </div>
                </div>
            </div>
        }
        </div>
    );
};

export default IntegralOfTheDay;
