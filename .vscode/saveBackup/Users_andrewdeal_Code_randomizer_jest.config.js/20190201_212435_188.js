module.exports = {
  "roots": [
    "./src"
  ],
  "transform": {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.js$": "babel-jest"
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
  "moduleDirectories": ["node_modules", "src"],
  "setupFiles": [
    "./src/setupTests.js"
  ],
  "unmockedModulePathPatterns": [
    "<rootDir>/node_modules/react"
  ],
  collectCoverage: true,
  "verbose": true
}
