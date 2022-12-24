import * as React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "./types/ButtonProps";

export const CustomButton = ({
  children,
  onClick,
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
      endIcon={endIcon}
      size={size}
      type={type}
    >
      {children}
    </Button>
  );
};
