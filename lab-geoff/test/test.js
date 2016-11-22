'use strict'
let assert = require('assert');
let fileReader = require('../lib/fileReader.js')

describe('fileReader.js', function() {
  describe('fileReader()', function() {
    it('a value is returned', function(done) { //done will be the callback
      fileReader();
      assert.ok(fileOne)
      done();
    })
  })
})

//async mocha testing needs a done function to be called after task completes
