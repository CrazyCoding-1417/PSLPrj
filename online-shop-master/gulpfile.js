'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    nodemon = require('gulp-nodemon');

gulp.task('lint', function() {
    return gulp.src(['**/*.js', '!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.formatEach())
      .pipe(eslint.failAfterError())
});

gulp.task('develop', function() {
    nodemon({
      exec: 'node --inspect',
      script: 'server.js',
      ext: 'html js',
      tasks: ['lint'],
      env: { 'NODE_ENV': 'devlopment' }
    });
});