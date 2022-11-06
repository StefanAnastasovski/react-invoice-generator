import React from "react";

import { useSelector } from "react-redux";
import { ChildrenProps } from "types/ChildrenProps";
import { AppBar } from "./AppBar";

export const AppBarWrapper = ({ children }: ChildrenProps) => {
  const open = useSelector((state: any) => state.drawer.isDrawerOpened);

  return (
    <AppBar open={open} position="fixed">
      {children}
    </AppBar>
  );
};
