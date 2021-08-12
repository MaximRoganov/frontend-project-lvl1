import getRandom from '../utils.js';
import { numberOfAttempts, gameEngine } from '../index.js';

const makeProgression = (start = 1, step = 1, length = 11) => {
  const summator = [];
  for (let i = start; i < start + step * length; i += step) {
    summator.push(i);
  }
  return summator;
};

//  Заменить нужный элемент массива на многоточие
const replacePosition = (arr, position) => {
  arr.splice(position, 1, '..');
  return arr;
};

const brainProgression = () => {
  const gameEngineData = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const firstNum = getRandom();
    const step = getRandom();
    const lengthOfProgression = 11;
    const progression = makeProgression(firstNum, step, lengthOfProgression);

    const numOfItemToChange = getRandom(lengthOfProgression - 1);
    const expected = progression[numOfItemToChange];
    const stringProgression = replacePosition(progression, numOfItemToChange);

    const question = `${stringProgression.join(' ')}`;
    gameEngineData.push([question, String(expected)]);
  }
  gameEngine(gameEngineData);
};

export default brainProgression;
