import React from "react";

import Box from "@mui/material/Box";
import { ChildrenProps } from "types/ChildrenProps";
import { ClassNamesProps } from "types/CommonProps";

interface BoxDivProps extends ChildrenProps, ClassNamesProps {}

export const BoxDiv = ({
  children,
  style,
  classNames,
  ...restProps
}: BoxDivProps) => {
  return (
    <Box component="div" sx={style} {...restProps} className={classNames}>
      {children}
    </Box>
  );
};
