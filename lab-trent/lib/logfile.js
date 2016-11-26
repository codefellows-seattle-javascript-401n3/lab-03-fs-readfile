'use strict';

const fs = require('fs');

module.exports.readFiles = function(files, callback) {
  let fileContents = [];
  let finished = 0;
  for (let i = 0;i < files.length;i++) {
    fs.readFile(files[i], function(err, data) {
      fileContents[i] = data;
      finished++;
      if (finished >= files.length)
        callback(err, fileContents);
    });
  }
};
