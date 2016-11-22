'use strict'
let fs = require('fs');

module.exports = function(cb) {
  let data = []
  fs.readFile('./text-files/one.txt', function(err, dataOne) {
    let fileOne = dataOne.toString('hex', 0, 8); //double check to see if this is 8 bytes
    data.push(fileOne);
    console.log('one');
    console.log(fileOne);
    fs.readFile('./text-files/two.txt', function(err, dataTwo) {
      let fileTwo = dataTwo.toString('hex', 0, 8);
      data.push(fileTwo);
      console.log('two');
      console.log(fileTwo);
      fs.readFile('./text-files/three.txt', function(err, dataThree) {
        let fileThree = dataThree.toString('hex', 0, 8);
        data.push(fileThree);
        console.log('three');
        console.log(fileThree);
        cb(data)
      })
    })
  })
}
