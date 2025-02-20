export const getPrettierConfig = () => ({
  tabWidth: 2,
  useTabs: false,
  semi: true,
  printWidth: 100,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  importOrder: [
    "^(.*).css$",
    "^react$",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
});
