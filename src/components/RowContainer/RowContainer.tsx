import React from "react";
import { Grid } from "@mui/material";
import { ContainerProps } from "types/components/ContainerProps";

export const RowContainer = ({
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
      direction="row"
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
