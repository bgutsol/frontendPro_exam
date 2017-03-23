var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('./config');

gulp.task('watch', [
    'sass:watch',
    'lib-css:watch',
    'pug:watch',
    'js:watch',
    'lib-js:watch',
    'img:watch',
    'svg:watch'
]);
gulp.task('refresh', [
    'js',
    'lib-js',
    'img',
    'pug',
    'sass',
    'lib-css',
    'svg'
]);
gulp.task('default', ['refresh', 'server', 'watch'], function() {});
