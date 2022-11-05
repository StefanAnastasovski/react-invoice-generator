import { ThemeOptions, Theme } from "@mui/material/styles";

// use it if you need to customize the theme
declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      customprop: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      customprop?: string;
    };
  }
}
