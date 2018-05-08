var bs = require('browser-sync').create();
var gulp = require('gulp');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: 'src'
    },
    notify: false,
    ui: false,
    ghostMode: false
  });
});

gulp.task('watch', function() {
  watch('src/**', bs.reload);
});

gulp.task('default', function() {
  runSequence('browser-sync', 'watch');
});
