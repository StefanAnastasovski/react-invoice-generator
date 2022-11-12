import React from "react";
import { List } from "@mui/material";
import { MenuCategoryWithItems } from "./MenuCategoryWithItems";
import { menuItems } from "@constants/menuItems";

export const DrawerPrimaryMenu = () => {
  const menuCategory = menuItems.map((item) => {
    return <MenuCategoryWithItems key={item.id} data={item} />;
  });

  return <List {...styles.list}>{menuCategory}</List>;
};

const styles = {
  list: {
    sx: {
      padding: "0 16px",
    },
  },
};
