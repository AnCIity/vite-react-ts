// const OFF = 0
// const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json']
      }
    }
  },
  plugins: ['promise', 'react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never'
      }
    ]
  }
}
