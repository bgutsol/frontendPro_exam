var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    config = require('./config');

var svgConfig = {
    mode: {
        symbol: true,
        symbol:{
            dest: "",
            sprite : "sprite.symbol.svg",
            example: false
        }
    }

};

gulp.task('svg', function() {

    return gulp.src(config.path.svg + '*.svg')
        .pipe(svgSprite( svgConfig ))
        .pipe(gulp.dest(config.dest.svg));
});

gulp.task('svg:watch', function() {
    gulp.watch(config.path.svg + '*', ['svg']);
});