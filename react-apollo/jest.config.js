module.exports = {
  testRegex: '(/__test__/.*|(\\.|/)spec)\\.tsx?$',
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
    '^.+\\.graphql$': 'jest-transform-graphql',
  },
  testURL: 'http://localhost',
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  passWithNoTests: true,
};
