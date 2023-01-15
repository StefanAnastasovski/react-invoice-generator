import { CssBaseline } from "@mui/material";
import SideBarMenu from "./components/SideBarMenu";
import { BodyHeader } from "./components/BodyHeader";
import { Body } from "./components/Body";
import { BoxDiv } from "@components/atoms";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { container, bodyContainer } = styles;
  return (
    <BoxDiv {...container}>
      <CssBaseline />
      <SideBarMenu />

      <BoxDiv {...bodyContainer}>
        <BodyHeader />
        <Body>{children}</Body>
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
