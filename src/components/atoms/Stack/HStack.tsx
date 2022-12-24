import { Stack, SxProps } from "@mui/material";
import * as React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  spacing?: number;
  style?: React.CSSProperties | SxProps;
};

export const HStack = ({ children, spacing, style }: Props) => {
  return (
    <Stack direction="row" spacing={spacing} sx={{ ...style }}>
      {children}
    </Stack>
  );
};
