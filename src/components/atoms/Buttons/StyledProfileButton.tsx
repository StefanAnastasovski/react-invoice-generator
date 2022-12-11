import * as React from "react";
import Button from "@mui/material/Button";
import { ProfileMenuAriaValuesType } from "@features/ProfileMenu/ProfileMenu";

type Props = {
  children: React.ReactNode | JSX.Element;
  isOpen: boolean;
  ariaValues: ProfileMenuAriaValuesType;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export const StyledProfileButton = ({
  children,
  isOpen,
  onClick,
  ariaValues,
}: Props) => {
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
