module.exports = function(gulp, plugins, path) {
  return plugins.shell.task([
    // push dist to domain using surge.sh
    'surge --domain smooth-landing.surge.sh --project ./dist/'
  ])
}
