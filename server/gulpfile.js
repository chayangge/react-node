var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');

gulp.task('start', () => {
    nodemon({
        script: 'index.js',
        ext: 'js',
        watch: ['index.js', 'routes', 'lib', 'models']
    });
});
