import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'

const compat = new FlatCompat()

export default defineConfig([
  globalIgnores(['dist']),

  // Use compat to support plugins like eslint-plugin-import
  ...compat.config({
    plugins: ['import'],
    settings: {
      'import/resolver': {
        alias: {
          map: [[
            '@Utils', path.resolve(__dirname, 'src/utils'),
            '@Components', path.resolve(__dirname, 'src/components'),
        ]],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  }),

  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])