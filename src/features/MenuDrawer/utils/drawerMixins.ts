import { CSSObject, Theme } from "@mui/material";
import { DRAWER_WIDTH } from "@constants/constants";

export const closedMixin = (theme: Theme): CSSObject => {
  return {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("tablet")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  };
};

export const openedMixin = (theme: Theme): CSSObject => {
  return {
    width: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  };
};
