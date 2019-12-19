module.exports = {
  env: {
    browser: true,
    es6: true
  },
  settings: {
    polyfills: [
    ]
  },
  extends: ['ash-nazg/sauron', 'plugin:node/recommended-script'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  overrides: [
    {
      files: '*.md',
      rules: {

      }
    },
    {
      files: '*.html',
      rules: {
        'import/unambiguous': 0
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
  }
};
