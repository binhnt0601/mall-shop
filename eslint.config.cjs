// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import tailwindcss from 'eslint-plugin-tailwindcss';
import unusedImports from 'eslint-plugin-unused-imports';
import next from 'eslint-config-next';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.recommended,
  next.configs['core-web-vitals'],
  tailwindcss.configs.recommended,
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      '@next/next/no-img-element': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/no-unnecessary-arbitrary-value': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-console': 'warn',
      'react/prop-types': 'off'
    },
    settings: {
      react: { version: 'detect' },
      tailwindcss: {
        callees: ['twMerge', 'createTheme'],
        classRegex: '^(class(Name)?|theme)?$',
      },
    },
  },
];
