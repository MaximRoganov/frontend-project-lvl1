#!/usr/bin/env node
import { getName, userWelcome, userTest5 } from '..';

console.log('Welcome to the Brain Games2!');

const name = getName();
userWelcome(name);
userTest5(name);
