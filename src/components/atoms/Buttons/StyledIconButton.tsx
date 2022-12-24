import React from "react";
import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
import { StyledIconButtonProps } from "types/components/StyledIconButtonProps";
import { StyledButtonProps } from "./types/ButtonProps";

const CustomIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "style",
})(({ theme, style }: StyledButtonProps) => ({
  ...style,
  "&:hover svg": {
    fill: theme.palette.primary.main,
  },
}));

export const StyledIconButton = ({
  children,
  style,
  restProps,
  onClick,
}: StyledIconButtonProps) => {
  return (
    <CustomIconButton onClick={onClick} style={style} {...restProps}>
      {children}
    </CustomIconButton>
  );
};
