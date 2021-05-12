import readlineSync from 'readline-sync';
import {
  getRandom,
  getName,
  userWelcome,
  makeResult,
  makeLocalResult,
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
  arr.splice(position, 1, '...');
  return arr;
};

const brainProgression = (username = getName(), needWelcome = true) => {
  if (needWelcome) {
    userWelcome(username);
  }

  let summary = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandom();
    const step = getRandom();
    const progression = makeProgression(firstNum, step);

    const numofToChange = getRandom(10);
    const expected = progression[numofToChange];
    const stringProgression = replacePosition(progression, numofToChange);

    const answer = readlineSync.question(`Quest : Write the undefined step of ariphmetic progression ${stringProgression.toString()} = ? `);
    summary = makeLocalResult(parseInt(answer, 10), expected, summary);
  }
  makeResult(username, summary);
};

export default brainProgression;
