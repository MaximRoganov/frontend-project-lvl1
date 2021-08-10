import { getRandom, numberOfAttempts } from '../utils/index.js';
import gameEngine from '../index.js';

const brainCalc = () => {
  const arrayForGameEngine = [];
  const operationsList = ['-', '+', '*'];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const numForOper = getRandom(operationsList.length - 1, 0);

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
        throw new Error(
          `Unexpected type of operation brainCalc function : 'current type equal ${numForOper}'!`,
        );
    }

    const question = `${firstNum} ${oper} ${secondNum}`;

    arrayForGameEngine.push([question, String(expected)]);
  }
  gameEngine(arrayForGameEngine);
};

export default brainCalc;
