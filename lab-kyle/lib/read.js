'strict mode';

const fs = require('fs');

function reader(file, file2, file3) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    console.log(data.slice(0,8).toString('hex'));
    fs.readFile(file2, function(err, data) {
      if (err) throw err;
      console.log(data.slice(0,8).toString('hex'));
      fs.readFile(file3, function(err, data) {
        if (err) throw err;
        console.log(data.slice(0,8).toString('hex'));
      });
    });
  });
}

module.exports = {
  reader: reader
};
