import React from "react";

import { useSelector } from "react-redux";

export const useDrawerMenu = () => {
  const isOpen = useSelector((state: any) => state.drawer.isDrawerOpened);

  const isExpanded = useSelector((state: any) => state.drawer.isExpanded);

  const selectedItem = useSelector(
    (state: any) => state.drawer.selectedMenuItemId
  );

  return { isOpen, isExpanded, selectedItem };
};
