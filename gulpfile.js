const { src, dest, series, parallel } = require('gulp');
const image = require('gulp-image');

function htmlTask() {
  return src('src/*.html').pipe(dest('dist'));
}

function stylesTask() {
  return src('src/css/*.css').pipe(dest('dist/css'));
}

function imageTask() {
  return src('src/images/*').pipe(image()).pipe(dest('dist/images'));
}

exports.html = htmlTask;
exports.styles = stylesTask;
exports.images = imageTask;

exports.default = series(htmlTask, stylesTask, imageTask);
