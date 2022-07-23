const base = require('./jest.base')

module.exports = {
  ...base,
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/app/testing/storyshots.spec.ts"
  ],
}