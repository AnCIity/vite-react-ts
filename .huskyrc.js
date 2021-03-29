module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint --config .commitlintrc.js -E HUSKY_GIT_PARAMS'
  }
}
