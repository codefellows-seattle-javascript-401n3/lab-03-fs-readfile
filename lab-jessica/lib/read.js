'use strict';

const fs = require('fs');

function read(callback) {
  let files = [];
  fs.readFile('./read-me/one.txt', function(err, data) {
    let file1 = 'file 1 ' + data.toString('hex', 0, 8);
    files.push(file1);
    console.log(file1);
    fs.readFile('./read-me/two.txt', function(err, data) {
      let file2 = 'file 2 ' + data.toString('hex', 0, 8);
      files.push(file2);
      console.log(file2);
      fs.readFile('./read-me/three.txt', function(err, data) {
        let file3 = 'file 3 ' + data.toString('hex', 0, 8);
        files.push(file3);
        console.log(file3);
        callback(files);
      });
    });
  });
}

module.exports = read;
