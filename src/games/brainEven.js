import readlineSync from 'readline-sync';
import {
  getRandom,
  getName,
  userWelcome,
  makeResult,
  makeLocalResult,
} from '../utils/index.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const brainEven = (username = getName(), needWelcome = true) => {
  if (needWelcome) {
    userWelcome(username);
  }

  let summary = 0;
  const numberOfAttempts = 3;

  for (let i = 0; i < numberOfAttempts; i += 1) {
    const number = getRandom();
    const expected = isEven(number);

    const answer = readlineSync.question(`Quest : ${number} is even? `);

    summary = makeLocalResult(answer, expected, summary);
  }
  makeResult(username, summary);
};
export default brainEven;
