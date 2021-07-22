import {
  getRandom,
  gameEngine,
} from '../utils/index.js';
// Сделать массив-прогрессию
const makeProgression = (start, step) => {
  const summator = [];
  for (let i = start; i < start + step * 10; i += step) {
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
  const numberOfAttempts = 3;
  const arrayForGameEngine = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const firstNum = getRandom();
    const step = getRandom();
    const progression = makeProgression(firstNum, step);

    const numofToChange = getRandom(10);
    const expected = progression[numofToChange];
    const stringProgression = replacePosition(progression, numofToChange);

    const question = `Question: ${stringProgression.join(' ')}`;
    arrayForGameEngine.push([question, expected]);
  }
  gameEngine(arrayForGameEngine);
};

export default brainProgression;
