import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin-js';

export default [
  js.configs.recommended,

  {
    files: ['**/*.ts'],
    ignores: [
      'node_modules/**', // ignore node_modules
      'output/**',       // ignore build/output folder
      '**/*.d.ts',       // ignore TypeScript declaration files
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
      },
      globals: {
        Feature: 'readonly',
        Scenario: 'readonly',
        inject: 'readonly',
        I: 'readonly',
        within: 'readonly',
        pause: 'readonly',
        locate: 'readonly',
        CodeceptJS: 'readonly',
        process: 'readonly',
        BeforeSuite: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@stylistic/js': stylistic,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/quotes': ['warn', 'double'],
    },
  },
];
