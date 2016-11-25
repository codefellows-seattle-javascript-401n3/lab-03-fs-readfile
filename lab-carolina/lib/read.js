const fs = require('fs');

module.exports = function(file){
  var array = [];
  fs.readFile('text1.txt', function(err, data){
    if(err) throw err;
    array.push(data.toString('hex', 0, 8));
    fs.readFile('text2.txt', function(err, data){
      if(err) throw err;
      array.push(data.toString('hex', 0, 8));
      fs.readFile('text3.txt', function(err, data){
        if(err) throw err;
        array.push(data.toString('hex', 0, 8));
        file(array);
      });
    });
  });
};
