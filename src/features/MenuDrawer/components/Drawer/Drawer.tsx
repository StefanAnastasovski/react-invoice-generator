import React from "react";
import { PermanentDrawer } from "./PermanentDrawer";
import { ChildrenProps } from "types/ChildrenProps";

export const Drawer = ({ children }: ChildrenProps) => (
  <PermanentDrawer variant="permanent" {...styles.drawerContainer}>
    {children}
  </PermanentDrawer>
);

const styles = {
  drawerContainer: {
    sx: {
      "& .MuiPaper-root::-webkit-scrollbar": { display: "none" },
    },
  },
};
