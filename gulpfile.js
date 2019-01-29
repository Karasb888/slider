'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    runTimestamp = Math.round(Date.now()/1000);

// Definitions
var source = {
    js : [
        "js/jquery.min.js",
        "js/slick.min.js",
        "js/script.js"
    ]
};

// Tasks
// Webserver
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      fallback: 'index.html',
      open: 'index.html'
    }));
});

// Styles
gulp.task('less', function () {
    gulp.src('less/style.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
        .pipe(livereload({ start: true }));
});

// Scripts
gulp.task('scripts', function() {
    gulp.src(source.js)
        .pipe(concat('scripts.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('js-min/'))
        .pipe(livereload({ start: true }));
});

// Watch
gulp.task('watch', function() {
    gulp.watch(['less/*.less'], ['less']);
    gulp.watch(['js/*.js'], ['scripts']);
    gulp.watch(['index.html']);
    gulp.watch(['fonts/*.*'], ['fonts']);
    gulp.watch(['img/**/*'], ['images']);
});


// Default task
gulp.task('default', [ 'less', 'scripts', 'webserver', 'watch']);
