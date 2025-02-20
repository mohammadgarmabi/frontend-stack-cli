export const getMuiThemeTypes = () => `
import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material" {
  interface PaletteOptions {
    neutral_dark?: PaletteColorOptions;
    neutral_light?: PaletteColorOptions;
  }
}
`;

export const getMuiThemeConfig = () => `
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0",
    },
    secondary: {
      main: "#f50057",
    },
    neutral_dark: {
      main: "#121212",
    },
    neutral_light: {
      main: "#f9f9f9",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
`;
