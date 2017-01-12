'use strict';

const gulp = require('gulp');
const mocha = require('mocha');

gulp.task('test', function(){
  gulp.src('./test/*.js')
  .pipe(mocha());
});
