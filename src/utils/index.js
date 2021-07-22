import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const userWelcome = (name) => {
  console.log(`Hello, ${name}!`);
};

const getRandom = (
  maxNumber = 100,
  minNumber = 1,
) => Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));

const gameEngine = (gameEngineArray) => {
  const username = getName();
  userWelcome(username);
  let isAllRight = false;
  gameEngineArray.every(([question, expected]) => {
    const recieved = readlineSync.question(`${question} `);

    if (recieved === String(expected)) {
      console.log('Correct!');
      isAllRight = true;
    } else {
      console.log(`'${recieved}' is wrong answer ;(. Correct answer was '${expected}'.`);
      console.log(`Let's try again, ${username}!`);
      isAllRight = false;
    }

    return isAllRight;
  });

  if (isAllRight) {
    console.log(`Congratulations, ${username}!`);
  }
};

export {
  getName,
  userWelcome,
  getRandom,
  gameEngine,
};
