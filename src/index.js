import readlineSync from 'readline-sync';

const gameEngine = (gameData) => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  const isGameSucces = gameData.every(([question, expected]) => {
    const recieved = readlineSync.question(`Question: ${question} `);

    if (recieved === expected) {
      console.log('Correct!');
      return true;
    }
    console.log(
      `'${recieved}' is wrong answer ;(. Correct answer was '${expected}'.`,
    );
    console.log(`Let's try again, ${username}!`);
    return false;
  });

  if (isGameSucces) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default gameEngine;
