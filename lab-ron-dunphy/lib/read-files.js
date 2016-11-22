'use strict';

const fs = require('fs');

var fileArray = [];

module.exports = function(callback) {

  fs.readFile('one.txt', function(err, data){
    if(err) {callback(err);}
    fileArray.push(data.toString('hex', 0, 8));

    fs.readFile('two.txt', function(err, data){
      if(err) {callback(err);}
      fileArray.push(data.toString('hex', 0, 8));

      fs.readFile('three.txt', function(err, data){
        if(err) {callback(err);}
        fileArray.push(data.toString('hex', 0, 8));
        callback(fileArray);
      });
    });
  });
};
