var gulp = require('gulp');
var concat = require('gulp-concat-util');
var replace = require('gulp-replace');
var fontmin = require('gulp-fontmin');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var config = require('./config');

gulp.task('fontmin', function () {
    return gulp.src(config.path.fonts + 'fonts_source/**/*.ttf')
        .pipe(fontmin())
        .pipe(gulp.dest(config.path.fonts));
});

gulp.task ('fontcss', ['fontmin'], function() {
  return gulp.src('src/fonts/**/*.css')
     .pipe(concat('_fonts.sass'))
     .pipe(replace(/url\(\"/g, "url(\"../fonts/"))
     .pipe(gulp.dest(config.path.sass));
});

gulp.task('copyfont', ['fontcss'], function() {
    return gulp.src([
       config.path.fonts + '**/*.{ttf,woff,eof,svg}',
       '!' + config.path.fonts + 'fonts_source/**/*'
   ])
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('cleanfont', ['copyfont'], function () {
    return gulp.src([
        config.path.fonts + '*',
        '!' + config.path.fonts + 'fonts_source'
    ], {read: false})
        .pipe(clean());
});


gulp.task('fonts', ['cleanfont']);
