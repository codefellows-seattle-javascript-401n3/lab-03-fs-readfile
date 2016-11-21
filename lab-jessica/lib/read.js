var fs = require('fs');

function readFiles() {
  fs.readFile('../read-me/one.txt', function(err, data) {
    console.log(data.toString());
    fs.readFile('../read-me/two.txt', function(err, data) {
      console.log(data.toString());
      fs.readFile('../read-me/three.txt', function(err, data) {
        console.log(data.toString());
      });
    });
  });
}

module.exports = readFiles;
