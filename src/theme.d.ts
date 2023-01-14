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
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
