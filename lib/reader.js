//should console.log the hex results of TESTED fs.readFile('path') stuff

'use strict';

let fs = require('fs');
// let bluebird = require('blubird')
// readFile = bluebird.promisify(fs.readfile)
//
// readFile('./somefile.txt')
//   .then(function(data) {
//     console.log(data)
//     return readFile('./otherfile.txt')
//   })
//   .then(function(data) {
//
//   })

// fs.readFile('./lib/one.txt', function(err, data) {
//   if(err) {
//     process.stdout.write(err);
//     return;
//   }
//   let outputOne = data.slice(0,9).toString('hex');
//   process.stdout.write(outputOne);
//   outputTwo();
// });
//
// let outputTwo = fs.readFile('./lib/two.txt', function(err, data) {
//   if(err) {
//     process.stdout.write(err);
//     return;
//   }
//   let outputTwo = data.slice(0,9).toString('hex');
//   process.stdout.write(outputTwo);
//   outputThree();
// });
//
// let outputThree = fs.readFile('./lib/three.txt', function(err, data) {
//   if(err) {
//     process.stdout.write(err);
//     return;
//   }
//   let outputThree = data.slice(0,9).toString('hex');
//   process.stdout.write(outputThree);
// });
let path1 = './lib/one.txt';
let path2 = './lib/two.txt';
let path3 = './lib/three.txt';

let readAll = function() {
  let hexArray = [];
  fs.readFile(path1, function(err, data) {
    if(err) {
      process.stdout.write(err);
    }
    hexArray.push(data.slice(0,9).toString('hex'));
    fs.readFile(path2, function(err, data) {
      if(err) {
        process.stdout.write(err);
      }
      hexArray.push(data.slice(0,9).toString('hex'));
      fs.readFile(path3, function(err, data) {
        if(err) {
          process.stdout.write(err);
        }
        hexArray.push(data.slice(0,9).toString('hex'));
        if(hexArray[2]){
          return hexArray;
        }
      });
    });
  });
};
readAll();
// let paths = [path1, path2, path3];
// let readAll = function(paths, cb) {
//   let hexArray = [];
//   paths.forEach(function(path){
//     fs.readFile(path, function(err, data) {
//       hexArray.push(data.slice(0,9).toString('hex'));
//     });
//   });
// };
// readAll();
