import { getName, userWelcome, getGameName } from '../utils/index.js';
import brainCalc from './brainCalc.js';
import brainEven from './brainEven.js';
import brainGcd from './brainGcd.js';
import brainPrime from './brainPrime.js';
import brainProgression from './brainProgression.js';

const brainGames = () => {
  const name = getName();
  userWelcome(name);

  console.log('What game would you like to play?');

  const choosenGame = getGameName();

  switch (choosenGame) {
    case 'calc':
      brainCalc(name, false);
      break;
    case 'even':
      brainEven(name, false);
      break;
    case 'gcd':
      brainGcd(name, false);
      break;
    case 'prime':
      brainPrime(name, false);
      break;
    case 'progression':
      brainProgression(name, false);
      break;
    default:
      console.log('You dont choose a game');
  }
};

export default brainGames;
