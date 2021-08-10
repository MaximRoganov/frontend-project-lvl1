import readlineSync from 'readline-sync';

const gameEngine = (gameData) => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  let isAllRight = false;
  gameData.every(([question, expected]) => {
    const recieved = readlineSync.question(`Question: ${question} `);

    if (recieved === expected) {
      console.log('Correct!');
      isAllRight = true;
    } else {
      console.log(
        `'${recieved}' is wrong answer ;(. Correct answer was '${expected}'.`,
      );
      console.log(`Let's try again, ${username}!`);
      isAllRight = false;
    }

    return isAllRight;
  });

  if (isAllRight) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default gameEngine;
