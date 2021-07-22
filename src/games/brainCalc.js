import {
  getRandom,
  gameEngine,
} from '../utils/index.js';

const brainCalc = () => {
  const numberOfAttempts = 3;
  const arrayForGameEngine = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
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

    const question = `Question: ${firstNum} ${oper} ${secondNum}`;

    arrayForGameEngine.push([question, expected]);
  }
  gameEngine(arrayForGameEngine);
};

export default brainCalc;
