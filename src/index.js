import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

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

const userTest2 = (username) => {
  let summary = 0;
  for (let i = 0; i < 3; i += 1) {
    const numForOper = Math.floor(Math.random() * 2);
    const firstNum = getRandom();
    const secondNum = getRandom();
    let oper = '-';
    let result = 0;

    switch (numForOper) {
      case 0:
        oper = '-';
        result = firstNum - secondNum;
        break;
      case 1:
        oper = '+';
        result = firstNum + secondNum;
        break;
      case 2:
        oper = '*';
        result = firstNum * secondNum;
        break;
      default:
        oper = '-';
        result = firstNum - secondNum;
    }

    const answer = readlineSync.question(`Quest : ${firstNum} ${oper} ${secondNum} = ? `);
    if (parseInt(answer, 10) === result) {
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
  userTest2,
};
