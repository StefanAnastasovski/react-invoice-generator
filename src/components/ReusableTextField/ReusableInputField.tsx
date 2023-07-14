import React from "react";
import { Box, Input, Theme, useTheme } from "@mui/material";
import { disableArrowsInNumberTextfieldStyle } from "@utils/styleUtils";

export const ReusableInputField = ({
  item,
  isTextCentralized,
  onChange,
  disableUnderline = true,
}: any) => {
  const theme = useTheme();
  const isNumberType = item?.type === "number";
  const style = styles(theme, isTextCentralized, isNumberType);

  return (
    <Box sx={style.container}>
      <Input
        placeholder={item.placeholder}
        inputProps={{ "aria-label": item.ariaLabel }}
        type={item?.type}
        // value={item.value}
        sx={style.input}
        onChange={onChange}
        disableUnderline={disableUnderline}
      />
    </Box>
  );
};

const styles = (
  theme: Theme,
  isTextCentralized?: boolean,
  isNumberType?: boolean
) => {
  return {
    container: {
      marginX: 1,
    },
    input: {
      width: "100%",
      maxHeight: "30px",
      fontSize: 14,
      paddingX: 1,
      color: theme.palette.primary.dark,
      textAlign: isTextCentralized ? "center" : "start",
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: "4px",
      "& .MuiInputBase-input": {
        textAlign: isTextCentralized ? "center" : "start",
      },
      ...(isNumberType && disableArrowsInNumberTextfieldStyle()),
    },
  };
};
