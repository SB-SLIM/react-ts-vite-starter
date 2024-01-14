module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: { react: { version: "18.2" } },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "eslint-config-prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_module"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "react-refresh",
    "prefer-arrow-functions",
    "eslint-plugin-tsdoc",
    "jsx-a11y",
    "jsdoc",
    "prefer-arrow-functions",
    "filename-rules",
  ],
  rules: {
    // General JavaScript/TypeScript Rules:
    "react/prefer-stateless-function": "error", // Enforces the use of stateless functional components where possible.
    "react/no-unused-prop-types": "error", // Reports unused PropTypes.
    "react/jsx-pascal-case": "error", // Enforces PascalCase for user-defined JSX components.
    "react/jsx-no-script-url": "error", // Disallows using javascript: URLs in JSX.
    "react/no-children-prop": "error", // Disallows passing children as a prop.
    "react/no-danger": "error", // Disallows using dangerouslySetInnerHTML.
    "react/no-danger-with-children": "error", // Disallows using dangerouslySetInnerHTML when children are present.
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }], // Disallows the use of unstable nested components.
    "react/jsx-fragments": "error", // Enforces the use of fragments (<></>) instead of <React.Fragment>.
    "react/destructuring-assignment": ["error", "always", { destructureInSignature: "always" }], // Enforces destructuring assignment in certain situations.
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }], //  Disallows leaking of rendered values outside of the JSX scope.
    "react/jsx-max-depth": ["error", { max: 5 }], // Enforces a maximum JSX depth.
    "react/function-component-definition": ["warn", { namedComponents: "arrow-function" }], // Warns about using arrow functions for function component definitions.
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ], // Enforces consistent usage of keys in JSX elements.
    "react/jsx-no-useless-fragment": "warn", // Warns about unnecessary usage of fragments.
    "react/jsx-curly-brace-presence": "warn", // Warns about the presence of curly braces in JSX attributes.
    "react/no-typos": "warn", // Warns about common typos in React component names.
    "react/display-name": ["off", { ignoreTranspilerName: false }], //  disallows setting a display name for React components.
    "react/self-closing-comp": "warn", //  Warns about not using self-closing tags for components without children.
    "react/jsx-sort-props": "warn", // Warns about unsorted props in JSX elements.
    "react/react-in-jsx-scope": "off", // Disallows the import of React when using JSX.
    "react/jsx-one-expression-per-line": "off", // Disallows multiple expressions in a single JSX element.
    "react/prop-types": "off", // Disables the requirement for PropTypes.
    "no-duplicate-imports": "error", //  Disallows duplicate import statements.
    "no-var": "error", //  Disallows the use of var for variable declarations.
    "object-shorthand": "off", // Allows or disallows shorthand syntax for object properties.
    "prefer-const": "error", // Enforces the use of const for variables that are never reassigned.
    "prefer-template": "warn", // : Warns about using string concatenation instead of template literals.

    // React Refresh Rules:
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }], // Warns about exporting only React components when using React Refresh.

    // Naming Convention Rules:
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
    ], // Enforces a consistent naming convention for identifiers.
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }], //  Enforces the file extension for JSX files.
    "filename-rules/match": [2, { ".ts": "camelcase", ".tsx": "pascalcase" }], // Enforces naming conventions for different file types (.ts and .tsx).
    "jsx-a11y/no-autofocus": [
      2,
      {
        ignoreNonDOM: true,
      },
    ], // Disallows using autofocus on elements.

    // TSDoc Rules:
    "jsdoc/require-throws": "error", // Requires @throws tags in JSDoc comments for functions that throw errors.
    "jsdoc/check-indentation": "warn", // Warns about incorrect indentation in JSDoc comments.
    "jsdoc/no-blank-blocks": "warn", // Warns about blank lines in JSDoc blocks.
    "jsdoc/require-asterisk-prefix": "warn", // Requires an asterisk at the beginning of every line in a JSDoc comment block.
    "jsdoc/require-description": "warn", // Requires a description in JSDoc comments.
    "jsdoc/sort-tags": "warn", // Warns if JSDoc tags are not sorted in a consistent order.
    "jsdoc/check-syntax": "warn", // Warns about syntax errors in JSDoc comments.
    "jsdoc/tag-lines": ["warn", "never", { startLines: 1 }], // Warns if there are blank lines before or after JSDoc tags.
    "jsdoc/require-param": ["warn", { checkDestructuredRoots: false }], // Requires @param tags in JSDoc comments for function parameters.
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
    ], // Requires JSDoc comments for certain types of code elements.
    "jsdoc/require-hyphen-before-param-description": "off", // Disabled. This rule is related to TSDoc and not applicable here.
    "jsdoc/require-returns": "off", // Disabled. This rule is disabled in favor of the TSDoc @returns tag.
    "tsdoc/syntax": "warn", //Warns about syntax errors in TSDoc comments.

    // Arrow Function Rules:
    "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
      },
    ], // Enforces the use of arrow functions in certain contexts.
    "arrow-body-style": "warn", //Warns about arrow functions that could be simplified.
    "prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: true,
      },
    ], // Warns about using non-arrow functions as callbacks.
    "arrow-spacing": "error", // Enforces consistent spacing around the arrow in arrow functions.
    "no-confusing-arrow": "error", // Disallows confusing arrow functions.
  },
  overrides: [
    {
      files: ["src/**/*.d.ts", "src/**/index.tsx", "src/main.tsx"],
      rules: {
        "filename-rules/match": [2, { ".ts": "kebabcase", ".tsx": "kebabcase" }], // Enforces kebab case for file names in specific file patterns.
      },
    },
  ],
};
