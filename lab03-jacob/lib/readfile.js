var fs = require('fs');

function readFiles (arg) {
  fs.open(arg, 'r', function(err, fd) {
    if (err) {
      console.log('Can\'t open! error!');
      return;
    }
    var buffer = new Buffer(100);
    fs.read(fd, buffer, 0, 8, 0, function(err, num) {
      console.log(buffer.toString('hex', 0, num));
      return(buffer.toString('hex', 0, num));
    });
  });
}

function readThreeFiles(one, two, three) {
  readFiles(one);
  readFiles(two);
  readFiles(three);
}

//I got a lot of this code from the stackoverflow question: http://stackoverflow.com/questions/5784621/how-to-read-binary-files-byte-by-byte-in-node-js


module.exports = readThreeFiles;
