import getRandom from '../utils/index.js';
import numberOfAttempts from '../constants/index.js';
import gameEngine from '../index.js';

const brainCalc = () => {
  const gameEngineData = [];
  const operationsList = ['-', '+', '*'];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const numForOper = getRandom(operationsList.length - 1, 0);
    const finallyOper = operationsList[numForOper];

    const firstNum = getRandom();

    const secondNum = getRandom();

    let oper; let expected;

    switch (finallyOper) {
      case '-':
        expected = firstNum - secondNum;
        break;
      case '+':
        expected = firstNum + secondNum;
        break;
      case '*':
        expected = firstNum * secondNum;
        break;
      default:
        throw new Error(
          `Unexpected type of operation brainCalc function : 'current type equal ${numForOper}'!`,
        );
    }

    const question = `${firstNum} ${finallyOper} ${secondNum}`;

    gameEngineData.push([question, String(expected)]);
  }
  gameEngine(gameEngineData);
};

export default brainCalc;
