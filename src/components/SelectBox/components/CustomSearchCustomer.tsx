import React, { ChangeEvent } from "react";
import { InputAdornment, TextField, Theme, useTheme } from "@mui/material";
import { StyleSxCSSPropertiesProps } from "types/StyleProps";
import { Search as SearchIcon } from "@mui/icons-material";

type CustomSearchCustomerProps = {
  searchValue: string;
  handleSearchValue: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  style?: StyleSxCSSPropertiesProps;
};

const searchCustomerTextField = {
  id: "search-value",
  label: "Customer Name",
  name: "search-customer",
  placeholder: "Enter Customer Name",
  type: "text",
  dbKey: "search-customer", // not needed
  isRequired: true,
  items: null,
};

export const CustomSearchCustomer = ({
  searchValue,
  handleSearchValue,
}: //   style,
CustomSearchCustomerProps) => {
  const theme = useTheme();
  const style = styles(theme);
  const {
    id: searchFieldId,
    name: searchFieldName,
    label: searchFieldLabel,
    placeholder: searchFieldPlaceholder,
  } = searchCustomerTextField;

  return (
    <TextField
      // required={item.isRequired}
      onChange={(e) => handleSearchValue(e)}
      id={searchFieldId}
      name={searchFieldName}
      type="text"
      label={searchFieldLabel}
      placeholder={searchFieldPlaceholder}
      value={searchValue} // TODO: change with formik
      autoComplete="off"
      fullWidth
      inputProps={{
        min: 0,
        style: { ...style.contrastText },
      }}
      InputLabelProps={
        {
          // error: isError,
          // color: isError ? "error" : "primary",
        }
      }
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={style.searchIcon}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      // TODO: implement validation
      // helperText={isError ? errors[item.name] : ""}
      // error={isError}
      sx={[
        style.searchField,
        {
          // color: isError && style.errorColor,
        },
        // isError && style.errorHoverColor,
      ]}
    />
  );
};

const styles = (theme: Theme) => {
  const priLightColor = theme.palette.primary.light;
  const secLightColor = theme.palette.secondary.light;
  const priTextColor = theme.palette.primary.contrastText;

  return {
    contrastText: {
      color: priTextColor,
    },
    searchField: {
      color: secLightColor,
      marginBottom: 3,
      "& ::placeholder": {
        color: secLightColor,
      },
      "& .MuiInputLabel-root": {
        color: priTextColor,
      },
      "&:hover .MuiInputLabel-root": {
        color: priLightColor,
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: priLightColor,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: priTextColor,
        },
        "&:hover fieldset": {
          borderColor: secLightColor,
        },
        "&.Mui-focused fieldset": {
          borderColor: priLightColor,
        },
      },
    },
    searchIcon: {
      color: priTextColor,
    },
  };
};
