module.exports = {
  "modulePaths": [
    '<rootDir>/src/',
    '<rootDir>/node_modules/'
  ],
  "roots": [
    "./src"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  setupTestFrameworkScriptFile: "./jest.setup.js",
  collectCoverage: true,
  "verbose": true
}
