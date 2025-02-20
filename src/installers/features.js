import fs from "fs";
import chalk from "chalk";
import { runCommand } from "../utils/commands.js";
import { getPrettierConfig } from "../config/prettier.js";
import { getEslintConfig } from "../config/eslint.js";
import { getHuskyConfig } from "../config/husky.js";

export const installFeatures = async (features, architecture) => {
  await installSelectedFeatures(features, architecture);
};

const installSelectedFeatures = async (features, architecture) => {
  if (features.includes("eslint")) {
    console.log(chalk.blue("Installing ESLint..."));
    runCommand(`npm install eslint --save-dev`);
    fs.writeFileSync("eslint.config.js", getEslintConfig());
  }

  if (features.includes("prettier")) {
    console.log(chalk.blue("Installing Prettier..."));
    runCommand(`npm install prettier --save-dev`);
    runCommand(`npm install --save-dev @trivago/prettier-plugin-sort-imports`);
    fs.writeFileSync(
      ".prettierrc",
      JSON.stringify(getPrettierConfig(), null, 2)
    );
  }

  if (features.includes("husky")) {
    console.log(chalk.blue("Installing Husky..."));
    runCommand(`npm install --save-dev husky`);
    runCommand(`npx husky init`);
    runCommand(`npm install --save-dev @commitlint/cli`);
    runCommand(`npm install --save-dev @commitlint/config-conventional`);

    fs.writeFileSync("commitlint.config.cjs", getHuskyConfig());
  }
};
