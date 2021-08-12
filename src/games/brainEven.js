import getRandom from '../utils.js';
import { numberOfAttempts, gameEngine } from '../index.js';

// Четное ли число
const isEven = (number) => number % 2 === 0;

const brainEven = () => {
  const gameEngineData = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const number = getRandom();
    const expected = isEven(number) ? 'yes' : 'no';
    const question = `${number}`;
    gameEngineData.push([question, expected]);
  }
  gameEngine(gameEngineData);
};
export default brainEven;
