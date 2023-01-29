import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Theme, useTheme } from "@mui/material";
import Link from "@mui/material/Link";
import { BoxDiv } from "../Box";
import { LinkButtonProps } from "./types/ButtonProps";

export const LinkButton = ({ children, path, style }: LinkButtonProps) => {
  const theme = useTheme();
  const btnStyle = styles(theme);
  return (
    <Link
      component={ReactRouterLink}
      to={path}
      style={style || btnStyle.defaultStyle}
    >
      <BoxDiv style={style || btnStyle.textContainer}>{children}</BoxDiv>
    </Link>
  );
};

const styles = (theme: Theme) => {
  return {
    defaultStyle: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    textContainer: {
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  };
};
