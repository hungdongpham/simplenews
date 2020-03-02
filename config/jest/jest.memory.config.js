// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

console.log('RUNNING UNIT TESTS FOR MEMORY');

module.exports = {
  clearMocks: true,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  "moduleFileExtensions": ["js", "json", "jsx", "ts", "tsx"],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/jest/assetsTransformer.js",
    '^.+\\.(css)$': 'jest-css-modules-transform',
     "^mocks(.*)$": "<rootDir>/config/jest/mocks$1",
  },
  // Reset the module registry before running each individual test
  resetModules: true,
  rootDir: __dirname + "/../../",
  "testEnvironment": "./config/jest/jsdom-environment",
  testMatch: [
    "<rootDir>/src/**/**.spec.js"
  ],
  // timers: "fake",
  // A map from regular expressions to paths to transformers
  "transform": {
    "^.+\\.(js|jsx|mjs|ts|tsx)$": "babel-jest",
    '^.+\\.(css)$': 'jest-css-modules-transform',
  },
  // Indicates whether each individual test should be reported during the run
  "verbose": false
};
