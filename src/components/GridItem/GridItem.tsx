import React from "react";
import { Grid } from "@mui/material";
import { GridItemProps } from "types/components/GridItemProps";

export const GridItem = ({ children, style, ...restProps }: GridItemProps) => {
  return (
    <Grid item sx={style} {...restProps}>
      {children}
    </Grid>
  );
};
