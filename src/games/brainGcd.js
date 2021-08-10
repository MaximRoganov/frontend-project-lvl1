import { getRandom, numberOfAttempts } from '../utils/index.js';
import gameEngine from '../index.js';

const getGcd = (first, second) => {
  if (first === 1 || second === 1) {
    return 1;
  }
  const bigger = first > second ? first : second;
  const smaller = first < second ? first : second;

  const residue = bigger % smaller;

  if (residue === 0) {
    return smaller;
  }
  return getGcd(smaller, residue);
};

const brainGcd = () => {
  const arrayForGameEngine = [];
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const firstNum = getRandom();
    const secondNum = getRandom();
    const expected = getGcd(firstNum, secondNum);
    const question = `${firstNum} ${secondNum}`;
    arrayForGameEngine.push([question, String(expected)]);
  }
  gameEngine(arrayForGameEngine);
};

export default brainGcd;
