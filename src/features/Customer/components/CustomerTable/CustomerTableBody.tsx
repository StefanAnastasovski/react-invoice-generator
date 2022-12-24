import React from "react";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { customerMockedRows } from "@features/Customer/constants/customerTable";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { CustomerTableDetails } from "./CustomerTableDetails";
import { CUSTOMER_TABLE_COL_SPAN } from "../CustomerTable";
import { CustomerTableBodyProps } from "@features/Customer/types/CustomerTableTypes";

const EMPTY_ROW_HEIGHT = 80;

export const CustomerTableBody = ({
  page,
  rowsPerPage,
  selectedRows,
  collapseId,
  handleCollapse,
  onSelectClick,
}: CustomerTableBodyProps) => {
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - customerMockedRows.length)
      : 0;

  return (
    <TableBody>
      <CustomerTableDetails
        customerData={customerMockedRows}
        page={page}
        rowsPerPage={rowsPerPage}
        selectedRows={selectedRows}
        collapseId={collapseId}
        handleCollapse={handleCollapse}
        onSelectClick={onSelectClick}
      />

      {emptyRows > 0 ? (
        <TableRow style={styles(emptyRows).emptyRows}>
          <CustomTableCell colSpan={CUSTOMER_TABLE_COL_SPAN} children={""} />
        </TableRow>
      ) : null}
    </TableBody>
  );
};

const styles = (emptyRows: number) => {
  return {
    emptyRows: {
      height: EMPTY_ROW_HEIGHT * emptyRows,
    },
  };
};
