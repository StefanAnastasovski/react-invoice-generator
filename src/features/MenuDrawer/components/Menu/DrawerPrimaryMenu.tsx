import React from "react";
import { List } from "@mui/material";
import { MenuCategoryWithItems } from "./MenuCategoryWithItems";
import { menuItems } from "@constants/menuItems";
import { OpenProps } from "types/OpenProps";
import { useDrawerMenu } from "@hooks/useDrawerMenu";

export const DrawerPrimaryMenu = () => {
  const { isOpen } = useDrawerMenu();
  const menuCategory = menuItems.map((item) => {
    return <MenuCategoryWithItems key={item.id} data={item} />;
  });
  return <List {...styles(isOpen).list}>{menuCategory}</List>;
};

const styles = (isOpen: OpenProps) => ({
  list: {
    sx: {
      padding: isOpen ? "0 16px" : "0 4px",
      paddingTop: 1,
      marginTop: isOpen ? 0 : "72px",
      marginBottom: isOpen ? 0 : 6,
    },
  },
});
