import Body from "./components/Body";
import BodyHeader from "./components/BodyHeader";
import SideBarMenu from "./components/SideBarMenu";
import { RowContainer } from "@components/RowContainer";
import { GridItem } from "@components/GridItem";

const MainLayout = () => {
  return (
    <RowContainer>
      <GridItem>
        <SideBarMenu />
      </GridItem>

      <GridItem>
        <BodyHeader />
        <Body />
      </GridItem>
    </RowContainer>
  );
};

export default MainLayout;
