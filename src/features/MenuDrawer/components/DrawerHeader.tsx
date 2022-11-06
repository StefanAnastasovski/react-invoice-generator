import React from "react";
import { Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { RowContainer } from "@components/RowContainer";
import { GridItem } from "@components/GridItem";
import { useDispatch, useSelector } from "react-redux";
import { menuDrawerActions } from "@stores/slices/menuDrawerSlice";
import { DrawerHeaderWrapper } from "./DrawerHeaderWrapper";
import { StyledIconButton } from "@components/atoms";

export const DrawerHeader = () => {
  const open = useSelector((state: any) => state.drawer.isDrawerOpened);
  const dispatch = useDispatch();
  const handleDrawerClose = () => {
    dispatch(menuDrawerActions.setMenuDrawerClose());
  };

  return (
    <DrawerHeaderWrapper>
      {open ? (
        <RowContainer {...styles.rowContainer}>
          <GridItem>
            <Typography>left</Typography>
          </GridItem>
          <GridItem>
            <StyledIconButton onClick={handleDrawerClose}>
              <MenuIcon />
            </StyledIconButton>
          </GridItem>
        </RowContainer>
      ) : null}
    </DrawerHeaderWrapper>
  );
};

const styles = {
  rowContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    containerStyle: { margin: 2 },
  },
};
