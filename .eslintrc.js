module.exports = {
  plugins: ["react", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended"
  ],
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"]
  },
  globals: {
    process: false,
    cy: false,
    module: false
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
