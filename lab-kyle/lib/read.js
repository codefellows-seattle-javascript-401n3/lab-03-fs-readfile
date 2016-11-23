'use strict';

const fs = require('fs');


function readFileOne(file, file2, file3, results, callback) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    let formatted = data.slice(0,8).toString('hex');
    results.push(formatted);
    console.log(formatted);
    readFileTwo(file2, file3, results, callback);
  });
}

function readFileTwo(file2, file3, results, callback) {
  fs.readFile(file2, function(err, data) {
    if (err) throw err;
    let formatted = data.slice(0,8).toString('hex');
    results.push(formatted);
    console.log(formatted);
    readFileThree(file3, results, callback);
  });
}

function readFileThree(file3, results, callback) {
  fs.readFile(file3, function(err, data) {
    if (err) throw err;
    let formatted = data.slice(0,8).toString('hex');
    results.push(formatted);
    console.log(formatted);
    callback(results);
  });
}

function returnShit(results) {
  console.log(results);
  return results;
}

function readThreeFiles(file, file2, file3, callback) {
  let results = [];
  readFileOne(file, file2, file3, results, callback);
}

module.exports = {
  readThreeFiles: readThreeFiles,
  returnShit: returnShit
};

// function reader(file, file2, file3, callback) {
//   let results = [];
//   fs.readFile(file, function(err, data) {
//     if (err) throw err;
//     let formatted = data.slice(0,8).toString('hex');
//     results.push(formatted);
//     console.log(formatted);
//     fs.readFile(file2, function(err, data) {
//       if (err) throw err;
//       let formatted = data.slice(0,8).toString('hex');
//       results.push(formatted);
//       console.log(formatted);
//       fs.readFile(file3, function(err, data) {
//         if (err) throw err;
//         let formatted = data.slice(0,8).toString('hex');
//         results.push(formatted);
//         console.log(formatted);
//         callback(results);
//       });
//     });
//   });
// }
