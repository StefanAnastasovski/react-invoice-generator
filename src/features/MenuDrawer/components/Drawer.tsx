import React from "react";
import { PermanentDrawer } from "./PermanentDrawer";
import { ChildrenProps } from "types/ChildrenProps";

export const Drawer = ({ children }: ChildrenProps) => (
  <PermanentDrawer variant="permanent">{children}</PermanentDrawer>
);
