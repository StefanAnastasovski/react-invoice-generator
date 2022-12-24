import { Stack } from "@mui/material";
import * as React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  spacing?: number;
  style?: React.CSSProperties;
};

export const VStack = ({ children, spacing, style }: Props) => {
  return (
    <Stack direction="column" spacing={spacing} sx={{ ...style }}>
      {children}
    </Stack>
  );
};
