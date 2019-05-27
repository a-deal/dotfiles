module.exports = {
  "roots": [
    "./src"
  ],
  "transform": {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
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
