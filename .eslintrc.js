const OFF = 0
// const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
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
  plugins: ['promise', 'react', 'react-hooks', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json']
      },
      typescript: {}
    }
  },
  rules: {
    'no-shadow': OFF,
    'max-classes-per-file': OFF,
    'no-param-reassign': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'import/prefer-default-export': OFF,
    'no-underscore-dangle': ['off', 'always'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'react/button-has-type': OFF,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
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
