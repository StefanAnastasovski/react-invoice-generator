import React, { useState } from "react";
import { BoxDiv } from "@components/atoms";
import { Theme, Typography, useTheme } from "@mui/material";

import { Circle as CircleIcon } from "@mui/icons-material";
import { CustomSearchCustomer } from "./CustomSearchCustomer";

const MODAL_TITLE = "Customer Search";
// TODO: get items from BE
const company = {
  id: "sfc-1",
  label: "Category",
  name: "service-category",
  placeholder: "",
  type: "text",
  dbKey: "category",
  isRequired: true,
  items: [
    { id: "sfc-i-1", name: "Awesome Company, LLC" },
    { id: "sfc-i-2", name: "Paid Company, LLC" },
    { id: "sfc-i-3", name: "Brand Company, LLC" },
    { id: "sfc-i-4", name: "Style Company, LLC" },
    { id: "sfc-i-5", name: "Data Company, LLC" },
    { id: "sfc-i-6", name: "Programming Company, LLC" },
    { id: "sfc-i-7", name: "Digital Company, LLC" },
    { id: "sfc-i-8", name: "Master Company, LLC" },
    { id: "sfc-i-9", name: "Design Comapny, LLC" },
    { id: "sfc-i-10", name: "Video Company, LLC" },
    { id: "sfc-i-11", name: "Great Company, LLC" },
    { id: "sfc-i-12", name: "Game Comapny, LLC" },
    { id: "sfc-i-13", name: "Price Company, LLC" },
  ],
};

type RenderItemProps = {
  handleShowModal: () => void;
  setCustomer: (v: string) => void;
};

export const RenderItems = ({
  handleShowModal,
  setCustomer,
}: RenderItemProps) => {
  const theme = useTheme();
  const style = styles(theme);

  // TODO: add formik
  const [searchValue, setSearchValue] = React.useState("");
  // TODO: for testing, get data from BE
  const [items, setItems] = useState(company.items);

  const handleSearchValue = (e: any) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
    if (searchTerm.length >= 3) {
      const filterData = [...items].filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setItems(filterData);
    } else {
      setItems(company.items);
    }
  };

  const handleItemClick = (customerItem: any) => {
    handleShowModal && handleShowModal();
    setCustomer && setCustomer(customerItem);
  };

  return (
    <>
      <Typography sx={style.modalTitle}>{MODAL_TITLE}</Typography>
      <CustomSearchCustomer
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
        style={style}
      />

      <BoxDiv style={{ maxHeight: 300, overflow: "scroll" }}>
        {items.length > 0 &&
          items.map((item: any) => {
            return (
              <Typography
                key={item?.id}
                onClick={() => handleItemClick(item)}
                sx={style.itemStyle}
              >
                <CircleIcon style={style.itemIcon} />
                {item?.name}
              </Typography>
            );
          })}
      </BoxDiv>
    </>
  );
};

const styles = (theme: Theme) => {
  const priTextColor = theme.palette.primary.contrastText;

  return {
    modalTitle: {
      color: priTextColor,
      fontWeight: 800,
      fontSize: 16,
      margin: "8px 0",
      userSelect: "none",
    },
    contrastText: {
      color: priTextColor,
    },
    itemContainer: {
      maxHeight: 300,
      overflow: "scroll",
    },
    itemStyle: {
      fontSize: 16,
      letterSpacing: 0.25,
      color: priTextColor,
      userSelect: "none",
      marginBottom: 2,
      padding: "16px 8px",
      borderRadius: 2,
      backgroundColor: theme.palette.primary.dark,
      cursor: "pointer",
    },
    itemIcon: {
      fill: priTextColor,
      width: 12,
      height: 12,
      paddingTop: 1,
      paddingRight: 4,
      alignSelf: "center",
    },
  };
};
