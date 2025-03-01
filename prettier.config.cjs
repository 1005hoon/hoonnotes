/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  endOfLine: "lf",
  bracketSpacing: true,
  semi: true,
  trailingComma: "all",
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
};
