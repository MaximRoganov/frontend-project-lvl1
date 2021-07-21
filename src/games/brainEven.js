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
    console.log('Answer \'yes\' if number even otherwise answer \'no\'.');
  }

  let summary = 0;
  const numberOfAttempts = 3;

  for (let i = 0; i < numberOfAttempts; i += 1) {
    const number = getRandom();
    const expected = isEven(number);
    const answer = readlineSync.question(`Question: ${number} `);

    summary = makeLocalResult(answer, expected, summary, username);
    if (summary === -1) {
      return;
    }
  }
  makeResult(username, summary);
};
export default brainEven;
