import React from "react";

import { List, Typography } from "@mui/material";

// import DrawerItem from "./DrawerItem";
// import { orders } from "../../../data/orders";
import { MenuItem } from "../MenuItem";
import { menuItems } from "@constants/menuItems";

const items = menuItems.map((item) => {
  return <MenuItem key={item.id} data={item} style={{}} />;
});

export const DrawerPrimaryMenu = () => {
  return <List {...styles.list}>{items}</List>;
};

const styles = {
  list: {
    sx: {
      padding: "0 16px",
    },
  },
};
