'use strict';

const fileRead = require('./lib/fileRead');

function printResults (err, results) {
  if(err) {
    console.error(err);
  }

  console.log(results);

}

const paths = ['./one.txt', './two.txt', './three.txt'];

fileRead.splice(paths, printResults, fileRead.splice);
