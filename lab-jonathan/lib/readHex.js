let fs = require('fs');


module.exports = {
  readHex: function(cb) {
    let allData = [];
    fs.readFile('./lib/one.txt', function(err, data){
      if(err) throw err;
      allData.push(data.toString('utf8', 0, 5));
      fs.readFile('./lib/two.txt', function(err, data2){
        if(err) throw err;
        allData.push(data2.toString('utf8', 0, 5));
        fs.readFile('./lib/three.txt', function(err, data3){
          if(err) throw err;
          allData.push(data3.toString('utf8', 0, 5));
          cb(allData);
        });
      });
    });
  }
};
