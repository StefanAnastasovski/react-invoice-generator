import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  Theme,
  useTheme,
} from "@mui/material";
import { FormikProps } from "formik";
import { StringNumberObjectProps } from "types/CommonProps";

type itemList = {
  id: string;
  value: string | number;
};

type CustomSelectProps = {
  label?: string;
  selectId: string;
  selectName: string;
  value?: string;
  itemList: itemList[];
  formik?: FormikProps<StringNumberObjectProps>; // TODO: only for testing create invoice
  fieldRef?: React.RefObject<any>;
  formControlStyle?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  inputPropsStyle?: SxProps;
  helperTextStyle?: React.CSSProperties;
  fullWidth?: boolean;
};

export const CustomSelect = ({
  label,
  selectId,
  selectName,
  value,
  itemList,
  formik,
  fieldRef,
  formControlStyle,
  labelStyle,
  selectStyle,
  itemStyle,
  inputPropsStyle,
  helperTextStyle,
  fullWidth = true,
}: CustomSelectProps) => {
  const theme = useTheme();
  const { touched, errors } = formik || {}; // TODO: only for testing create invoice
  const isError =
    touched && touched[selectName] && errors && Boolean(errors[selectName]); // TODO: only for testing create invoice
  const styling = styles(theme, isError);

  return (
    <FormControl fullWidth={fullWidth} error={isError} sx={formControlStyle}>
      {label && (
        <InputLabel id={selectId} error={isError} sx={styling.labelStyle}>
          {label}
        </InputLabel>
      )}
      <Select
        labelId={selectId}
        id={selectId}
        name={selectName}
        value={value || ""}
        label={label || ""}
        onChange={formik?.handleChange}
        error={isError}
        inputProps={{
          sx: inputPropsStyle,
        }}
        sx={selectStyle}
      >
        {itemList.map((item: itemList) => {
          return (
            <MenuItem key={item.id} value={item.value} sx={itemStyle}>
              {item.value}
            </MenuItem>
          );
        })}
      </Select>
      {isError && (
        <FormHelperText error={isError} sx={helperTextStyle}>
          {formik?.errors[selectName]}
        </FormHelperText>
      )}
    </FormControl>
  );
};

const styles = (theme: Theme, isError?: boolean) => {
  return {
    labelStyle: {
      color: theme.palette.grey.A400,
    },
  };
};
