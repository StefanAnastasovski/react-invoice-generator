import { ProfileMenuAriaValuesType } from "@features/ProfileMenu/ProfileMenu";
import { Theme } from "@mui/material";

export type ButtonProps = {
  children: React.ReactNode;
  isPrimary?: boolean;
  onClick?: () => void;
  endIcon?: any;
  size?: "small" | "medium" | "large";
  type?: "button" | "reset" | "submit";
  style?: React.CSSProperties;
  onHoverStyle?: React.CSSProperties;
};

export type StyledButtonProps = {
  theme: Theme;
  style?: React.CSSProperties;
};

export type StyledProfileButtonProps = {
  children: React.ReactNode | JSX.Element;
  isOpen: boolean;
  ariaValues: ProfileMenuAriaValuesType;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
