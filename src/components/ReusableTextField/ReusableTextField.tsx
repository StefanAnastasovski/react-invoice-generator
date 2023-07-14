import React from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  Theme,
  useTheme,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import {
  disableArrowsInNumberTextfieldStyle,
  setTextFieldItemColorStyle,
} from "@utils/styleUtils";

export const ReusableTextField = ({
  item,
  onClickIcon,
  style: compStyle,
  onChange,
  isTextarea = false,
  textAreaRows,
}: any) => {
  const theme = useTheme();
  const style = styles(theme);

  return (
    <TextField
      required={item.isRequired}
      // onChange={formik.handleChange}
      onChange={onChange}
      id={item.id}
      name={item.name}
      type={item.type}
      label={item.label}
      placeholder={item.placeholder}
      value={item?.value}
      // value={formik.values[item.name]}
      autoComplete="off"
      fullWidth
      multiline={isTextarea}
      // rows={isTextarea ? textAreaRows : undefined}
      maxRows={isTextarea ? textAreaRows : undefined}
      inputProps={{
        min: item?.min,
        max: item?.max,
        sx: { ...(compStyle?.inputPropsStyle || style.inputPropsStyle) },
      }}
      InputProps={{
        endAdornment: item.isIcon && (
          <IconComponent
            onClick={onClickIcon}
            style={style}
            icon={item?.icon}
            ariaLabel={item?.ariaLabel}
          />
        ),
      }}
      InputLabelProps={{
        // error: isError,
        // color: isError ? "error" : "primary",
        sx: { ...compStyle?.inputLabelPropsStyle },
      }}
      // TODO: implement validation
      // helperText={isError ? errors[item.name] : ""}
      // error={isError}
      sx={[
        style.itemStyle,
        compStyle?.itemColorStyle || style.itemColorStyle,
        compStyle?.textfieldStyle,
        // {
        // color: isError && style.errorColor,
        // },
        // isError && style.errorHoverColor,
      ]}
    />
  );
};

const IconComponent = ({ onClick, style, icon, ariaLabel }: any) => {
  return (
    <InputAdornment position="end">
      <IconButton
        edge="end"
        aria-label={ariaLabel}
        onClick={onClick}
        // onMouseDown={handleMouseDownPassword}
        sx={style.addIconButton}
      >
        {icon ? icon : <AddIcon style={style.addIcon} />}
      </IconButton>
    </InputAdornment>
  );
};

const styles = (theme: Theme) => {
  return {
    addIconButton: {
      // paddingX: 2,
      fill: theme.palette.primary.light,
      "& :hover": {
        fill: theme.palette.secondary.main,
      },
    },
    addIcon: {
      fill: theme.palette.primary.main,
    },
    inputPropsStyle: {
      color: theme.palette.primary.dark,
    },
    itemStyle: disableArrowsInNumberTextfieldStyle(),
    itemColorStyle: setTextFieldItemColorStyle({ theme }),
  };
};
