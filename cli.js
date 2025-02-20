#!/usr/bin/env node
import chalk from "chalk";
import { getProjectName, getStackConfig } from "./src/prompts/project.js";
import { getToolsSelection } from "./src/prompts/tools.js";
import { runCommand } from "./src/utils/commands.js";
import { setupArchitecture } from "./src/architecture/setup.js";
import { installFeatures } from "./src/installers/features.js";
import { installTools } from "./src/installers/tools.js";
import { overrideTsConfig } from "./src/installers/tsconfig.js";

(async () => {
  console.log(chalk.green("Welcome to Frontend Stack Setup CLI!"));

  const { projectName } = await getProjectName();
  const { starter, features, architecture } = await getStackConfig();

  if (starter === "react-vite") {
    console.log(chalk.blue("Creating project using Vite..."));
    runCommand(`npm create vite@latest ${projectName} -- --template react-ts`);
    runCommand(`cd ${projectName} && npm install`);
  }

  process.chdir(projectName);

  // Set tsconfig for app and node
  await overrideTsConfig();

  // Setup project structure
  await setupArchitecture(architecture);

  // Install features
  await installFeatures(features, architecture);

  // Get and install tools
  const { tools } = await getToolsSelection();
  await installTools(tools, architecture);

  console.log(
    chalk.green(
      "Your React project has been successfully created and configured!"
    )
  );
})();
