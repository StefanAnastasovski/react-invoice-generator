import React from "react";
import TableCell from "@mui/material/TableCell";
import { SxProps } from "@mui/material";

export const CustomTableCell = ({
  children,
  style,
  paddingProps,
  align,
  component,
  scope,
  colSpan,
  otherProps,
}: CustomerTableCellProps) => {
  return (
    <TableCell
      padding={paddingProps ? paddingProps : "normal"}
      align={align ? align : "center"}
      component={component ? component : null}
      scope={scope ? scope : null}
      sx={style}
      colSpan={colSpan}
      {...otherProps}
    >
      {children}
    </TableCell>
  );
};

type CustomerTableCellProps = {
  children: React.ReactNode;
  style?: React.CSSProperties | SxProps;
  paddingProps?: "none" | "normal" | "checkbox";
  align?: "center" | "left" | "right" | "justify" | "inherit";
  component?: string;
  scope?: string;
  otherProps?: any;
  colSpan?: number;
};
