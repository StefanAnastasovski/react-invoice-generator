import { Theme, useTheme } from "@mui/material";
import { opacityHexSuffix } from "@constants/opacityHexConstants";
import { DEFAULT_CELL_WIDTH } from "@constants/table";

export const useCommonStyles = ({
  cellWidth = DEFAULT_CELL_WIDTH,
}: CommonStyleProps) => {
  const theme = useTheme();
  const buttonStyle = buttonStyles(theme);
  const dividerStyle = dividerStyles();
  const tableStyle = tableStyles({ theme, cellWidth });
  return {
    buttonStyle,
    dividerStyle,
    tableStyle,
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

export const tableStyles = ({
  theme,
  cellWidth,
}: {
  theme: Theme;
  cellWidth?: number;
}) => {
  return {
    container: {
      width: 800,
    },
    cellWidth: {
      width: cellWidth,
    },
    icons: {
      fontSize: 24,
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  };
};

type CommonStyleProps = {
  cellWidth?: number;
};
