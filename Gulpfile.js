var path = {
  css: './dist/**/*.css',
  scss: './src/styles/**/*.scss',
  jade: './src/**/*.jade',
  dist: './dist/'
};

var gulp = require('gulp')
var plugins = require('gulp-load-plugins')({
  rename: {
    'gulp-jade': 'gulpJade',
    'jade': 'jade'
  }
})

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins, path)
}
gulp.task('auto-prefix', getTask('autoPrefixer'))
gulp.task('jade', getTask('jade'))
gulp.task('sass', getTask('sass'))
gulp.task('clean', plugins.shell.task(['rimraf ./dist/']))
gulp.task('watch', getTask('watch'))

gulp.task('publish', getTask('publish'))
gulp.task('prepublish', ['clean', 'sass', 'jade'])
gulp.task('dev', ['watch'])

gulp.task('default', ['dev'])
