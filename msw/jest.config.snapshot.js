const base = require('./jest.base')

module.exports = {
  ...base,
  testMatch: ['<rootDir>/src/app/testing/storyshots.spec.ts'],
  transform: {
    '^.+\\.stories\\.tsx$': '@storybook/addon-storyshots/injectFileName'
  }
}