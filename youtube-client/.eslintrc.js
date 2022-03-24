module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'lines-between-class-members': 'off',
    'no-empty-function': 'off',
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-undef': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
  },
};
