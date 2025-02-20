export const getAntDesignThemeTypes = () => `
import "antd/es/theme/interface";

declare module "antd/es/theme/interface" {
  interface AliasToken {
    "color-neutral10": string;
    "color-neutral9": string;
    "color-neutral8": string;
    "color-neutral7": string;
    "color-neutral6": string;
    "color-neutral5": string;
    "color-neutral4": string;
    "color-neutral3": string;
    "color-neutral2": string;
    "color-neutral1": string;
  }
}`;

export const getAntDesignThemeConfig = () => `{
  return {
    colorPrimary: "#0055cc",
    colorInfo: "#0055cc",
    colorPrimaryHover: "#2377f4",
    colorPrimaryBorderHover: "#72a3f8",
    colorPrimaryBorder: "#b9d3fb",
    colorPrimaryBgHover: "#e0ebfd",
    colorPrimaryBg: "#f5f9ff",
    colorPrimaryActive: "#1e459d",
    colorPrimaryTextHover: "#2377f4",
    colorPrimaryText: "#0055cc",
    colorPrimaryTextActive: "#1e459d",
    colorSuccess: "#1f8361",
    colorSuccessHover: "#5db799",
    colorSuccessBorderHover: "#93d9c2",
    colorSuccessBorder: "#93d9c2",
    colorSuccessBgHover: "#e1f4ee",
    colorSuccessBg: "#edf7f4",
    colorSuccessActive: "#146a4d",
    colorSuccessTextHover: "#5db799",
    colorSuccessText: "#1f8361",
    colorSuccessTextActive: "#146a4d",
    colorError: "#d62525",
    colorErrorHover: "#f15858",
    colorErrorBorderHover: "#ff9c9c",
    colorErrorBorder: "#ffcccc",
    colorErrorBgHover: "#ffeaea",
    colorErrorBg: "#fff5f5",
    colorErrorActive: "#a11b1b",
    colorErrorTextHover: "#f15858",
    colorErrorText: "#d62525",
    colorErrorTextActive: "#a11b1b",
    colorText: "#363b47",
    colorTextSecondary: "#4f535e",
    colorTextTertiary: "#636873",
    colorTextQuaternary: "#7f8594",
    colorTextBase: "#455560",
    colorWarning: "#e58629",
    colorLink: "#0055cc",
    colorWhite: "#fff",
    colorLinkHover: "#72a3f8",
    colorLinkActive: "#0055cc",
    colorWarningHover: "#FAB848",
    colorWarningBorderHover: "#FAE48E",
    colorWarningBorder: "#FCF1BA",
    colorWarningBgHover: "#FEFAE8",
    colorWarningBg: "#FCFAF0",
    colorWarningActive: "#CA6400",
    colorWarningTextHover: "#FAB848",
    colorWarningText: "#E58629",
    colorWarningTextActive: "#CA6400",
    "color-neutral10": "#23262E",
    "color-neutral9": "#363B47",
    "color-neutral8": "#4F535E",
    "color-neutral7": "#636873",
    "color-neutral6": "#7F8594",
    "color-neutral5": "#A4A9B2",
    "color-neutral4": "#C2C5CC",
    "color-neutral3": "#E6EAF0",
    "color-neutral2": "#F5F5F7",
    "color-neutral1": "#F7F9FA",
  };
};`;

// if (architecture === "atomic") {
//   fs.writeFileSync("src/styles/context.d.ts", themeTypesContent);
//   fs.writeFileSync("src/styles/theme.ts", themeConfig);
//   console.log(
//     chalk.green(
//       "Created Ant Design theme types in src/styles/context.d.ts"
//     )
//   );
// } else if (architecture === "feature") {
//   fs.mkdirSync("src/features/theme", { recursive: true });
//   fs.writeFileSync("src/features/theme/index.ts", themeConfig);
//   fs.writeFileSync("src/features/theme/context.d.ts", themeTypesContent);
//   console.log(
//     chalk.green(
//       "Created Ant Design theme types in src/features/theme/context.d.ts"
//     )
//   );
// }
