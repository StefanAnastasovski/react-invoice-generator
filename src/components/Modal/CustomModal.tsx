import React from "react";
import { BoxDiv } from "@components/atoms";
import { joinStyles } from "@utils/styleUtils";
import { Theme, useTheme } from "@mui/material";
import { ModalProps } from "types/components/ModalProps";

export const CustomModal = ({
  children,
  isModalOpen = false,
  showArrowTop = true,
  containerStyle,
}: ModalProps) => {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <>
      {isModalOpen && (
        <BoxDiv
          style={joinStyles([
            containerStyle || style.container,
            showArrowTop ? style.arrowTop : undefined,
          ])}
        >
          {children}
        </BoxDiv>
      )}
    </>
  );
};

const styles = (theme: Theme) => {
  const shadowColor = "rgba(102, 226, 255, 1)"; //light
  const modalShadowColor = "rgba(102, 226, 255, 0.45)"; //light
  return {
    container: {
      position: "absolute",
      width: 500,
      maxWidth: 500,
      padding: 5,
      marginTop: 1.5,
      border: `2px solid ${theme.palette.secondary.light}`,
      borderRadius: 2,
      boxShadow: `0px 4px 44px ${modalShadowColor}`,
      background: theme.palette.background.paper,
    },
    arrowTop: {
      // Modal arrow style
      "&:before": {
        content: '""',
        position: "absolute",
        top: "0",
        left: "30px",
        border: `7px solid ${theme.palette.primary.light}`,
        borderColor: `transparent transparent ${theme.palette.background.paper} ${theme.palette.background.paper}`,
        boxShadow: `-2px 2px 2px -1px ${shadowColor}`,
        transform: "rotate(135deg)",
        transformOrigin: "0 0",
      },
    },
  };
};
