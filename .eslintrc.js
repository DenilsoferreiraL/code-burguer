module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier/prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./eslintrc.js",
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    camelcase: "off",
    "prettier/prettier": [
      "error",
      { endOfLine: "auto", parser: "flow", "import/named": "off" },
    ],
    "react/react-in-jsx-scope": "off",
    indent: "off",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
