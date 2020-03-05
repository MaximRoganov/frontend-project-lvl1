#!/usr/bin/env node
import { getName, userWelcome, getGameName } from '../utils';
import brainCalc from '../games/brainCalc';
import brainEven from '../games/brainEven';
import brainGcd from '../games/brainGcd';
import brainPrime from '../games/brainPrime';
import brainProgression from '../games/brainProgression';

console.log('Welcome to the Brain Games2!');
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
