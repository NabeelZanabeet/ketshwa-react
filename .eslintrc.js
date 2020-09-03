module.exports = {
  extends: ['prettier/react', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'import/no-cycle': [0],
    'import/prefer-default-export': [0],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/no-did-mount-set-state': [0],
    'react/no-did-update-set-state': [0],
    'react/jsx-props-no-spreading': [0],
    'no-nested-ternary': [0],
    'class-methods-use-this': [0],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: false,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'jest/no-jasmine-globals': [0],
    'jest/no-disabled-tests': [0],
  },
  env: {
    jest: true,
    mocha: true,
    es6: true,
    browser: true,
  },
};
