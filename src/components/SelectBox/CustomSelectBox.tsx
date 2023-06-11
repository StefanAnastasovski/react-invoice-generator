import React from "react";
import { BoxFlex } from "@components/atoms";
import { Theme, Typography } from "@mui/material";
import {
  KeyboardArrowDown as ArrowDownIcon,
  KeyboardArrowRight as ArrowRightIcon,
} from "@mui/icons-material";
import { useCommonStyles } from "@hooks/index";
import { CustomSelectBoxProps } from "types/components/SelectBoxPorps";

const BOX_TITLE = "Select Customer";

export const CustomSelectBox = ({
  isModalOpen,
  handleShowModal,
}: CustomSelectBoxProps) => {
  const { theme, textStyle } = useCommonStyles({});
  const style = styles(theme, isModalOpen, textStyle);

  return (
    <BoxFlex style={style.selectBoxContainer} onClick={handleShowModal}>
      <Typography sx={style.selectBoxTitle}>{BOX_TITLE}</Typography>
      {isModalOpen ? (
        <ArrowRightIcon style={style.iconStyle} />
      ) : (
        <ArrowDownIcon style={style.iconStyle} />
      )}
    </BoxFlex>
  );
};

const styles = (theme: Theme, isModalOpen: boolean, textStyle: any) => {
  const isModalActiveColor = !isModalOpen
    ? theme.palette.primary.dark
    : theme.palette.secondary.main;
  return {
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    selectBoxOuterContainer: {
      width: "100%",
      maxWidth: 300,
      position: "relative",
    },
    selectBoxContainer: {
      border: `1px solid ${isModalActiveColor}`,
      borderRadius: 1,
      paddingY: 2,
      paddingX: 1.5,
    },
    selectBoxTitle: {
      fontSize: textStyle.text.fontSize.text,
      color: isModalActiveColor,
      width: "100%",
      alignSelf: "center",
      userSelect: "none",
    },
    iconStyle: {
      fill: isModalActiveColor,
      width: 30,
      height: 30,
      alignSelf: "center",
    },
  };
};
