import React from "react";

import Box from "@mui/material/Box";
import { ChildrenProps } from "types/ChildrenProps";

export const BoxDiv = ({ children, ...restProps }: ChildrenProps) => {
  return (
    <Box component="div" {...restProps}>
      {children}
    </Box>
  );
};
