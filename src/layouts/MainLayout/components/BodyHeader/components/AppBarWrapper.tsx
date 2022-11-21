import React from "react";

import { ChildrenProps } from "types/ChildrenProps";
import { useDrawerMenu } from "@hooks/useDrawerMenu";
import { AppBar } from "./AppBar";

export const AppBarWrapper = ({ children }: ChildrenProps) => {
  const { isOpen } = useDrawerMenu();

  return (
    <AppBar isOpen={isOpen} position="fixed">
      {children}
    </AppBar>
  );
};
