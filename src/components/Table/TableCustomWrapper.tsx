import React from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { ChildrenProps } from "types/ChildrenProps";
import { TABLE_ARIA_LABEL } from "@constants/table";

export const TableCustomWrapper = ({ children }: ChildrenProps) => {
  return (
    <TableContainer component={Paper} sx={styles.tableMaxWidth}>
      <Table sx={styles.tableMinWidth} aria-label={TABLE_ARIA_LABEL.table}>
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
