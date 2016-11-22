'use strict';

const read = require('./lib/read.js');

read.reader('./texts/one.txt', './texts/two.txt', './texts/three.txt', read.returnShit);
