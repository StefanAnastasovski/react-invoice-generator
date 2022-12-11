import React from "react";

import Box from "@mui/material/Box";
import { ChildrenProps } from "types/ChildrenProps";

export const BoxDiv = ({ children, style, ...restProps }: ChildrenProps) => {
  return (
    <Box component="div" sx={style} {...restProps}>
      {children}
    </Box>
  );
};
