module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    settings: {
      react: {
        version: '17.0.1'
      }
    },
    env: {
      es6: true,
      browser: true,
      node: true
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended'
    ],
    rules: {
      // JS/TS RULES
      quotes: ['error', 'single'],
      camelcase: 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/semi': ['error', 'always'],
      '@typescript-eslint/indent': ['error', 2],
      '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
      'no-trailing-spaces': 'error',
      '@typescript-eslint/type-annotation-spacing': ['error'],
      'object-curly-spacing': ['error', 'always'],
      'key-spacing': ['error', { beforeColon: false }],
      'object-shorthand': ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      // JSX RULES
      'jsx-quotes': ['error', 'prefer-single'],
      'react/jsx-boolean-value': 'error',
      'react/jsx-closing-bracket-location': 'error',
      'react/jsx-equals-spacing': 'error',
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-indent': ['error', 2],
      'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
      'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
      'react/jsx-no-literals': 'off',
      'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }]
    }
  };