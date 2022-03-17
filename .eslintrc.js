module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    // "jest/globals": true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:cypress/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  plugins: [ "jest"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],

    "no-console": 0,
    "react/prop-types": 0,
  },
}
