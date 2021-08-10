import { getRandom, numberOfAttempts } from '../utils/index.js';
import gameEngine from '../index.js';
// Сделать массив-прогрессию
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
  const arrayForGameEngine = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const firstNum = getRandom();
    const step = getRandom();
    const lengthOfProgression = 11;
    const progression = makeProgression(firstNum, step, lengthOfProgression);

    const numofToChange = getRandom(10);
    const expected = progression[numofToChange];
    const stringProgression = replacePosition(progression, numofToChange);

    const question = `${stringProgression.join(' ')}`;
    arrayForGameEngine.push([question, String(expected)]);
  }
  gameEngine(arrayForGameEngine);
};

export default brainProgression;
