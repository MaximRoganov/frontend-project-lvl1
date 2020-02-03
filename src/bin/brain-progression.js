#!/usr/bin/env node
import { getName, userWelcome, userTest4 } from '..';

console.log('Welcome to the Brain Games2!');

const name = getName();
userWelcome(name);
userTest4(name);
