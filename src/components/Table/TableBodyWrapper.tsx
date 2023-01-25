import React from "react";
import { useSelector } from "react-redux";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { TableBodyWrapperProps } from "types/components/TableProps";

export const TableBodyWrapper = ({
  children,
  tableData,
}: TableBodyWrapperProps) => {
  const { page, rowsPerPage, colSpan, emptyRowHeight } = useSelector(
    (state: any) => state.table
  );

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  return (
    <TableBody>
      {children}
      {renderEmptyRows({ emptyRows, emptyRowHeight, colSpan })}
    </TableBody>
  );
};

const renderEmptyRows = ({
  emptyRows,
  emptyRowHeight,
  colSpan,
}: {
  [x: string]: number;
}) => {
  const style = styles(emptyRows, emptyRowHeight);
  return (
    <>
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
