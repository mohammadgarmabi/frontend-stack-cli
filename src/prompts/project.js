import inquirer from "inquirer";

export const getProjectName = async () => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Please enter your project name:",
      default: "frontend-stack",
    },
  ]);
};

export const getStackConfig = async () => {
  return await inquirer.prompt([
    {
      type: "list",
      name: "starter",
      message: "Please select your stack project starter:",
      choices: [
        { name: "React with Vite", value: "react-vite" },
        // { name: "Remix", value: "remix.run" },
      ],
    },
    {
      type: "checkbox",
      name: "features",
      message: "Select the additional features you want to install:",
      choices: [
        { name: "ESLint", value: "eslint" },
        { name: "Prettier", value: "prettier" },
        { name: "Husky", value: "husky" },
      ],
    },
    {
      type: "list",
      name: "architecture",
      message: "Please select your project architecture:",
      choices: [
        { name: "Feature Folder", value: "feature" },
        { name: "Atomic Design", value: "atomic" },
      ],
    },
    {
      type: "confirm",
      name: "alias",
      message: "Do you want to install alias for imports? (e.g. @/*)",
      default: true,
    },
  ]);
};
