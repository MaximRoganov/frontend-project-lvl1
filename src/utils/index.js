import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const userWelcome = (name) => {
  console.log(`Hello ${name}!`);
};

const getRandom = (maxNumber = 100) => {
  const number = Math.random();
  return (Math.floor(number * maxNumber));
};

export {
  getName,
  userWelcome,
  getRandom,
};
