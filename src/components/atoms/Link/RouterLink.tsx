import { Link as ReactRouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

type RouterLinkProps = {
  children: React.ReactNode;
  href: string;
  component?: any;
  style?: any;
  onClick?: () => void;
  underline?: "always" | "hover" | "none";
};
// TODO: add ts Props
export const RouterLink = ({
  children,
  href,
  style,
  onClick,
  underline,
}: RouterLinkProps) => {
  return (
    <Link
      component={ReactRouterLink}
      to={href}
      underline={underline}
      sx={style}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
