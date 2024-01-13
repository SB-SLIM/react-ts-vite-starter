module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: { react: { version: "18.2" } },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    'plugin:react/recommended',
    'eslint-config-prettier'
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_module"],
  parser: "@typescript-eslint/parser",
  plugins: [
    'react-refresh',
    'prefer-arrow-functions',
    'eslint-plugin-tsdoc',
    'jsx-a11y',
    'jsdoc',
    'prefer-arrow-functions',
    'filename-rules',
  ],
  rules: {
    "react/prefer-stateless-function": "error",
    "react/no-unused-prop-types": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-no-script-url": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react/jsx-fragments": "error",
    "react/destructuring-assignment": ["error", "always", { destructureInSignature: "always" }],
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
    "react/jsx-max-depth": ["error", { max: 5 }],
    "react/function-component-definition": ["warn", { namedComponents: "arrow-function" }],
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/no-typos": "warn",
    "react/display-name": ["off", { ignoreTranspilerName: false }],
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "object-shorthand": "off",
    "prefer-const": "error",
    "prefer-template": "warn",

    // React Refresh
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

    // Naming convention
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["PascalCase", "camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variable",
        // Specify PascalCase for React components
        format: ["PascalCase", "camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: null,
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "filename-rules/match": [2, {   ".ts": "camelcase" , ".tsx": "pascalcase" }],
    'filename-rules/not-match': [0, 'kebabcase'],
    "jsx-a11y/no-autofocus": [
      2,
      {
        ignoreNonDOM: true,
      },
    ],

    // TsDoc
    "jsdoc/require-throws": "error",
    "jsdoc/check-indentation": "warn",
    "jsdoc/no-blank-blocks": "warn",
    "jsdoc/require-asterisk-prefix": "warn",
    "jsdoc/require-description": "warn",
    "jsdoc/sort-tags": "warn",
    "jsdoc/check-syntax": "warn",
    "jsdoc/tag-lines": ["warn", "never", { startLines: 1 }],
    "jsdoc/require-param": ["warn", { checkDestructuredRoots: false }],
    "jsdoc/require-jsdoc": [
      "warn",
      {
        publicOnly: true,
        require: {
          FunctionDeclaration: true,
          FunctionExpression: true,
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          MethodDefinition: true,
        },
        contexts: [
          "VariableDeclaration",
          "TSTypeAliasDeclaration",
          // Encourage documenting React prop types
          "TSPropertySignature",
        ],
        enableFixer: true,
      },
    ],
    // tsdoc checks this syntax instead
    "jsdoc/require-hyphen-before-param-description": "off",
    "jsdoc/require-returns": "off",

    "tsdoc/syntax": "warn",

    // Arrow functions
    "prefer-arrow-functions/prefer-arrow-functions": [
  "warn",
  {
    classPropertiesAllowed: true,
    disallowPrototype: true,
   
  },
    ],
    "arrow-body-style": "warn",
    "prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: true,
      },
    ],
    "arrow-spacing": "error",
    "no-confusing-arrow": "error",
      },
};
