import chalk from "chalk";
import { runCommand } from "../utils/commands.js";
import fs from "fs";
import { getMuiThemeConfig, getMuiThemeTypes } from "../config/mui.js";
import {
  getAntDesignThemeConfig,
  getAntDesignThemeTypes,
} from "../config/antd.js";
import { getTailwindConfig, getTailwindGlobals } from "../config/tailwind.js";
import { getTanstackQueryConfig } from "../config/tanstackQuery.js";
import { getAxiosConfig, getAxiosInterceptors } from "../config/axios.js";

export const installTools = async (tools, architecture) => {
  for (const tool of tools) {
    switch (tool) {
      case "jest":
        await installJest();
        break;
      case "playwright":
        await installPlaywright();
        break;
      case "cypress":
        await installCypress();
        break;
      case "mocha":
        await installMocha();
        break;
      case "vitest":
        await installVitest();
        break;
      case "swr":
        await installSwr();
        break;
      case "tanstack-query":
        await installTanstackQuery();
        break;
      case "axios":
        await installAxios(architecture);
        break;
      case "react-hook-form":
        await installReactHookForm();
        break;
      case "formik":
        await installFormik();
        break;
      case "@tanstack/react-form":
        await installTanstackReactForm();
        break;
      case "zod":
        await installZod();
        break;
      case "yup":
        await installYup();
        break;
      case "react-i18next":
        await installReactI18next();
        break;
      case "react-intl":
        await installReactIntl();
        break;
      case "zustand":
        await installZustand();
        break;
      case "redux-toolkit":
        await installReduxToolkit();
        break;
      case "redux":
        await installRedux();
        break;
      case "jotai":
        await installJotai();
        break;
      case "valtio":
        await installValtio();
        break;
      case "redux-saga":
        await installReduxSaga();
        break;
      case "tanstack-query":
        await installTanstackQuery(architecture);
        break;
      case "mobx":
        await installMobx();
        break;
      case "recoil":
        await installRecoil();
        break;
      case "tailwind-css":
        await installTailwindCss(architecture);
        break;
      case "mui":
        await installMui(architecture);
        break;
      case "ant-design":
        await installAntDesign(architecture);
        break;
      case "chakra-ui":
        await installChakraUi();
        break;
      case "mantine":
        await installMantine();
        break;
      case "react-bootstrap":
        await installReactBootstrap();
        break;
      case "react-router":
        await installReactRouter();
        break;
      case "react-router-dom":
        await installReactRouterDom();
        break;
      case "@tanstack/react-router":
        await installTanstackReactRouter();
        break;
      case "react-spring":
        await installReactSpring();
        break;
      case "react-motion":
        await installReactMotion();
        break;
      case "react-transition-group":
        await installReactTransitionGroup();
        break;
      case "react-flip-move":
        await installReactFlipMove();
        break;
      case "react-reveal":
        await installReactReveal();
        break;
    }
  }
};

// Testing
const installJest = async () => {
  console.log(chalk.blue("Installing Jest..."));
  runCommand(`npm install jest`);
};

const installPlaywright = async () => {
  console.log(chalk.blue("Installing Playwright..."));
  runCommand(`npm install playwright`);
};

const installCypress = async () => {
  console.log(chalk.blue("Installing Cypress..."));
  runCommand(`npm install cypress`);
};

const installMocha = async () => {
  console.log(chalk.blue("Installing Mocha..."));
  runCommand(`npm install mocha`);
};

const installVitest = async () => {
  console.log(chalk.blue("Installing Vitest..."));
  runCommand(`npm install vitest`);
};

// Data Fetching
const installSwr = async () => {
  console.log(chalk.blue("Installing SWR..."));
  runCommand(`npm install swr`);
};

const installTanstackQuery = async (architecture) => {
  console.log(chalk.blue("Installing Tanstack Query..."));
  runCommand(`npm install @tanstack/react-query`);
  runCommand(`npm install @tanstack/react-query-devtools`);

  if (architecture === "atomic") {
    fs.writeFileSync(
      "src/providers/TanstackQueryProvider.ts",
      getTanstackQueryConfig()
    );
  } else if (architecture === "feature") {
    fs.writeFileSync(
      "src/features/providers/TanstackQueryProvider.ts",
      getTanstackQueryConfig()
    );
  }
};

const installAxios = async (architecture) => {
  console.log(chalk.blue("Installing Axios..."));
  runCommand(`npm install axios`);

  if (architecture === "atomic") {
    fs.writeFileSync("src/apis/index.ts", getAxiosConfig());
    fs.writeFileSync("src/apis/config/interceptors.ts", getAxiosInterceptors());
  } else if (architecture === "feature") {
    fs.writeFileSync("src/features/apis/index.ts", getAxiosConfig());
    fs.writeFileSync(
      "src/features/apis/interceptors.ts",
      getAxiosInterceptors()
    );
  }
};

// Form Management
const installReactHookForm = async () => {
  console.log(chalk.blue("Installing React Hook Form..."));
  runCommand(`npm install react-hook-form`);
};

const installFormik = async () => {
  console.log(chalk.blue("Installing Formik..."));
  runCommand(`npm install formik`);
};

const installTanstackReactForm = async () => {
  console.log(chalk.blue("Installing Tanstack React Form..."));
  runCommand(`npm install @tanstack/react-form`);
};

const installZod = async () => {
  console.log(chalk.blue("Installing Zod..."));
  runCommand(`npm install zod`);
};

const installYup = async () => {
  console.log(chalk.blue("Installing Yup..."));
  runCommand(`npm install yup`);
};

// i18n
const installReactI18next = async () => {
  console.log(chalk.blue("Installing React I18next..."));
  runCommand(`npm install react-i18next`);
};

const installReactIntl = async () => {
  console.log(chalk.blue("Installing React Intl..."));
  runCommand(`npm install react-intl`);
};

// State Management
const installZustand = async () => {
  console.log(chalk.blue("Installing Zustand..."));
  runCommand(`npm install zustand`);
};

const installReduxToolkit = async () => {
  console.log(chalk.blue("Installing Redux Toolkit..."));
  runCommand(`npm install @reduxjs/toolkit`);
};

const installRedux = async () => {
  console.log(chalk.blue("Installing Redux..."));
  runCommand(`npm install redux`);
};

const installJotai = async () => {
  console.log(chalk.blue("Installing Jotai..."));
  runCommand(`npm install jotai`);
};

const installValtio = async () => {
  console.log(chalk.blue("Installing Valtio..."));
  runCommand(`npm install valtio`);
};

const installReduxSaga = async () => {
  console.log(chalk.blue("Installing Redux Saga..."));
  runCommand(`npm install redux-saga`);
};

const installMobx = async () => {
  console.log(chalk.blue("Installing MobX..."));
  runCommand(`npm install mobx`);
};

const installRecoil = async () => {
  console.log(chalk.blue("Installing Recoil..."));
  runCommand(`npm install recoil`);
};

// UI Frameworks
const installMui = async (architecture) => {
  console.log(chalk.blue("Installing MUI..."));
  runCommand(`npm install @mui/material @emotion/react @emotion/styled`);

  if (architecture === "atomic") {
    fs.writeFileSync("src/styles/theme.ts", getMuiThemeConfig());
    fs.writeFileSync("src/styles/context.d.ts", getMuiThemeTypes());
  } else if (architecture === "feature") {
    fs.writeFileSync("src/features/theme/index.ts", getMuiThemeConfig());
    fs.writeFileSync("src/features/theme/context.d.ts", getMuiThemeTypes());
  }
};

const installAntDesign = async (architecture) => {
  console.log(chalk.blue("Installing Ant Design..."));
  runCommand(`npm install antd`);

  if (architecture === "atomic") {
    fs.writeFileSync("src/styles/theme.ts", getAntDesignThemeConfig());
    fs.writeFileSync("src/styles/context.d.ts", getAntDesignThemeTypes());
  } else if (architecture === "feature") {
    fs.writeFileSync("src/features/theme/index.ts", getAntDesignThemeConfig());
    fs.writeFileSync(
      "src/features/theme/context.d.ts",
      getAntDesignThemeTypes()
    );
  }
};

const installChakraUi = async () => {
  console.log(chalk.blue("Installing Chakra UI..."));
  runCommand(`npm install @chakra-ui/react @emotion/react`);
  runCommand(`npm i -D vite-tsconfig-paths`);
};

const installMantine = async () => {
  console.log(chalk.blue("Installing Mantine..."));
  runCommand(
    `npm install npm install @mantine/core @mantine/hooks @mantine/form @mantine/dates dayjs @mantine/notifications @mantine/code-highlight @mantine/tiptap @tiptap/pm @tiptap/react @tiptap/extension-link @tiptap/starter-kit @mantine/dropzone @mantine/carousel embla-carousel-react@^7.1.0 @mantine/spotlight @mantine/modals @mantine/nprogress @mantine/charts recharts@2`
  );
};

const installReactBootstrap = async () => {
  console.log(chalk.blue("Installing React Bootstrap..."));
  runCommand(`npm install react-bootstrap bootstrap`);
};

const installTailwindCss = async (architecture) => {
  console.log(chalk.blue("Installing Tailwind CSS..."));
  runCommand(`npm install tailwindcss`);

  fs.writeFileSync("tailwind.config.ts", getTailwindConfig());

  if (architecture === "atomic") {
    fs.writeFileSync("src/styles/globals.css", getTailwindGlobals());
  } else if (architecture === "feature") {
    fs.writeFileSync("src/features/theme/globals.css", getTailwindGlobals());
  }
};

// React Router
const installReactRouter = async () => {
  console.log(chalk.blue("Installing React Router..."));
  runCommand(`npm install react-router`);
};

const installReactRouterDom = async () => {
  console.log(chalk.blue("Installing React Router DOM..."));
  runCommand(`npm install react-router-dom`);
};

const installTanstackReactRouter = async () => {
  console.log(chalk.blue("Installing Tanstack React Router..."));
  runCommand(`npm install @tanstack/react-router`);
};

// Animation
const installReactSpring = async () => {
  console.log(chalk.blue("Installing React Spring..."));
  runCommand(`npm install react-spring`);
};

const installReactMotion = async () => {
  console.log(chalk.blue("Installing React Motion..."));
  runCommand(`npm install react-motion`);
};

const installReactTransitionGroup = async () => {
  console.log(chalk.blue("Installing React Transition Group..."));
  runCommand(`npm install react-transition-group`);
};

const installReactFlipMove = async () => {
  console.log(chalk.blue("Installing React Flip Move..."));
  runCommand(`npm install react-flip-move`);
};

const installReactReveal = async () => {
  console.log(chalk.blue("Installing React Reveal..."));
  runCommand(`npm install react-reveal`);
};
