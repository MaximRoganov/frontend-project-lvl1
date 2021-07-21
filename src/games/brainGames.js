import { getName, userWelcome, getGameName } from '../utils/index.js';

const brainGames = () => {
  console.log(Welcome to the Brain Games! );
  const name = getName();
  userWelcome(name);
};

export default brainGames;
