import React from "react";
import { IconButton, Theme } from "@mui/material";
import styled from "@emotion/styled";
import { StyledIconButtonProps } from "types/components/StyledIconButtonProps";

type Props = {
  theme: Theme;
  style?: React.CSSProperties;
};

const CustomIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "style",
})(({ theme, style }: Props) => ({
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
