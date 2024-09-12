const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const prettierPlugin = require("eslint-plugin-prettier");
const standardConfig = require("eslint-config-standard");
const importPlugin = require('eslint-plugin-import');
const nPlugin = require('eslint-plugin-n');
const promisePlugin = require('eslint-plugin-promise');;

module.exports = [
  {
    ignores: ["node_modules"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        window: "readonly",
        document: "readonly",
        jest: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "@typescript-eslint": typescriptPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin,
    },
    rules: {
      // ...standardConfig.rules,
      "n/handle-callback-err": "error",
      "react/self-closing-comp": "error",
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: "all",
          arrowParens: "always",
          semi: false,
          endOfLine: "auto",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "react/no-unknown-property": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/parsers": {
        [typescriptParser]: [".ts", ".tsx", ".d.ts"],
      },
    },
    // env: {
    //   browser: true,
    //   es2021: true,
    //   jest: true,
    // },
  },
];