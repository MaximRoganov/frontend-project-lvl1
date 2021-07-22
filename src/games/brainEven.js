import {
  getRandom,
  gameEngine,
} from '../utils/index.js';

// Четное ли число
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const brainEven = () => {
  const numberOfAttempts = 3;
  const arrayForGameEngine = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const number = getRandom();
    const expected = isEven(number);
    const question = `Question: ${number}`;
    arrayForGameEngine.push([question, expected]);
  }
  gameEngine(arrayForGameEngine);
};
export default brainEven;
