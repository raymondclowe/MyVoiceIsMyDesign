module.exports = {
  preset: 'jest-puppeteer',
  testMatch: [
    '<rootDir>/tests/e2e/**/*.e2e.test.js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/e2e/setupE2E.js'],
  testEnvironment: 'jest-environment-puppeteer',
};
