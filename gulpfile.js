var bs = require('browser-sync').create();
var gulp = require('gulp');
var runSequence = require('run-sequence');
var rimraf = require('gulp-rimraf');
var ghPages = require('gulp-gh-pages');
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

gulp.task('gh-pages:deploy', function() {
  return gulp.src('src/**/*')
    .pipe(ghPages({ message: 'Обновление: ' + new Date() }));
});

gulp.task('gh-pages:clean', function() {
  return gulp.src('.publish')
    .pipe(rimraf());
});

gulp.task('gh-pages', function() {
  runSequence('gh-pages:deploy', 'gh-pages:clean');
});

gulp.task('default', function() {
  runSequence('browser-sync', 'watch');
});
