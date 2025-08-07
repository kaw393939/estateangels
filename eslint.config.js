import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended, // Directly include the recommended config
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
];
