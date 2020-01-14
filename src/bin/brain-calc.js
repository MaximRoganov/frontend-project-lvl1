#!/usr/bin/env node
import { getName, userWelcome, userTest2 } from '..';

console.log('Welcome to the Brain Games2!');

const name = getName();
userWelcome(name);
userTest2(name);
