import readlineSync from 'readline-sync';
import { getRandom } from '../utils';
// Сделать массив-прогрессию
const makeProgression = (start, step) => {
  const summator = [];
  for (let i = start; i < start + step * 10; i += step) {
    summator.push(i);
  }
  return summator;
};

// Заменить нужный элемент массива на многоточие
const replacePosition = (arr, position) => {
  arr.splice(position, 1, '...');
  return arr;
};

const brainProgression = (username) => {
  let summary = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandom();
    const step = getRandom();
    const progression = makeProgression(firstNum, step);

    const numofToChange = getRandom(10);
    const result = progression[numofToChange];
    const stringProgression = replacePosition(progression, numofToChange);

    const answer = readlineSync.question(`Quest : Write the undefined step of ariphmetic progression ${stringProgression.toString()} = ? `);
    if (parseInt(answer, 10) === result) {
      summary += 1;
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
    }
  }
  if (summary === 3) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Unfortunatly, ${username}, you are not a winner!`);
  }
};

export default brainProgression;
