require(`dotenv`).config();

module.exports = {
  collectCoverageFrom: [`src/**/*.js`],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/index.js',
  ],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  testMatch: [`**/src/**/*.test.js`]
};