import React from "react";
import { styled } from "@mui/material";
import { AppBarProps } from "@layouts/MainLayout/components/BodyHeader/components/AppBar";

export const DrawerHeaderWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<AppBarProps>(({ theme, isOpen }) => ({
  display: isOpen ? "flex" : "none",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
