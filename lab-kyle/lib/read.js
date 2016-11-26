'use strict';

const fs = require('fs');

function readAFile(files, results, callback) {
  if (files.length === 0) {
    callback(results);
  } else {
    fs.readFile(files[0], function(err, data) {
      if (err) throw err;
      files.shift();
      let formatted = data.slice(0,8).toString('hex');
      results.push(formatted);
      console.log(formatted);
      readAFile(files, results, callback);
    });
  }
}

function returnShit(results) {
  return results;
}

function readFiles(files, callback) {
  let results = [];
  readAFile(files, results, callback);
}

module.exports = {
  readFiles: readFiles,
  returnShit: returnShit
};
