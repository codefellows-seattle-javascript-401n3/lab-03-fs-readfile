'use strict'
let fs = require('fs');

exports.fileReader = function(cb) {
  let data = []
  fs.readFile('./text-files/one.txt', function(err, dataOne) {
    let fileOne = dataOne.toString('hex', 0, 8); //double check to see if this is 8 bytes
    exports.fileone = fileOne;
    //push here
    fs.readFile('./text-files/two.txt', function(err, dataTwo) {
      let fileTwo = dataTwo.toString('hex', 0, 8);
      fs.readFile('./text-files/three.txt', function(err, dataThree) {
        let fileThree = dataThree.toString('hex', 0, 8);
        cb(data)
      })
    })
  })
}
