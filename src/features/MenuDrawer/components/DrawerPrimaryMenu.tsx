import React from "react";

import { List, Typography } from "@mui/material";

// import DrawerItem from "./DrawerItem";
// import { orders } from "../../../data/orders";
import { menuItems } from "@constants";

export const DrawerPrimaryMenu = () => {
  const items = menuItems.map((item) => {
    const { id, title, subtitles } = item;

    return <Typography>{id + title}</Typography>;

    // let hasNews = title === "Orders";

    // if (subtitles.length > 0) {
    //   return <DrawerItem key={id} data={item} />;
    // }
    // return (
    //   <DrawerItem
    //     key={item.id}
    //     data={item}
    //     orders={hasNews && orders}
    //     styleProps={{}}
    //   />
    // );
  });

  return <List>{items}</List>;
};
