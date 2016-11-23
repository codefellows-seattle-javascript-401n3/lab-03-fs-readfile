'use strict';

const read = require('./lib/read.js');

read.readThreeFiles('./texts/one.txt', './texts/two.txt', './texts/three.txt', read.returnShit);
