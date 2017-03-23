var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var cssnano = require('gulp-cssnano');
var config = require('./config');

gulp.task('sass', function() {

    var processors = [
        autoprefixer({browsers: ['last 8 versions'], cascade: false}),
        mqpacker({
            sort: true
        })
    ];
    return gulp.src(config.path.sass+'sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(cssnano())
        .pipe(gulp.dest(config.dest.css));
});

gulp.task('lib-css', function() {
    return gulp.src(config.path.sass +'lib/**/*.css')
        .pipe(concat('lib.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(config.dest.css));
});
gulp.task('lib-css:watch', function() {
    gulp.watch(config.path.sass + 'lib/**/*', ['lib-css']);
});

gulp.task('sass:watch', function() {
    gulp.watch(config.path.sass + 'sass/**/*', ['sass']);
});