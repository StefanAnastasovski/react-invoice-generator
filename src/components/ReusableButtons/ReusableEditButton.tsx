import React from "react";
import { IconButton, Theme, useTheme } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import { BoxDiv } from "@components/atoms";
import { useCommonStyles } from "@hooks/index";

export const ReusableEditButton = ({ handleEdit, style: compStyle }: any) => {
  const theme = useTheme();
  const style = styles(theme);

  const {
    tableStyle: { icons },
  } = useCommonStyles({});

  return (
    <BoxDiv style={compStyle?.iconContainer || style.iconContainer}>
      <IconButton
        onClick={handleEdit}
        sx={[
          icons,
          style.editIconButtonContainer,
          compStyle?.editIconButton || style.editIconButton,
          compStyle?.editIconButtonPosition || style.editIconButtonPosition,
        ]}
      >
        <EditIcon style={compStyle?.editIcon || style.editIcon} />
      </IconButton>
    </BoxDiv>
  );
};

const styles = (theme: Theme) => {
  return {
    iconContainer: {
      position: "relative",
    },
    editIconButtonContainer: {
      position: "absolute",
    },
    editIconButtonPosition: {
      left: 10,
      top: -5,
    },
    editIconButton: {
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      "& :hover": {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
      },
    },
    editIcon: {
      width: 20,
      height: 20,
    },
  };
};
