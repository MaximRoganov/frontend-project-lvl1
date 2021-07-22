import {
  getRandom,
  gameEngine,
} from '../utils/index.js';

// Простое ли число?
const isSimple = (num) => {
  if (num === 1) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const numberOfAttempts = 3;
  const arrayForGameEngine = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const num = getRandom();
    const expected = isSimple(num) ? 'yes' : 'no';
    const question = `Question: ${num}`;
    arrayForGameEngine.push([question, expected]);
  }
  gameEngine(arrayForGameEngine);
};
export default brainPrime;
