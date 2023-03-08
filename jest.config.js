module.exports = {
    testMatch: [
      '**/__tests__/**/*.spec.js?(x)',
      '**/?(*.)+(spec|test).js?(x)',
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'json', 'vue'],
    collectCoverage: true,
    coverageReporters: ['html', 'text-summary'],
  };
  