import * as React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "./types/ButtonProps";

export const CustomButton = ({
  children,
  onClick,
  startIcon,
  endIcon,
  size,
  type,
  style,
  onHoverStyle,
  isPrimary = true,
}: ButtonProps) => {
  return (
    <Button
      variant={isPrimary ? "contained" : "outlined"}
      onClick={onClick}
      sx={{
        ...style,
        "&:hover": {
          ...onHoverStyle,
        },
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      type={type}
    >
      {children}
    </Button>
  );
};
