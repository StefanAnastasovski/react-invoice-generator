import React from "react";
import { Typography, Theme, useTheme } from "@mui/material";
import { MenuItem } from "../MenuItem";
import { BoxDiv } from "@components/atoms";
import { useDrawerMenu } from "@hooks/useDrawerMenu";

const renderItems = (items: any) =>
  items.map((item: ItemProps) => {
    return <MenuItem key={item.id} data={item} style={{}} />;
  });

export const MenuCategoryWithItems = ({ data }: CategoryItemProps) => {
  const theme = useTheme();
  const { isOpen } = useDrawerMenu();
  const { id, title, items } = data;
  const categoryItems = renderItems(items);
  const { categoryContainer, menuSubtitle } = styles(theme);
  return (
    <BoxDiv key={id} {...categoryContainer}>
      {isOpen && <Typography {...menuSubtitle}>{title}</Typography>}
      <BoxDiv>{categoryItems}</BoxDiv>
    </BoxDiv>
  );
};

const styles = (theme: Theme) => ({
  categoryContainer: {
    sx: {
      paddingBottom: 3,
    },
  },
  menuSubtitle: {
    sx: {
      paddingBottom: 1,
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      fontWeight: 800,
      color: theme.palette.text.secondary,
    },
  },
});

type CategoryItemProps = {
  data: DataItemProps;
};

type DataItemProps = {
  id: string | number;
  title: string;
  items: any;
};

type ItemProps = {
  id: string | number;
  category: string;
  title: string;
  subtitles?: any; // []
  link: string;
  icon: any; // change
};
