'use strict';

const logFile = require('./lib/logfile');

logFile.readFiles(['one.txt', 'two.txt', 'three.txt'], function(err, data) {
  for (let i = 0;i < data.length;i++)
    console.log(data[i].toString('hex').substr(0, 16));
});
