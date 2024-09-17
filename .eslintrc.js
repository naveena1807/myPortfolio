module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    /// "@babel/plugin-transform-private-property-in-object",
    //'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'no-use-before-define': ['error', { 'functions': false, 'classes': true }],
    'no-undef': 2,
    'import/extensions': [1, {
      'js': 'never',
      'jsx': 'never',
      'json': 'never',
    }],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  },
};
