import { Avatar, Theme, useTheme } from "@mui/material";
import * as React from "react";
import { BoxDiv } from "../Box";

type ImageProps = {
  source: string;
  alt: string;
  containerStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  firstLetters?: string | null;
};

export const Image = ({
  containerStyle,
  source = "",
  alt = "",
  imageStyle,
  firstLetters,
}: ImageProps) => {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <BoxDiv
      style={containerStyle ? containerStyle : style.containerDefaultStyle}
    >
      {Boolean(source) ? (
        <img
          src={source}
          alt={alt}
          style={
            imageStyle
              ? { ...style.imageDefaultStyle, ...imageStyle }
              : style.imageDefaultStyle
          }
        />
      ) : (
        <Avatar sx={style.avatarTextColor}>{firstLetters}</Avatar>
      )}
    </BoxDiv>
  );
};

const styles = (theme: Theme) => {
  return {
    containerDefaultStyle: {
      width: "40px",
      height: "40px",
    },
    imageDefaultStyle: {
      width: "100%",
      height: "100%",
    },
    avatarTextColor: {
      color: theme.palette.common.white,
    },
  };
};
