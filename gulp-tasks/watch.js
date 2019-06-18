module.exports = function watch(gulp, config) {
  gulp.task('watch', () => {
    // bs.init(config.browserSync);
    gulp.watch(
      [...config.styles.watch, ...config.scripts.watch],
      gulp.series(
        gulp.parallel('styles:lint', 'scripts:lint'),
        gulp.parallel('styles', 'scripts')
      )
    );
  });
};

