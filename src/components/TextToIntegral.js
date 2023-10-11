
async function textToIntegralFunction(userInput) {
    const apiKey = process.env.REACT_APP_API_KEY;
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
            prompt: `In Latex form, generate an integral that matches this input: ${userInput}`,
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

module.exports = textToIntegralFunction;