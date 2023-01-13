import { opacityHexSuffix } from "@constants/opacityHexConstants";
import { Theme, useTheme } from "@mui/material";

export const useCommonStyles = () => {
  const theme = useTheme();
  const buttonStyle = buttonStyles(theme);
  const dividerStyle = dividerStyles();
  return {
    buttonStyle,
    dividerStyle,
  };
};

export const buttonStyles = (theme: Theme) => {
  return {
    primaryButton: {
      paddingLeft: "5rem",
      paddingRight: "5rem",
      fontWeight: 800,
      letterSpacing: 0.5,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    primaryButtonOnHover: {
      backgroundColor: `${theme.palette.primary.main}${opacityHexSuffix[80]}`,
      borderColor: `${theme.palette.primary.main}${opacityHexSuffix[80]}`,
    },
    secondaryButton: {
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white,
      letterSpacing: 0.5,
      marginLeft: 3,
    },
    secondaryButtonOnHover: {
      color: theme.palette.primary.main,
    },
    deleteButton: {
      color: theme.palette.error.main,
      borderColor: theme.palette.error.main,
      letterSpacing: 0.5,
    },
    deleteButtonOnHover: {
      color: theme.palette.error.dark,
      borderColor: theme.palette.error.dark,
    },
    titleDivider: { paddingBottom: 2, marginBottom: 4, width: "100%" },
    buttonDivider: { marginTop: 4, marginBottom: 4, width: "100%" },
  };
};

export const dividerStyles = () => {
  return {
    titleDivider: { paddingBottom: 2, marginBottom: 4, width: "100%" },
    buttonDivider: { marginTop: 4, marginBottom: 4, width: "100%" },
  };
};
