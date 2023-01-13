import React from "react";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { PageAndRowsPerPage } from "types/components/TableProps";
import { TableServiceProps } from "@features/Services/types/ServiceProps";
import { TableCustomerProps } from "@features/Customer/types/NewCustomerTypes";

interface TableBodyWrapperProps extends PageAndRowsPerPage {
  children: React.ReactNode;
  colSpan: number;
  tableData: TableCustomerProps[] | TableServiceProps[];
  emptyRowHeight?: number;
}

export const TableBodyWrapper = ({
  children,
  page,
  rowsPerPage,
  emptyRowHeight = 80,
  colSpan,
  tableData = [],
}: TableBodyWrapperProps) => {
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
