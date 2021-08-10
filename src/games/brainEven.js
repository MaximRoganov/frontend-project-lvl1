import { getRandom, numberOfAttempts } from '../utils/index.js';
import gameEngine from '../index.js';

// Четное ли число
const isEven = (number) => number % 2 === 0;

const brainEven = () => {
  const arrayForGameEngine = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const number = getRandom();
    const expected = isEven(number) ? 'yes' : 'no';
    const question = `${number}`;
    arrayForGameEngine.push([question, expected]);
  }
  gameEngine(arrayForGameEngine);
};
export default brainEven;
