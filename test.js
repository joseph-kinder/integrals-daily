import textToIntegralFunction from './TextToIntegral'

async function test() {
  const userInput = 'x^2';
  const result = await textToIntegralFunction(userInput);
  console.log(result);
}

test();
