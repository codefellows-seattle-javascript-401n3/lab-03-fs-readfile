let fs = require('fs');

fs.readFile('./lib/one.txt', function(err, data){
  if(err) throw err;
  let oneString = data.toString();
  let dataOne = oneString.substring(0,5);
  console.log('file one: ' + dataOne);
  fs.readFile('./lib/two.txt', function(err, data){
    if(err) throw err;
    let twoString = data.toString();
    let dataTwo = twoString.substring(0,5);
    console.log('file two: ' + dataTwo);
    fs.readFile('./lib/three.txt', function(err, data){
      if(err) throw err;
      let threeString = data.toString();
      let dataThree= threeString.substring(0,5);
      console.log('file three: ' + dataThree);
    });
  });
});
