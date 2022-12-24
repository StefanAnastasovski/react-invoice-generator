import * as React from "react";
import Button from "@mui/material/Button";
import { StyledProfileButtonProps } from "./types/ButtonProps";

export const StyledProfileButton = ({
  children,
  isOpen,
  onClick,
  ariaValues,
}: StyledProfileButtonProps) => {
  return (
    <Button
      id={ariaValues.button}
      aria-controls={isOpen ? ariaValues.menu : undefined}
      aria-haspopup="true"
      aria-expanded={isOpen ? "true" : undefined}
      disableRipple={true}
      onClick={onClick}
      sx={styles.btnProfile}
    >
      {children}
    </Button>
  );
};

const styles = {
  btnProfile: {
    minWidth: "40px",
    borderRadius: "50%",
    padding: 0,
  },
};
