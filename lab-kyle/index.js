'use strict';

const read = require('./lib/read.js');

read.readFiles(['./texts/one.txt', './texts/two.txt', './texts/three.txt'], read.returnShit);
