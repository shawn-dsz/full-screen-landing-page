module.exports = function(gulp, plugins, path) {
  return gulp.src(path.dist, {
      read: false
    })
    .pipe(plugins.clean());
}
