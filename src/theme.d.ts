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
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
