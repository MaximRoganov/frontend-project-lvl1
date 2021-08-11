import getRandom from '../utils/index.js';
import numberOfAttempts from '../constants/index.js';
import gameEngine from '../index.js';

const brainCalc = () => {
  const gameEngineData = [];
  const operationsList = ['-', '+', '*'];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const numForOper = getRandom(operationsList.length - 1, 0);

    const firstNum = getRandom();

    const secondNum = getRandom();

    let oper; let expected;

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

    gameEngineData.push([question, String(expected)]);
  }
  gameEngine(gameEngineData);
};

export default brainCalc;
