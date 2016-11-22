let fs = require('fs');
let oneString;
let twoString;
let threeString;
let allData = [];

// function otherFunction(data) {
//   console.log(data)
// }
//
// var file = fs.readFile('blah')
// otherFunction(file)
//
// fs.readFile('blah.txt', function(data) {
//   return data
//   otherFunction(data)
// })


//so i'm going to, instead of running a log at the end of each function, i'm going to push that specific file's data into an array.  then at the very end i'm going to call my callback, which is actually the testing function.

function readHex(cb) {
  fs.readFile('./lib/one.txt', function(err, data){
    if(err) throw err;
    oneString = data.toString();
    let dataOne = oneString.substring(0,5);
    allData.push(dataOne);
    fs.readFile('./lib/two.txt', function(err, data){
      if(err) throw err;
      twoString = data.toString();
      let dataTwo = twoString.substring(0,5);
      // console.log('data2: ' + dataTwo);
      allData.push(dataTwo);
      fs.readFile('./lib/three.txt', function(err, data){
        if(err) throw err;
        threeString = data.toString();
        let dataThree= threeString.substring(0,5);
        allData.push(dataThree);
        cb(allData);
      });
    });
  });
}

module.exports = {
  read: readHex,
  one: oneString,
  two: twoString,
  three: threeString,
  data: allData
};
