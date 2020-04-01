const { defaults } = require('jest-config');

module.exports = {
  ...defaults,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  verbose: true,
  setupFilesAfterEnv: ['./setupTests.js'],
  testMatch: ['/__tests__/Error.test.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)'
  ]
};
