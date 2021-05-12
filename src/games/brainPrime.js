import readlineSync from 'readline-sync';
import {
  getRandom,
  getName,
  userWelcome,
  makeResult,
  makeLocalResult,
} from '../utils/index.js';
// Простое ли число?
const isSimple = (num) => {
  if (num === 1) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = (username = getName(), needWelcome = true) => {
  if (needWelcome) {
    userWelcome(username);
  }
  let summary = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = getRandom();
    const expected = isSimple(num) ? 'yes' : 'no';
    const answer = readlineSync.question(`Quest : Is ${num} simple (yes or no)? `);

    summary = makeLocalResult(answer, expected, summary);
  }
  makeResult(username, summary);
};
export default brainPrime;
