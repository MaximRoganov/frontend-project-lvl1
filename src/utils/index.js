import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const userWelcome = (name) => {
  console.log('Welcome to the Brain Games2!');
  console.log(`Hello ${name}!`);
};

const getRandom = (
  maxNumber = 100,
  minNumber = 1,
) => Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));

const getGameName = () => readlineSync.question('calc,even,gcd,prime,progression?');

export {
  getName,
  userWelcome,
  getRandom,
  getGameName,
};
