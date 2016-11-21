const fs = require('fs');

function read() {
  fs.readFile('./read-me/one.txt', function(err, data) {
    console.log(data.toString('hex', 0, 8));
    fs.readFile('./read-me/two.txt', function(err, data) {
      console.log(data.toString('hex', 0, 8));
      fs.readFile('./read-me/three.txt', function(err, data) {
        console.log(data.toString('hex', 0, 8));
      });
    });
  });
}

module.exports = read;
