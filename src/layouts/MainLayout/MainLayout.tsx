import { CssBaseline, Typography } from "@mui/material";
import SideBarMenu from "./components/SideBarMenu";
import { BodyHeader } from "./components/BodyHeader";
import { Body } from "./components/Body";
import { BoxDiv } from "@components/atoms";

const MainLayout = () => {
  const { container, bodyContainer } = styles;
  return (
    <BoxDiv {...container}>
      <CssBaseline />
      <SideBarMenu />

      <BoxDiv {...bodyContainer}>
        <BodyHeader />
        <Body>
          <Typography>This Is Body</Typography>
          <Typography>This Is Body</Typography>
        </Body>
      </BoxDiv>
    </BoxDiv>
  );
};

export default MainLayout;

const styles = {
  container: {
    sx: {
      display: "flex",
    },
  },
  bodyContainer: {
    sx: {
      flexGrow: 1,
    },
  },
};
