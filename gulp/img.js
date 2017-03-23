var gulp = require('gulp');
var config = require('./config');

gulp.task('img', function() {
    return gulp.src(config.path.img + '**/*')
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('img:watch', function() {
    gulp.watch(config.path.img + '**/*', ['img']);
});