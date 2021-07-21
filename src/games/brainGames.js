import { getName, userWelcome, getGameName } from '../utils/index.js';
import brainCalc from './brainCalc.js';
import brainEven from './brainEven.js';
import brainGcd from './brainGcd.js';
import brainPrime from './brainPrime.js';
import brainProgression from './brainProgression.js';

const brainGames = () => {
  const name = getName();
  userWelcome(name);
};

export default brainGames;
