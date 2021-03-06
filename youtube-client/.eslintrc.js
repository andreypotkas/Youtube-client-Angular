module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
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
    'import/prefer-default-export': 'off',
    'no-undef': 'off',
    'import/extensions': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    'no-return-assign': 'off',
    'lines-between-class-members': 'off',
  },
};
