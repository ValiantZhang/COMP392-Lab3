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