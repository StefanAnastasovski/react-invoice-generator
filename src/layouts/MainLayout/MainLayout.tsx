import { CssBaseline } from "@mui/material";
import SideBarMenu from "./components/SideBarMenu";
import { RowContainer } from "@components/RowContainer";
import { GridItem } from "@components/GridItem";
import { BodyHeader } from "./components/BodyHeader";
import { Body } from "./components/Body";

const MainLayout = () => {
  return (
    <RowContainer>
      <CssBaseline />
      <GridItem>
        <SideBarMenu />
      </GridItem>

      <GridItem>
        <BodyHeader />
        <Body>This is Body</Body>
      </GridItem>
    </RowContainer>
  );
};

export default MainLayout;
