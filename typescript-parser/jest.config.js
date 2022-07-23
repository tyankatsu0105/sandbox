const swc = require('./.jest/swc');

module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', swc],
  },
  testMatch: ['**/*.spec.ts'],
  // testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.ts$",
  // coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
  // moduleFileExtensions: ["ts", "js", "node"],
};
