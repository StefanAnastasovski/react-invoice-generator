import { Link, Typography } from "@mui/material";
import { BoxDiv } from "@components/atoms";

export const NotFound = () => {
  return (
    <BoxDiv style={{ textAlign: "center" }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Ooops, Page Not Found</Typography>
      <Typography>
        We're sorry, the page you requested could not be found.
      </Typography>
      <Typography>Please go back to the homepage.</Typography>
      <Link href="/">Go Home</Link>
    </BoxDiv>
  );
};
