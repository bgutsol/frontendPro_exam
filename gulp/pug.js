var gulp = require('gulp');
var pug = require("gulp-pug");
var frontMatter = require('gulp-front-matter');
var config = require('./config');

gulp.task('pug', function() {
    return gulp.src([
        config.path.pug + '**/*.pug',
        '!' + config.path.pug + '**/_*.pug'])
        .pipe(frontMatter({ property: 'data' }))
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(config.dest.html));
});

gulp.task('pug:watch', function() {
    gulp.watch(config.path.pug + '**/*', ['pug']);
});
