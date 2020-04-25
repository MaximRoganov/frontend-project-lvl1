import readlineSync from 'readline-sync';
import { getRandom, getName, userWelcome } from '../utils';
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

const brainPrime = (name) => {
  let username;
  if (name) {
    username = name;
  } else {
    username = getName();
    userWelcome(username);
  }

  let summary = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = getRandom();
    const result = isSimple(num) ? 'yes' : 'no';
    const answer = readlineSync.question(`Quest : Is ${num} simple (yes or no)? `);
    if (answer === result) {
      summary += 1;
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
    }
  }
  if (summary === 3) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Unfortunately, ${username}, you are not a winner!`);
  }
};
export default brainPrime;
