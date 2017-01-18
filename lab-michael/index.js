'use strict';

const fileReader = require('./lib/fs-readfile.js');

fileReader(function(data) {
  console.log(data);
});
