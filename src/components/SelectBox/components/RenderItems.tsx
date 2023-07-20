import React, { useState } from "react";
import { BoxDiv } from "@components/atoms";
import { Theme, Typography, useTheme } from "@mui/material";

import { Circle as CircleIcon } from "@mui/icons-material";
import { CustomSearchCustomer } from "./CustomSearchCustomer";
import { CompanyAddressType, CompanyType } from "types/InvoiceProps";

const MODAL_TITLE = "Customer Search";
// TODO: get items from BE
const COMPANY_FIELD = {
  id: "sfc-1",
  label: "Category",
  name: "service-category",
  placeholder: "",
  type: "text",
  dbKey: "category",
  isRequired: true,
  items: [
    {
      id: "sfc-i-1",
      name: "Awesome Company, LLC",
      tin: "4017000001000",
      cin: "7500100",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-2",
      name: "Paid Company, LLC",
      tin: "4017000001001",
      cin: "7500101",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-3",
      name: "Brand Company, LLC",
      tin: "4017000001002",
      cin: "7500102",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-4",
      name: "Style Company, LLC",
      tin: "4017000001003",
      cin: "7500103",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-5",
      name: "Data Company, LLC",
      tin: "4017000001004",
      cin: "7500104",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-6",
      name: "Programming Company, LLC",
      tin: "4017000001005",
      cin: "7500105",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-7",
      name: "Digital Company, LLC",
      tin: "4017000001006",
      cin: "7500106",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-8",
      name: "Master Company, LLC",
      tin: "4017000001007",
      cin: "7500107",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-9",
      name: "Design Comapny, LLC",
      tin: "4017000001008",
      cin: "7500108",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-10",
      name: "Video Company, LLC",
      tin: "4017000001009",
      cin: "7500109",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-11",
      name: "Great Company, LLC",
      tin: "4017000001010",
      cin: "7500110",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-12",
      name: "Game Comapny, LLC",
      tin: "4017000001011",
      cin: "7500111",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
    {
      id: "sfc-i-13",
      name: "Price Company, LLC",
      tin: "4017000001012",
      cin: "7500112",
      country: "Macedonia",
      city: "Kumanovo",
      address: "st. JNA no. 64",
      zipCode: "1300",
    },
  ],
};

interface CustomerProps extends CompanyType, CompanyAddressType {}

type RenderItemProps = {
  handleShowModal: () => void;
  handleCustomer: (v: CustomerProps) => void;
};

export const RenderItems = ({
  handleShowModal,
  handleCustomer,
}: RenderItemProps) => {
  const theme = useTheme();
  const style = styles(theme);

  // TODO: add formik
  const [searchValue, setSearchValue] = React.useState("");
  // TODO: for testing, get data from BE
  const [items, setItems] = useState(COMPANY_FIELD.items);

  const handleSearchValue = (e: any) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
    if (searchTerm.length >= 3) {
      const filterData = [...items].filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setItems(filterData);
    } else {
      setItems(COMPANY_FIELD.items);
    }
  };

  const handleItemClick = (customerItem: CustomerProps) => {
    handleShowModal && handleShowModal();
    handleCustomer && handleCustomer(customerItem);
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
