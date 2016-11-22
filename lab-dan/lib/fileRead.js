'use strict';

module.exports = {};

const fs = require('fs');

module.exports.splice = function (pathArray, printcb, next) {

  if (!Array.isArray(pathArray)) console.error('function was not passed an array of paths');

  // create new array for callback
  const newArray = pathArray.slice(1);

  // set callback to undefined if there are no more paths to read
  if (newArray.length === 0) next = undefined;

  // read the first path in array, print results,
  // and then recursively call this function if there are more paths to read
  fs.readFile(pathArray[0], function (err, content) {
    if (err) printcb(err);

    const result = content.toString('hex',0,8);

    printcb(null, result);

    if (next !== undefined) {
      next(newArray, printcb, next);
    }

  });
};
