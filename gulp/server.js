var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config = require('./config');

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: config.dest.root
        },
        files: [config.dest.html + '*.html', config.dest.css + '*.css', config.dest.js + '*.js'],
        port: 8080
    });
});