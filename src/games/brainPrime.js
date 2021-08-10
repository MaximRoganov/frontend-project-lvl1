import { getRandom, numberOfAttempts } from '../utils/index.js';
import gameEngine from '../index.js';

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
  const arrayForGameEngine = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const num = getRandom();
    const expected = isSimple(num) ? 'yes' : 'no';
    const question = `${num}`;
    arrayForGameEngine.push([question, String(expected)]);
  }
  gameEngine(arrayForGameEngine);
};
export default brainPrime;
