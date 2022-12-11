import * as React from "react";
import {
  Typography,
  TypographyVariant,
  TypographyVariantsOptions,
} from "@mui/material";
import { StyleDefaultProps } from "types/StyleProps";

type ParagraphProps = {
  children: React.ReactNode;
  style: StyleDefaultProps;
  variant?: TypographyVariant;
  bold?: boolean;
  restProps?: TypographyVariantsOptions;
};

export const Paragraph = ({
  children,
  style,
  variant,
  bold,
  restProps,
}: ParagraphProps) => {
  const boldStyle = bold ? { fontWeight: 800 } : null;
  return (
    <Typography
      component="p"
      sx={[style, boldStyle]}
      variant={variant}
      {...restProps}
    >
      {children}
    </Typography>
  );
};
