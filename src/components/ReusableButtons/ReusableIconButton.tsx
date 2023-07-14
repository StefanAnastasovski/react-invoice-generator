import React from "react";
import { IconButton, Theme } from "@mui/material";
import { useCommonStyles } from "@hooks/index";

export const ReusableIconButton = ({
  onClick,
  style: compStyle,
  icon,
}: any) => {
  const {
    tableStyle: { icons },
    theme,
  } = useCommonStyles({});
  const style = styles(theme);

  return (
    <IconButton
      onClick={onClick}
      sx={[
        icons,
        compStyle?.iconStyle,
        compStyle?.editIconButton || style.editIconButton,
      ]}
    >
      {React.createElement(icon, {
        style: compStyle?.editIcon || style.editIcon,
      })}
    </IconButton>
  );
};

const styles = (theme: Theme) => {
  return {
    editIconButton: {
      padding: 0,
      color: theme.palette.primary.main,
      "& :hover": {
        color: theme.palette.secondary.main,
      },
    },
    editIcon: {
      width: 25,
      height: 25,
    },
  };
};
