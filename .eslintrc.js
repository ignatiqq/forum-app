module.exports = {
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "requireConfigFile": false,
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "jest": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"]
}