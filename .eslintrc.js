module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react-hooks/recommended"
  ],
  rules: {
    "react-hooks/rules-of-hooks": 2,
    'react-hooks/exhaustive-deps': 2
  }
};