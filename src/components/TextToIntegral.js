
async function textToIntegralFunction(userInput) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          prompt: `In Latex form, generate an integral that matches this input: ${userInput}`,
          max_tokens: 50 // You can adjust this value based on your desired output length
        })
      });
  
      const data = await response.json();
      let integral = data.choices[0].text.trim(); // Extract the generated integral
  
      // If integral is not in LaTeX format, call the API again
      if (!integral.includes('$')) {
        integral = await textToIntegralFunction(userInput);
      }
  
      // Extract content between $ symbols
      integral = integral.match(/\$(.*?)\$/);
      if (integral) {
        return integral[1];
      } else {
        return null; // Could not extract integral
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }

export default textToIntegralFunction;