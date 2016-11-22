'use strict'
let mocha = require('mocha');
let assert = require('assert');
let fileReader = require('../lib/fileReader.js')

describe('fileReader.js', function() {
  describe('intakeorsomething(this may not matter until there are multiple functions)', function() {
    it('there is a function to read files', function() {
      assert.ok(fileReader)
    })
  })
})
