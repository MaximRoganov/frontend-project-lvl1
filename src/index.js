import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const userWelcome = (name) => {
  console.log(`Hello ${name}!`);
};

const getRandom = (maxNumber = 100) => {
  const number = Math.random();
  return (Math.floor(number * maxNumber));
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

const userTest3 = (username) => {
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
    console.log(`Unfortunatly, ${username}, you are not a winner!`);
  }
};

// Сделать массив-прогрессию
const makeProgression = (start, step) => {
  const summator = [];
  for (let i = start; i < start + step * 10; i += step) {
    summator.push(i);
  }
  return summator;
};

// Заменить нужны элемент массива на многоточие
const replacePosition = (arr, position) => {
  arr.splice(position, 1, '...');
  return arr;
};

const userTest4 = (username) => {
  let summary = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandom();
    const step = getRandom();
    const progression = makeProgression(firstNum, step);

    const numofToChange = getRandom(10);
    const result = progression[numofToChange];
    const stringProgression = replacePosition(progression, numofToChange);

    const answer = readlineSync.question(`Quest : Write the undefined step of ariphmetic progression ${stringProgression.toString()} = ? `);
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

// Простое ли число?
const isSimple = (num) => {
  if (num === 1) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const userTest5 = (username) => {
  let summary = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = getRandom();
    const result = isSimple(num) ? 'yes' : 'no';
    const answer = readlineSync.question(`Quest : Is ${num} simple (yes or no)? `);
    if (answer === result) {
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
  userTest3,
  userTest4,
  userTest5,
};
