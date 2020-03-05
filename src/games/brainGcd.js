import readlineSync from 'readline-sync';
import { getRandom } from '../utils';
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

const brainGcd = (username) => {
  let summary = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandom();
    const secondNum = getRandom();
    const result = getBiggerDivider(getBothDivider(getDivider(firstNum), getDivider(secondNum)));

    const answer = readlineSync.question(`Quest :  NOD of ${firstNum} and ${secondNum} = ? `);
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

export default brainGcd;
