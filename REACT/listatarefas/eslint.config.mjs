import { ESLint } from "eslint";

export default {
  // Definindo o ambiente (navegador, Node.js, etc.)
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  // Estendendo configurações de estilo populares ou recomendadas
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  // Especificando o analisador
  parser: "babel-eslint",
  // Configurando opções do analisador
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  // Definindo plugins adicionais
  plugins: [
    'react',
    "@typescript-eslint"
  ],
  // Regras personalizadas
  rules: {

  },
};