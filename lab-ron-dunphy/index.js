'use strict';

const readFile = require('./lib/read-files.js');

const readFileData = () => {
  readFile((err, data) =>{
    err ? console.log(err) : console.log(data);
  });
};
readFileData();
