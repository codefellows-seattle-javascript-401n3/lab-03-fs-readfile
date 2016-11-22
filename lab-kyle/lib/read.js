'strict mode';

const fs = require('fs');

function returnShit(results) {
  console.log(results);
  return results;
};

function reader(file, file2, file3, callback) {
  let results = [];
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    let formatted = data.slice(0,8).toString('hex');
    results.push(formatted);
    console.log(formatted);
    fs.readFile(file2, function(err, data) {
      if (err) throw err;
      let formatted = data.slice(0,8).toString('hex');
      results.push(formatted);
      console.log(formatted);
      fs.readFile(file3, function(err, data) {
        if (err) throw err;
        let formatted = data.slice(0,8).toString('hex');
        results.push(formatted);
        console.log(formatted);
        callback(results);
      });
    });
  });
}

module.exports = {
  reader: reader,
  returnShit: returnShit
};
