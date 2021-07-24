import {
  getRandom,
  gameEngine,
} from '../utils/index.js';

const brainCalc = () => {
  const numberOfAttempts = 3;
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
        // дефолтное значение здесь только по требованию линтера
        // на игру это никак не влияет и несуществующий оператор здесь никак не передать
        // Скорее если numForOper будет неопределенного значения,
        // то код ниже защитит от поломки выдаваемое значение
        // и в случае чего пользователь будет получать просто кейс с вычитанием
        // надеюсь я понятно объяснил
        // если что-то не так, можно примерный рецепт того как лучше сделать?
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
