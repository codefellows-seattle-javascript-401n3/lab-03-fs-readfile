const fs = require('fs');

module.exports = function(cb) {
  var textArray = [];
  fs.readFile(__dirname + '/../data/one.txt', function(err, data) {
    if (err) console.error(err);
    textArray.push(data.toString('hex', 0, 8));

    fs.readFile(__dirname + '/../data/two.txt', function(err, data) {
      if (err) console.error(err);
      textArray.push(data.toString('hex', 0, 8));

      fs.readFile(__dirname + '/../data/three.txt', function(err, data) {
        if (err) console.error(err);
        textArray.push(data.toString('hex', 0, 8));
        cb(textArray);
      });
    });
  });

};
