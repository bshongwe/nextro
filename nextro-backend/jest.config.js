/**
 * JS Testing framework for NeXtro API,
 * Sets testing environment to 'node',
 * File paths array executed in 'node',
 * Verbose test output (pass/ fail status)
 */
module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./tests/setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  verbose: true
};
