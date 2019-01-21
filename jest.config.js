require(`dotenv`).config();

module.exports = {
  collectCoverageFrom: [`src/**/*.js`],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/index.js',
    '<rootDir>/src/hooks/before/charge',
    '<rootDir>/src/hooks/before/cart',
    '<rootDir>/src/hooks/after/user',
    '<rootDir>/src/hooks/after/charge',
    '<rootDir>/src/hooks/log.js'


  ],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  testMatch: [`**/src/**/*.test.js`]
};