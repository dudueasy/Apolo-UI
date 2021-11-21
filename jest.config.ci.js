const baseConfig = require('./jest.config.js');

module.exports = Object.assign(
  {},
  baseConfig,
  {
    reporters: [['jest-junit', {output: './test-results/jest/results.xml'}]],
    collectCoverage: true,
    coveragePathIgnorePatterns: [
      '<rootDir>/lib/utils/importAllSvg.ts',
      '<rootDir>/lib/index.tsx',
      '/node_modules/',
    ],
    collectCoverageFrom: [
      'lib/**/*.{ts,tsx}',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
  },
);
