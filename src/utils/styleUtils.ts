import { Theme } from "@mui/material";

export const joinStyles = (arrayStyles: any) => {
  return arrayStyles.reduce((acc: any, currentStyle: any) => {
    return { ...acc, ...currentStyle };
  }, {});
};

export const verticalMargins = (value: string | number) => {
  return {
    marginTop: value,
    marginBottom: value,
  };
};
export const horizontalMargins = (value: string | number) => {
  return {
    marginRight: value,
    marginLeft: value,
  };
};

export const verticalPaddings = (value: string | number) => {
  return {
    paddingTop: value,
    paddingBottom: value,
  };
};
export const horizontalPaddings = (value: string | number) => {
  return {
    paddingRight: value,
    paddingLeft: value,
  };
};

export const setTextFieldItemColorStyle = ({
  theme,
  mainColor,
  focusedColor,
  hoverColor,
  fieldsetBorderColor,
}: {
  theme: Theme;
  mainColor?: string;
  focusedColor?: string;
  hoverColor?: string;
  fieldsetBorderColor?: string;
}) => {
  const style = {
    itemColorStyle: {
      "& .MuiInputLabel-root": {
        color: mainColor || theme.palette.primary.main,
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: focusedColor || theme.palette.secondary.main,
      },
      "&:hover .MuiFormLabel-root": {
        color: hoverColor || theme.palette.primary.light,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: fieldsetBorderColor
            ? fieldsetBorderColor
            : theme.palette.grey.A400,
        },
        "&:hover fieldset": {
          borderColor: hoverColor || theme.palette.primary.light,
        },
        "&.Mui-focused fieldset": {
          borderColor: focusedColor || theme.palette.secondary.main,
        },
      },
    },
  };
  return { ...style.itemColorStyle };
};

export const disableArrowsInNumberTextfieldStyle = () => {
  return {
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
    "& input[type=number]": {
      MozAppearance: "textfield",
    },
  };
};
