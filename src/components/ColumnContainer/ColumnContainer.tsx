import React from "react";
import { Grid } from "@mui/material";
import { ContainerProps } from "types/components/ContainerProps";

export const ColumnContainer = ({
  children,
  justifyContent,
  alignItems,
  wrap,
  containerStyle,
  ...restProps
}: ContainerProps) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent={justifyContent}
      alignItems={alignItems}
      wrap={wrap}
      sx={containerStyle}
      {...restProps}
    >
      {children}
    </Grid>
  );
};
