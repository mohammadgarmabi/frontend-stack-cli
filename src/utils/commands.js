import { execSync } from "child_process";
import chalk from "chalk";

export const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(chalk.red(`Error executing command: ${command}`));
    process.exit(1);
  }
};
