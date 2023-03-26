import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Theme, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { RowContainer } from "@components/RowContainer";
import { GridItem } from "@components/GridItem";
import { AppBarWrapper } from "./components";
import { StyledIconButton } from "@components/atoms";
import { useDispatch } from "react-redux";
import { menuDrawerActions } from "@stores/slices/menuDrawerSlice";
import { useDrawerMenu } from "@hooks/index";
import { ProfileMenu } from "@features/ProfileMenu/ProfileMenu";

export const BodyHeader = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isOpen } = useDrawerMenu();
  const handleDrawerOpen = () => {
    dispatch(menuDrawerActions.setMenuDrawerOpen());
  };

  const showMenuIcon = !isOpen ? (
    <StyledIconButton
      onClick={handleDrawerOpen}
      restProps={{
        "aria-label": "open drawer",
        edge: "start",
      }}
    >
      <MenuIcon />
    </StyledIconButton>
  ) : null;

  const { toolbar, rowContainer } = styles(theme);

  return (
    <AppBarWrapper>
      <Toolbar {...toolbar}>
        {showMenuIcon}
        <RowContainer {...rowContainer}>
          <GridItem>
            {/* Left Header */}
            <Typography></Typography>
          </GridItem>
          <GridItem>
            <ProfileMenu />
          </GridItem>
        </RowContainer>
      </Toolbar>
    </AppBarWrapper>
  );
};

const styles = (theme: Theme) => {
  return {
    toolbar: {
      sx: {
        borderBottom: 1,
        borderColor: theme.palette.divider,
      },
    },
    rowContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      containerStyle: { margin: 2 },
    },
  };
};
