module.exports = {
  plugins: ["react", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended"
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ["@babel/preset-react"],
    },
  },
  env: {
    browser: true,
    es6: true
  },
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-vars": "off"
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
