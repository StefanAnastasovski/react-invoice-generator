import React from "react";
import { ChildrenProps } from "types/ChildrenProps";
import { BoxDiv, BoxMain } from "@components/atoms";
import { HEADER_MIN_HEIGHT } from "@constants";

export const Body = ({ children }: ChildrenProps) => {
  const { outerContainer, innerContainer, rowContainer } = styles;
  return (
    <BoxMain {...outerContainer}>
      {/* Page */}
      <BoxDiv {...innerContainer}>
        <BoxDiv {...rowContainer}>{children}</BoxDiv>
      </BoxDiv>
    </BoxMain>
  );
};

const styles = {
  outerContainer: {
    sx: {
      flexGrow: 1,
      minHeight: "100vh",
      paddingTop: `${HEADER_MIN_HEIGHT}px`,
    },
  },
  innerContainer: {
    sx: {
      padding: "1em",
    },
  },
  rowContainer: {
    spacing: 3,
  },
};
