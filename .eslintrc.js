module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/eslint-recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-restricted-imports': ["error", {
      patterns: [
        {group: ["src/*"], message: "Please use relative path only."},
        {group: ["dist/*", "*/dist/*", "*/dist"], message: "Please do not use 'dist' location."},
      ]
    }],
    'eol-last': 2,
    'spaced-comment': ['error', 'always'],
    indent: ['error', 2, { FunctionDeclaration: { parameters: 'first' } }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'max-len': ['error', 180],
    'nestjs/use-validation-pipe': 'off'
  },
};
