module.exports = {
  // Outras configurações do ESLint

  // Ignorar arquivos formatados pelo Prettier
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      options: {
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaVersion: 2021,
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
        },
        extends: [
          'plugin:@typescript-eslint/recommended',
          'plugin:prettier/recommended', // Adiciona a configuração do Prettier como "error" ao ESLint
        ],
        rules: {
          // Outras regras específicas do seu projeto
        },
      },
    },
  ],
};
