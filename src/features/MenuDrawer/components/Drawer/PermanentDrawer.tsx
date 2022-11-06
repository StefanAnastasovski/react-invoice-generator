import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { useSelector } from "react-redux";
import { closedMixin, openedMixin } from "@features/MenuDrawer/utils/drawerMixins";
import { DRAWER_WIDTH } from "@constants/constants";

export const PermanentDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  // TODO: try to fix it in another way
  if (!open) open = useSelector((state: any) => state.drawer.isDrawerOpened);
  return {
    width: `${DRAWER_WIDTH}px`,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  };
});
