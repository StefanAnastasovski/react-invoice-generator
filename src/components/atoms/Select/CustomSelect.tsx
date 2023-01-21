import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Theme,
  useTheme,
} from "@mui/material";
import { FormikProps } from "formik";
import { StringNumberObjectProps } from "types/CommonProps";

type itemList = {
  id: string;
  value: string | number;
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
  helperTextStyle,
  fullWidth = true,
}: {
  label: string;
  selectId: string;
  selectName: string;
  value: string;
  itemList: itemList[];
  formik: FormikProps<StringNumberObjectProps>;
  fieldRef?: React.RefObject<any>;
  formControlStyle?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  helperTextStyle?: React.CSSProperties;
  fullWidth?: boolean;
}) => {
  const theme = useTheme();
  const { touched, errors } = formik;
  const isError = touched[selectName] && Boolean(errors[selectName]);
  const styling = styles(theme, isError);

  return (
    <FormControl fullWidth={fullWidth} error={isError} sx={formControlStyle}>
      <InputLabel id={selectId} error={isError} sx={styling.labelStyle}>
        {label}
      </InputLabel>
      <Select
        labelId={selectId}
        id={selectId}
        name={selectName}
        value={value || ""}
        label={label}
        onChange={formik.handleChange}
        error={isError}
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
          {formik.errors[selectName]}
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
