/**
 * JS Testing framework for NeXtro API,
 * Sets testing environment to 'node',
 * File paths array executed in 'node',
 * Verbose test output (pass/ fail status)
 */
module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.js', './tests/setup.js'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'controllers/**/*.js',
    'models/**/*.js',
    'routes/**/*.js',
    'middleware/**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
  verbose: true
};
