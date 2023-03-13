module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'prettier'],
  parser: '@typescript-eslint/parser',
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        "@typescript-eslint/no-misused-promises": [
          "error",
          {"checksVoidReturn": {"attributes": false}}
        ],
      },

      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
    },
  ],
}
