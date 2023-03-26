import React from "react";
import { useSelector } from "react-redux";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { TableBodyWrapperProps } from "types/components/TableProps";

export const TableBodyWrapper = ({
  children,
  tableData,
  shouldRenderEmptyRows = true,
  style
}: TableBodyWrapperProps) => {
  let component = null;
  const { page, rowsPerPage, colSpan, emptyRowHeight } = useSelector(
    (state: any) => state.table
  );

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  if (!shouldRenderEmptyRows) {
    component = children;
  } else {
    component =
      children && rowsPerPage < emptyRows
        ? children
        : renderEmptyRows({ children, emptyRows, emptyRowHeight, colSpan });
  }

  return <TableBody style={style}>{component}</TableBody>;
};

const renderEmptyRows = ({
  children,
  emptyRows,
  emptyRowHeight,
  colSpan,
}: {
  children: React.ReactNode;
  emptyRows: number;
  emptyRowHeight: number;
  colSpan: number;
}) => {
  const style = styles(emptyRows, emptyRowHeight);
  return (
    <>
      {children}
      {emptyRows > 0 ? (
        <TableRow style={style.emptyRows}>
          <CustomTableCell colSpan={colSpan} children={""} />
        </TableRow>
      ) : null}
    </>
  );
};

const styles = (emptyRows: number, emptyRowHeight: number) => {
  return {
    emptyRows: {
      height: emptyRowHeight * emptyRows,
    },
  };
};
