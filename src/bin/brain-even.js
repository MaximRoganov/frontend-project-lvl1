#!/usr/bin/env node
import { getName, userWelcome } from '../utils';
import brainEven from '../games/brainEven';

console.log('Welcome to the Brain Games2!');
const name = getName();
userWelcome(name);
brainEven(name);
