'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler=require('node-sass');

gulp.task('sass', function() {

    return gulp.src('./_sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));    
});

gulp.task('watch', function() {
    gulp.watch('./_sass/**/*.scss', gulp.series('sass'));
});