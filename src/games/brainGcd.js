import {
  getRandom,
  gameEngine,
} from '../utils/index.js';

// Узнать делители и вывести их в массиве
const getDivider = (numb) => {
  const myArray = [];
  for (let i = 1; i <= numb; i += 1) {
    if (numb % i === 0) {
      myArray.push(i);
    }
  }
  return myArray;
};

// Узнать общие делители(сравнили 2 массива и получили одинаковые элементы массива)
const getBothDivider = (firstNum, secondNum) => {
  const myArray = [];
  for (let i = 0; i <= firstNum.length - 1; i += 1) {
    for (let b = 0; b <= secondNum.length - 1; b += 1) {
      if (firstNum[i] === secondNum[b]) {
        myArray.push(firstNum[i]);
      }
    }
  }
  return myArray;
};

// Узнать самый большой делитель(просто самый большой элемент массива)
const getBiggerDivider = (dividerArray) => {
  let biggerNum = 0;
  for (let i = 0; i <= dividerArray.length; i += 1) {
    if (dividerArray[i] > biggerNum) {
      biggerNum = dividerArray[i];
    }
  }
  return biggerNum;
};
const getGcd = (firstNum, secondNum) => (
  getBiggerDivider(
    getBothDivider(
      getDivider(firstNum),
      getDivider(secondNum),
    ),
  )
);

const brainGcd = () => {
  const numberOfAttempts = 3;
  const arrayForGameEngine = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const firstNum = getRandom();
    const secondNum = getRandom();
    const expected = getGcd(firstNum, secondNum);
    const question = `Question: ${firstNum} ${secondNum}`;
    arrayForGameEngine.push([question, expected]);
  }
  gameEngine(arrayForGameEngine);
};

export default brainGcd;
