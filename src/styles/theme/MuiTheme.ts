import { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { HEADER_MIN_HEIGHT } from "@constants";

const CONTRAST_TEXT = "#FFF";

export const MuiTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#03C2FC",
      light: "#66E2FF",
      dark: "#012E3F",
      contrastText: CONTRAST_TEXT,
    },
    secondary: {
      main: "#00A4E7",
      light: "#45D3FF",
      dark: "#1281AD",
      contrastText: CONTRAST_TEXT,
    },
    text: {
      primary: "#E0F9FF", // #F0FCFF
      secondary: "#2A8EB5", // #59A7C6
      disabled: "rgba(42, 142, 181, 0.2)",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    divider: "#424B5A", // light: "6C737F", dark: "#242C3A",
    success: {
      main: "#2BBFAE",
      light: "#5BCDC0",
      dark: "#109384",
      contrastText: CONTRAST_TEXT,
    },
    error: {
      main: "#D65656",
      light: "#14B8A6",
      dark: "#DF7B7B",
      contrastText: CONTRAST_TEXT,
    },
    warning: {
      main: "#FFB936",
      light: "#FFC14D",
      dark: "#CC8E1A",
      contrastText: CONTRAST_TEXT,
    },
    info: {
      main: "#37A0F4",
      light: "#64B5F7",
      dark: "#1A77C2",
      contrastText: CONTRAST_TEXT,
    },
    background: {
      paper: "#011c26",
      default: "#001219",
    },
    action: {
      // active: "",
      // hover: "",
      // hoverOpacity: 0.04
      // selected: "",
      // selectedOpacity: 0.08,
      // disabled: "",
      // disabledBackground: "",
      // disabledOpacity: 0.38,
      // focus: "",
      // focusOpacity: 0.12,
      // activatedOpacity: 0.12,
      // activeChannel: "0 0 0",
      // selectedChannel: "0 0 0"
    },
    // grey: {50, 100, 200, 3000, 400, 500, 600, 700, 800, 900, A100, A200, A400, A700},
    // contrastThreshold: 3,
    // getContrastText: f z(),
    // augmentColor: f L(),
    // tonalOffset: 0.2,
  },
  mixins: {
    toolbar: {
      minHeight: HEADER_MIN_HEIGHT,
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Noto Sans HK" , "Helevetica" , "Arial" , sans-serif ',
    // h1:{
    //   fontFamily: "",
    //   fontWeight: ",
    //   fontSize: "",
    //   lineHeight: 1,
    //   letterSpacing ""
    // }
    // h2: {}, h3: {}, h4: {}, h5: {}, h6: {},
    // subtitle1: {}, subtitle2: {},
    // body1: {}, body2: {},
    // button: {},
    // caption: {},
    // overline: {},
  },
  // transitions: {},
  // zIndex: {},
  // breakpoints: {},
  // direction: "ltr",
  // components: {},
  // spacing: f a(),
  // shape: {}
  // shadows: {},
});

// "#66E2FF"
// "#45D3FF"
// "#03C2FC"
// "#00A4E7"
// "#1281AD"
// "#023C59"
// "#012E3F"
// "#999999"
