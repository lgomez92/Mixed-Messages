// Generates random number to use as index for the result
const generateRandomIndex = () => { 
  randomIndex = Math.floor(Math.random() * 10 + 1);
  return randomIndex;
}

console.log(generateRandomIndex());