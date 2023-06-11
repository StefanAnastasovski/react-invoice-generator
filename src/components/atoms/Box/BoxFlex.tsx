import React from "react";
import Box from "@mui/material/Box";
import { ChildrenProps } from "types/ChildrenProps";

export const BoxFlex = ({
  children,
  style = {},
  column,
  onClick,
  ...restProps
}: BoxFlexProps) => {
  const flexStyle = styles(column);
  return (
    <Box
      component="div"
      sx={[style, { ...flexStyle.container }]}
      onClick={onClick ?? onClick}
      {...restProps}
    >
      {children}
    </Box>
  );
};

const styles = (column?: boolean) => {
  return {
    container: {
      display: "flex",
      flexDirection: column ? "column" : "",
    },
  };
};

interface BoxFlexProps extends ChildrenProps {
  column?: boolean;
  onClick?: any;
}
