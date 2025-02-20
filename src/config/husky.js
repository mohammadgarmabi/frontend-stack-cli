export const getHuskyConfig = () => `module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "test",
        "chore",
        "perf",
        "ci",
        "build",
        "revert",
      ],
    ],
    "subject-case": [2, "always", ["sentence-case", "start-case", "lower-case"]],
    "header-max-length": [2, "always", 150],
  },
};
`;
