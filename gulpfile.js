//adding required modules
var gulp = require('gulp');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tscProject = tsc.createProject('tsconfig.json');
var connect = require('gulp-connect');
var open = require('gulp-open');

//example task
var TypeScriptSources = [
    './Scripts/**/*.ts',
    './typings/**/*.ts'];
    
var HTMLSources = ['./**/*.html'];

var CSSSources = ['./Content/**/*.css'];

gulp.task('transpile', function () {
    gutil.log("transpiling...");

    var tsResult = gulp.src(TypeScriptSources)
        .pipe(sourcemaps.init())
        .pipe(tsc(tscProject))
        .on('error', gutil.log);

    tsResult.dts.pipe(gulp.dest('./Scripts/'));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./Scripts/'))
        .on('error', gutil.log)
        .pipe(connect.reload());

});

gulp.task("html", function () {
    gutil.log("html changed...");
    gulp.src(HTMLSources)
        .pipe(connect.reload());
});

gulp.task('css', function(){
   gutil.log("css files changed...");
   gulp.src(CSSSources)
   .pipe(connect.reload()); 
});

// This task watches .ts .js and .html files for any changes
gulp.task("watch", function () {
    gulp.watch(TypeScriptSources, ['transpile']);
    gulp.watch(HTMLSources, ['html']);
    gulp.watch(CSSSources, ['css']);
});

gulp.task("connect", function () {
    connect.server({
        root: './',
        livereload: true
    });
});


gulp.task("default", ["transpile", "html", "css", "connect", "watch"]);