import React from "react";

import Box from "@mui/material/Box";
import { ChildrenProps } from "types/ChildrenProps";
import { RowContainer } from "@components/RowContainer";
import { BoxMain } from "@components/atoms";

export const Body = ({ children }: ChildrenProps) => {
  const { outerContainer, innerContainer, rowContainer } = styles;
  return (
    <BoxMain {...outerContainer}>
      {/* Page */}
      <Box {...innerContainer}>
        <RowContainer {...rowContainer}>{children}</RowContainer>
      </Box>
    </BoxMain>
  );
};

const styles = {
  outerContainer: {
    sx: {
      flexGrow: 1,
      marginBottom: 5,
    },
  },
  innerContainer: {
    sx: {
      padding: "0 40px",
      marginTop: "-4rem",
    },
  },
  rowContainer: {
    spacing: 3,
  },
};
