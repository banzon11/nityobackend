// backend/jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["<rootDir>/test/setup.ts"],
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["text", "lcov"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
