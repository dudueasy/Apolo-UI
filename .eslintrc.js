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
    'react-hooks/exhaustive-deps': 2,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-interface': 0
  },
  env: {
    "browser": true,
    "amd": true,
    "node": true
  },
};
