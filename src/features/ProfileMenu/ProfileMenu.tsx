import * as React from "react";
import { StyledProfileButton } from "@components/atoms/Buttons";
import { ProfileMenuBody } from "./components/ProfileMenuBody";
import { ProfileMenuImage } from "./components/ProfileMenuImage";

const ARIA_VALUES = {
  button: "profile-button",
  menu: "profile-menu",
};

export type ProfileMenuAriaValuesType = {
  [x: string]: string;
};

export const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  // TODO: add onClick and onClose logic
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledProfileButton
        isOpen={isOpen}
        onClick={handleClick}
        ariaValues={ARIA_VALUES}
      >
        <ProfileMenuImage />
      </StyledProfileButton>

      <ProfileMenuBody
        onClose={handleClose}
        isOpen={isOpen}
        anchorEl={anchorEl}
        ariaValues={ARIA_VALUES}
      />
    </>
  );
};
