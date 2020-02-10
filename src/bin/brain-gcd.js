#!/usr/bin/env node
import { getName, userWelcome } from '../utils';
import brainGcd from '../games/brainGcd';

console.log('Welcome to the Brain Games2!');
const name = getName();
userWelcome(name);
brainGcd(name);
