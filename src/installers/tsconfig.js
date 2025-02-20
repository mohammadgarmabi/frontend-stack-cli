import fs from "fs";
import chalk from "chalk";
import { setTsConfigApp } from "../config/tsconfig.app.js";
import { setTsConfigNode } from "../config/tsconfig.node.js";

export const overrideTsConfig = () => {
  fs.writeFileSync("tsconfig.app.json", setTsConfigApp());
  fs.writeFileSync("tsconfig.node.json", setTsConfigNode());
  console.log(chalk.blue("Tsconfig files created successfully!"));
};
