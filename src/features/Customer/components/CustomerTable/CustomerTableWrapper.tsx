import React from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { ChildrenProps } from "types/ChildrenProps";

export const CustomerTableWrapper = ({ children }: ChildrenProps) => {
  return (
    <TableContainer component={Paper} sx={{ ...styles.tableMaxWidth }}>
      <Table
        sx={{ ...styles.tableMinWidth }}
        aria-label="custom pagination table"
      >
        {children}
      </Table>
    </TableContainer>
  );
};

const styles = {
  tableMaxWidth: {
    maxWidth: 1000,
  },
  tableMinWidth: {
    minWidth: 500,
  },
};
