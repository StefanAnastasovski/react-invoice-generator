import React from "react";
import TableCell from "@mui/material/TableCell";
import { CustomerTableCellProps } from "types/components/TableProps";

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
