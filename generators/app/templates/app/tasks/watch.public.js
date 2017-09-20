'use strict';

// -------------------------------------
//   Task: Watch: Public
// -------------------------------------
const ES6_SRC = ['public/**/*.es6.js', '!public/bower_components'];
module.exports = function(gulp) {
  return function() {
    gulp.watch(ES6_SRC, ['transpile']);
    gulp.watch(['public/elements/**/*.scss', 'public/*.scss'], ['compile:sass']);
    gulp.watch(['./public/_index.html','./public/_index-inline-loading-script.js','./public/index-inline.scss'],
    ['compile:index']);
  };
};
