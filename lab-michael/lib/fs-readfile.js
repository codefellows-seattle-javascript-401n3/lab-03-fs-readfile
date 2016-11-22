const fs = require('fs');

module.exports = function(cb) {
  var textArray = [];
  fs.readFile(__dirname + '/../data/one.txt', function(err, data) {
    if (err) {
      console.log(err);
    }
    textArray.push(data.toString());
    fs.readFile(__dirname + '/../data/two.txt', function(err, data) {
      if (err) {
        console.log(err);
      }
      textArray.push(data.toString());
      fs.readFile(__dirname + '/../data/three.txt', function(err, data) {
        if (err) {
          console.log(err);
        }
        textArray.push(data.toString());
        cb(textArray);
      });
    });
  });

};
