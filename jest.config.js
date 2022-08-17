module.exports = {
  preset: 'ts-jest',
  transform: {
    '\.(ts|js)$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@constants(.*)$": "<rootDir>/src/constants$1",
  }
};