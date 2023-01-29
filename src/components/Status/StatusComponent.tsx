import React from "react";
import { BoxSpan } from "@components/atoms";
import { getStatusStyle } from "./utils/statusUtils";
import { StatusStyleProps } from "./types/StatusTypes";

export const StatusComponent = ({ children }: { children: string }) => {
  const { color, backgroundColor } = getStatusStyle(children);
  const { backgroundStyle, textStyle } = styles({ color, backgroundColor });
  return (
    <BoxSpan style={{ ...backgroundStyle, ...textStyle }}>{children}</BoxSpan>
  );
};

const styles = ({ color, backgroundColor }: StatusStyleProps) => {
  return {
    backgroundStyle: {
      backgroundColor,
      paddingTop: "8px",
      paddingBottom: "8px",
      paddingLeft: "12px",
      paddingRight: "12px",
      borderRadius: 9999,
    },
    textStyle: {
      color,
      fontWeight: 800,
    },
  };
};
