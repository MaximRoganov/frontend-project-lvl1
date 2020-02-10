#!/usr/bin/env node
import { getName, userWelcome } from '../utils';
import brainCalc from '../games/brainCalc';

console.log('Welcome to the Brain Games2!');
const name = getName();
userWelcome(name);
brainCalc(name);
