module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    // 每个样式前面空行
    'rule-empty-line-before': ['always', { except: ['after-single-line-comment', 'first-nested'] }],
    // 属性值 0 后面不加单位
    'length-zero-no-unit': true
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*']
}
