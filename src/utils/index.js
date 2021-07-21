import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const userWelcome = (name) => {
  console.log(`Hello, ${name}!`);
};

const getRandom = (
  maxNumber = 100,
  minNumber = 1,
) => Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));

const getGameName = () => readlineSync.question('calc,even,gcd,prime,progression?');

const makeLocalResult = (answer, expected, summary, username) => {
  let localSummary = summary;
  if (answer === expected) {
    localSummary += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
    console.log(`Let's try again, ${username}!`)
    localSummary = -1;
  }
  return localSummary;
};

const makeResult = (username, summary) => {
  if (summary === 3) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Unfortunately, ${username}, you are not a winner!`);
  }
};

export {
  getName,
  userWelcome,
  getRandom,
  getGameName,
  makeResult,
  makeLocalResult,
};
