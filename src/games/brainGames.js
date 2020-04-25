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
      brainCalc(name);
      break;
    case 'even':
      brainEven(name);
      break;
    case 'gcd':
      brainGcd(name);
      break;
    case 'prime':
      brainPrime(name);
      break;
    case 'progression':
      brainProgression(name);
      break;
    default:
      console.log('You dont choose a game');
  }
};

export default brainGames;
