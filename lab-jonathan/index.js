let hex = require('./lib/readHex.js');

hex.read(function(data) {
  for(var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
  // console.log("data: " + data);
});












// * You will need to write tests that guarantee that the files are logged in order.
// * You will also need to look up and implement async testing, making sure that you are not getting "false positives" (tests that are passing but shouldn't be).
//  * hint read mocha docs