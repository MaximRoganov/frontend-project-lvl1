import getRandom from '../utils.js';
import { numberOfAttempts, gameEngine } from '../index.js';

// Простое ли число?
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const gameEngineData = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const num = getRandom();
    const expected = isPrime(num) ? 'yes' : 'no';
    const question = String(num);
    gameEngineData.push([question, String(expected)]);
  }
  gameEngine(gameEngineData);
};
export default brainPrime;
