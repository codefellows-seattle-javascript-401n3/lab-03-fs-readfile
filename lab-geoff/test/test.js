'use strict'
let assert = require('assert');
let fileReader = require('../lib/fileReader.js')
let index = require('../index.js');

// process.argv 2, 3 and 4 <-- maybe these could be used as arguments


describe('fileReader.js', function() {
  describe('fileReader()', function() {
    it('a function is exported from fileReader.js', function(done) { //done will be the callback
      console.log('testingOne');

      fileReader(function(data) {
         // create assertions for that data
         done()
      })
    })
  })
})

// assert.equal('actual value', 'expected value')

// method exists
// reads files
// logs something
// logs the right amount of something
// logs the somethings in the right order
