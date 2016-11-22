var fs = require('fs');

function readFiles(arg1, arg2, arg3, callback) {
  let resultArr = [];
  fs.readFile(arg1, function(err, data) {
    if (err) throw err;
    console.log(data.toString('hex', 0, 8));
    resultArr.push(arg1);
    readTwo();
  });
  function readTwo() {
    fs.readFile(arg2, function(err, data) {
      if (err) throw err;
      console.log(data.toString('hex', 0, 8));
      resultArr.push(arg2);
      readThree(arg3);
    });
  }
  function readThree() {
    fs.readFile(arg3, function(err, data) {
      if (err) throw err;
      console.log(data.toString('hex', 0, 8));
      resultArr.push(arg3);
      callback(resultArr);
    });
  } //bonus points?????
}

module.exports = readFiles;

// const filesArr = [];

// function readFiles (arg) {
//   fs.open(arg, 'r', function(err, fd) {
//     if (err) {
//       console.log('Can\'t open! error!');
//       return;
//     }
//     filesArr.push(arg);
//     var buffer = new Buffer(100);
//     fs.read(fd, buffer, 0, 8, 0, function(err, num) {
//       console.log(buffer.toString('hex', 0, num));
//       console.log(filesArr);
//       return(filesArr);
//     });
//   });
// }
// //
// function readThreeFiles(one, two, three) {
//   readFiles(one);
//   readFiles(two);
//   readFiles(three);
// }
//Here is one way to do it. But Scott didn't like it.

//I got a lot of this code from the stackoverflow question: http://stackoverflow.com/questions/5784621/how-to-read-binary-files-byte-by-byte-in-node-js
