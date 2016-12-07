let hex = require('./lib/readHex.js');

hex.readHex(function(data) {
  data.forEach(function(ele){
    console.log(ele);

  });
});
