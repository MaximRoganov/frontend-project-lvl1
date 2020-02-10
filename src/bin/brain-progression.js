#!/usr/bin/env node
import { getName, userWelcome } from '../utils';
import brainProgression from '../games/brainProgression';

console.log('Welcome to the Brain Games2!');
const name = getName();
userWelcome(name);
brainProgression(name);
