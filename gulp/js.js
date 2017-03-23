var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var config = require('./config');


gulp.task('js', function (cb) {
    pump([
            gulp.src(config.path.js+'main/**/*.js'),
            concat('main.js'),
            uglify(),
            gulp.dest(config.dest.js)
        ],
        cb
    );
});

gulp.task('js:watch', function() {
    gulp.watch(config.path.js + 'main/**/*', ['js']);
});


gulp.task('lib-js', function (cb) {
    pump([
            gulp.src(config.path.js+'lib/**/*.js'),
            concat('lib.js'),
            uglify(),
            gulp.dest(config.dest.js)
        ],
        cb
    );
});

gulp.task('lib-js:watch', function() {
    gulp.watch(config.path.js + '**/*', ['lib-js']);
});