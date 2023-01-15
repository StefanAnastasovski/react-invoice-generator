import { Link as ReactRouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export const RouterLink = ({ children, href, style }: any) => {
  return (
    <Link component={ReactRouterLink} to={href} style={style}>
      {children}
    </Link>
  );
};
