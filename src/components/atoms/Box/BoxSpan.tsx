import React from "react";

import Box from "@mui/material/Box";
import { ChildrenProps } from "types/ChildrenProps";

export const BoxSpan = ({ children, style, ...restProps }: ChildrenProps) => {
  return (
    <Box component="span" sx={style} {...restProps}>
      {children}
    </Box>
  );
};
