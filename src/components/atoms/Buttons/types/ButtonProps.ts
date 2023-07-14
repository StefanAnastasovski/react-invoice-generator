import { Theme } from "@mui/material";
import { StyleDefaultProps, StyleSxCSSPropertiesProps } from "types/StyleProps";
import { StyleCustomProps } from "types/StyleProps";
import { ProfileMenuAriaValuesType } from "@features/ProfileMenu/ProfileMenu";

export type ButtonProps = {
  children: React.ReactNode;
  isPrimary?: boolean;
  onClick?: () => void;
  startIcon?: any;
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

export type LinkButtonProps = {
  children: React.ReactNode;
  path: string;
  style?: StyleDefaultProps | StyleCustomProps | StyleSxCSSPropertiesProps;
};
