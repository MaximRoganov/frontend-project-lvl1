import readlineSync from 'readline-sync';

const getName = () => {
  return readlineSync.question('May I have your name? ');
};
const userWelcome = (name) => {
  console.log(`Hello ${name}!`);
};
const getRandom = () => {
  const number = Math.random();
  return (Math.floor(number * 100));
};
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const userTest = (username = 'Username') => {
  let summary = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = getRandom();
    const expecteed = isEven(number);

    const answer = readlineSync.question(`Quest : ${number} is even? `);

    if (answer === expecteed) {
      summary += 1;
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
    }
  }
  if (summary === 3) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Unfortunatly, ${username}, you are not a winner!`);
  }
};

export {
  getName,
  userTest,
  userWelcome,
};
