'use strict';

const fs = require('fs');

function readFiles(files, callback) {
  let fileContents = [];
  let finished = 0;
  for (let i = 0;i < files.length;i++) {
    fs.readFile(files[i], function(err, data) {
      fileContents[i] = data;
      finished++;
      if (finished >= files.length)
        callback(fileContents);
    });
  }
}

function printInOrder(data) {
  for (let i = 0;i < data.length;i++) {
    console.log(data[i].toString('hex'));
  }
}

function readAndPrintFiles(files) {
  readFiles(files, function(contents) {
    printInOrder(contents);
  });
}

module.exports = {
  readFiles,
  printInOrder,
  readAndPrintFiles
};
