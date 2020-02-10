#!/usr/bin/env node
import { getName, userWelcome } from '../utils';
import brainPrime from '../games/brainPrime';

console.log('Welcome to the Brain Games2!');

const name = getName();
userWelcome(name);
brainPrime(name);
