import React from "react";
import { IconButton, Theme, useTheme } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Moment } from "moment";
import { ReusableDatePickerProps } from "types/components/DateProps";
import { BoxFlex } from "@components/atoms";
import { Check as CheckIcon } from "@mui/icons-material";

export const ReusableDatePicker = (props: ReusableDatePickerProps) => {
  const {
    label,
    value,
    format,
    minDate,
    maxDate,
    onChange,
    style: styleComp,
    showConfirmButton = false,
  } = props;
  const theme = useTheme();
  const style = styles(theme, value);

  const handleOnChange = (newDate: Moment | null) => {
    onChange(newDate);
  };

  const component = (
    <DatePicker
      label={label}
      value={value}
      format={format}
      minDate={minDate}
      maxDate={maxDate}
      onAccept={(newDate: Moment | null) => handleOnChange(newDate)}
      // onChange={(newDate: Moment | null) => handleOnChange(newDate)}
      sx={styleComp || { ...style.input, ...style.label, ...style.fieldset }}
    />
  );

  if (!showConfirmButton) {
    return component;
  }

  return (
    <BoxFlex>
      {component}
      {showConfirmButton && (
        <IconButton sx={style.iconBox} onClick={() => handleOnChange(value)}>
          <CheckIcon sx={style.icon} />
        </IconButton>
      )}
    </BoxFlex>
  );
};

const styles = (theme: Theme, value: any) => {
  // const backgroundColor = `${theme.palette.text.secondary}${opacityHexSuffix[40]}`;
  const priDarkColor = theme.palette.primary.dark;
  const secMainColor = theme.palette.secondary.main;

  return {
    input: {
      "&": {
        ".MuiOutlinedInput-input": {
          fontSize: 16,
          padding: "0 12px",
          color: priDarkColor,
        },
        ".MuiOutlinedInput-root": {
          height: "100%",
        },
      },
    },
    label: {
      "& .MuiInputLabel-root": {
        color: priDarkColor,
        top: value ? 0 : "-10px",
      },
      "&:hover .MuiInputLabel-root": {
        color: secMainColor,
      },
    },
    fieldset: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: priDarkColor,
        },
        "&.Mui-focused fieldset": {
          borderColor: priDarkColor,
        },
        "& svg": {
          fill: priDarkColor,
        },
        "&:hover svg": {
          fill: secMainColor,
        },
        "&:hover fieldset": {
          borderColor: secMainColor,
        },
      },
    },
    iconBox: {
      alignSelf: "center",
      marginLeft: 1,
      padding: "4px",
      border: `1px solid ${priDarkColor}`,
      borderRadius: 1,
      color: priDarkColor,
      "&:hover": {
        color: secMainColor,
        borderColor: secMainColor,
      },
    },
    icon: {
      padding: 0.25,
    },
  };
};
