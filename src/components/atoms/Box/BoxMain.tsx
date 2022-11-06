import React from "react";

import Box from "@mui/material/Box";
import { ChildrenProps } from "types/ChildrenProps";

export const BoxMain = ({ children, ...restProps }: ChildrenProps) => {
  return (
    <Box component="main" {...restProps}>
      {children}
    </Box>
  );
};
