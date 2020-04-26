import { getName, userWelcome, getGameName } from '../utils';
import brainCalc from './brainCalc';
import brainEven from './brainEven';
import brainGcd from './brainGcd';
import brainPrime from './brainPrime';
import brainProgression from './brainProgression';

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
