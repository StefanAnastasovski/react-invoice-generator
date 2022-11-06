import React from "react";

import Box from "@mui/material/Box";
import { ChildrenProps } from "types/ChildrenProps";

export const BoxSpan = ({ children, ...restProps }: ChildrenProps) => {
  return (
    <Box component="span" {...restProps}>
      {children}
    </Box>
  );
};
