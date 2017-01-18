'use strict';
let fs = require('fs');

module.exports = function(cb) {
  let data = [];
  fs.readFile('./text-files/one.txt', function(err, dataOne) {
    let fileOne = dataOne.toString('hex', 0, 8);
    data.push(fileOne);
    console.log(fileOne);
    fs.readFile('./text-files/two.txt', function(err, dataTwo) {
      let fileTwo = dataTwo.toString('hex', 0, 8);
      data.push(fileTwo);
      console.log(fileTwo);
      fs.readFile('./text-files/three.txt', function(err, dataThree) {
        let fileThree = dataThree.toString('hex', 0, 8);
        data.push(fileThree);
        console.log(fileThree);
        cb(data);
      });
    });
  });
};