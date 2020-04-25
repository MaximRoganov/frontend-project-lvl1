import readlineSync from 'readline-sync';
import { getRandom, getName, userWelcome } from '../utils';


const brainCalc = (name) => {
  let username;
  if (name) {
    username = name;
  } else {
    username = getName();
    userWelcome(username);
  }


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
    console.log(`Unfortunately, ${username}, you are not a winner!`);
  }
};

export default brainCalc;
