module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: false,
    project: ['./tsconfig.json'],
  },
  plugins: ['react-refresh', 'autofix', 'simple-import-sort', 'unicorn', 'import', 'react'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-use-before-define': 'off',
    'autofix/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': 'warn',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'eol-last': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'import/no-default-export': 'warn',
    'arrow-body-style': ['warn', 'always'],
    'react/jsx-wrap-multilines': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: [
          'is',
          'are',
          'should',
          'has',
          'have',
          'can',
          'did',
          'will',
          'was',
          'were',
          'allow',
          'does',
          'do',
          'enable',
          'disable',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        node: true,
      },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'build/',
    'dist/',
    'mockData/',
    'tests/',
    'test/',
    '*.test.*',
    'scripts/',
    '.eslintrc.cjs',
    'vite.config.ts',
  ],
}
