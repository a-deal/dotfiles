module.exports = {
  "roots": [
    "./src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
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
  "transform": {
    "^.+\\.(ts|js|tsx)$": "babel-jest"
  },
  collectCoverage: true,
  "verbose": true
}
