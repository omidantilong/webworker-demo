module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:prettier/recommended", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 11,
    sourceType: module,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
}
