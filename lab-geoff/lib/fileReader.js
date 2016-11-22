'use strict'
let fs = require('fs');

module.exports = function() {
  fs.readFile('./text-files/one.txt', function(err, dataOne) {
    let fileOne = dataOne.toString('hex', 0, 8); //double check to see if this is 8 bytes
    console.log(fileOne)
    fs.readFile('./text-files/two.txt', function(err, dataTwo) {
      console.log(dataTwo.toString('hex', 0, 8));
      console.log('two')
    })
  })
}
