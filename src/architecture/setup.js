import fs from "fs";
import chalk from "chalk";

export const setupArchitecture = (architecture) => {
  if (architecture === "feature") {
    setupFeatureArchitecture();
  } else if (architecture === "atomic") {
    setupAtomicArchitecture();
  }
};

const setupFeatureArchitecture = () => {
  console.log(chalk.blue("Setting up Feature Folder architecture..."));
  const features = [
    "auth",
    "dashboard",
    "settings",
    "profile",
    "users",
    "theme",
    "providers",
    "apis",
  ];

  // Utils
  fs.mkdirSync("src/utils/constants", { recursive: true });
  fs.mkdirSync("src/utils/hooks", { recursive: true });
  fs.mkdirSync("src/utils/functions", { recursive: true });
  fs.mkdirSync("src/utils/dates", { recursive: true });
  fs.mkdirSync("src/utils/ui", { recursive: true });
  // Types
  fs.mkdirSync("src/types", { recursive: true });
  // Features
  features.forEach((feature) => {
    fs.mkdirSync(`src/features/${feature}`, { recursive: true });
  });
  // Routers
  fs.mkdirSync("src/routers", { recursive: true });
};

const setupAtomicArchitecture = () => {
  console.log(chalk.blue("Setting up Atomic Folder architecture..."));

  // APIs
  fs.mkdirSync(`src/apis`, { recursive: true });
  fs.mkdirSync(`src/apis/dto`, { recursive: true });
  fs.mkdirSync(`src/apis/config`, { recursive: true });
  // Components
  fs.mkdirSync(`src/components/atoms`, { recursive: true });
  fs.mkdirSync(`src/components/molecules`, { recursive: true });
  fs.mkdirSync(`src/components/organisms`, { recursive: true });
  fs.mkdirSync(`src/components/templates`, { recursive: true });
  // Hooks
  fs.mkdirSync(`src/hooks`, { recursive: true });
  // Pages
  fs.mkdirSync(`src/pages`, { recursive: true });
  // Types
  fs.mkdirSync(`src/types`, { recursive: true });
  // Utils
  fs.mkdirSync("src/utils/constants", { recursive: true });
  fs.mkdirSync("src/utils/hooks", { recursive: true });
  fs.mkdirSync("src/utils/functions", { recursive: true });
  fs.mkdirSync("src/utils/dates", { recursive: true });
  fs.mkdirSync("src/utils/ui", { recursive: true });
  // Providers
  fs.mkdirSync("src/providers", { recursive: true });
  // Styles
  fs.mkdirSync("src/styles", { recursive: true });
  // Routers
  fs.mkdirSync("src/routers", { recursive: true });
};
