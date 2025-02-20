import inquirer from "inquirer";

export const getToolsSelection = async () => {
  const selections = await inquirer.prompt([
    {
      type: "checkbox",
      name: "testing",
      message: "Select testing tools:",
      choices: [
        { name: "Jest", value: "jest" },
        { name: "Playwright", value: "playwright" },
        { name: "Cypress", value: "cypress" },
        { name: "Mocha", value: "mocha" },
        { name: "Vitest", value: "vitest" },
      ],
    },
    {
      type: "checkbox",
      name: "dataFetching",
      message: "Select data fetching tools:",
      choices: [
        { name: "SWR", value: "swr" },
        { name: "Tanstack Query", value: "tanstack-query" },
        { name: "Axios", value: "axios" },
      ],
    },
    {
      type: "checkbox",
      name: "formManagement",
      message: "Select form management tools:",
      choices: [
        { name: "React Hook Form", value: "react-hook-form" },
        { name: "Formik", value: "formik" },
        // { name: "@tanstack/react-form", value: "@tanstack/react-form" },
        // { name: "Zod", value: "zod" },
        // { name: "Yup", value: "yup" },
      ],
    },
    // {
    //   type: "checkbox",
    //   name: "i18n",
    //   message: "Select i18n tools:",
    //   choices: [
    //     { name: "React i18next", value: "react-i18next" },
    //     { name: "React Intl", value: "react-intl" },
    //   ],
    // },
    {
      type: "checkbox",
      name: "stateManagement",
      message: "Select state management tools:",
      choices: [
        { name: "Zustand", value: "zustand" },
        { name: "Redux Toolkit", value: "redux-toolkit" },
        // { name: "Redux", value: "redux" },
        { name: "Jotai", value: "jotai" },
        // { name: "Valtio", value: "valtio" },
        // { name: "Redux Saga", value: "redux-saga" },
        // { name: "Tanstack Query", value: "tanstack-query" },
        // { name: "MobX", value: "mobx" },
        // { name: "Recoil", value: "recoil" },
      ],
    },
    {
      type: "checkbox",
      name: "uiFrameworks",
      message: "Select UI framework:",
      choices: [
        { name: "Tailwind CSS", value: "tailwind-css" },
        { name: "MUI", value: "mui" },
        { name: "Ant Design", value: "ant-design" },
        // { name: "React Bootstrap", value: "react-bootstrap" },
        // { name: "Chakra UI", value: "chakra-ui" },
        // { name: "Mantine", value: "mantine" },
      ],
    },
    {
      type: "checkbox",
      name: "routing",
      message: "Select routing tools:",
      choices: [
        { name: "React Router", value: "react-router" },
        { name: "React Router Dom", value: "react-router-dom" },
        // { name: "@tanstack/react-router", value: "@tanstack/react-router" },
      ],
    },
    // {
    //   type: "checkbox",
    //   name: "animation",
    //   message: "Select animation tools:",
    //   choices: [
    //     { name: "React Spring", value: "react-spring" },
    //     { name: "React Motion", value: "react-motion" },
    //     { name: "React Transition Group", value: "react-transition-group" },
    //     { name: "React Flip Move", value: "react-flip-move" },
    //     { name: "React Reveal", value: "react-reveal" },
    //   ],
    // },
  ]);

  return {
    tools: [
      ...selections.testing,
      ...selections.dataFetching,
      ...selections.formManagement,
      // ...selections.i18n,
      ...selections.stateManagement,
      ...selections.uiFrameworks,
      ...selections.routing,
      // ...selections.animation,
    ],
  };
};
