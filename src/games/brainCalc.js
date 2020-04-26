import readlineSync from 'readline-sync';
import {
  getRandom,
  getName,
  userWelcome,
  makeResult,
  makeLocalResult,
} from '../utils';


const brainCalc = (username = getName(), needWelcome = true) => {
  if (needWelcome) {
    userWelcome(username);
  }

  let summary = 0;
  for (let i = 0; i < 3; i += 1) {
    const numForOper = Math.floor(Math.random() * 2);
    const firstNum = getRandom();
    const secondNum = getRandom();
    let oper = '-';
    let expected = 0;

    switch (numForOper) {
      case 0:
        oper = '-';
        expected = firstNum - secondNum;
        break;
      case 1:
        oper = '+';
        expected = firstNum + secondNum;
        break;
      case 2:
        oper = '*';
        expected = firstNum * secondNum;
        break;
      default:
        oper = '-';
        expected = firstNum - secondNum;
    }

    const answer = readlineSync.question(`Quest : ${firstNum} ${oper} ${secondNum} = ? `);

    summary = makeLocalResult(parseInt(answer, 10), expected, summary);
  }

  makeResult(username, summary);
};

export default brainCalc;
