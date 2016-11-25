const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('welcome', function() {
  console.log('Welcome to the Read File Test');
});

gulp.task('test', function() {
  gulp.src('./test/*-test.js')
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function() {
  gulp.src('./**/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());

});

gulp.task('dev', function() {
  gulp.watch('./**/*.js', ['test', 'lint']);
});

gulp.task('default', ['welcome', 'dev']);

