import React, { useEffect } from "react";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { customerMockedRows } from "@features/Customer/constants/customerTable";
import { TablePaginationActions } from "./TablePaginationActions";
import { CUSTOMER_TABLE_COL_SPAN } from "../CustomerTable";
import { CustomerTableFooterProps, EventChangePageProp, EventChangeRowsPerPageProp } from "@features/Customer/types/CustomerTableTypes";

const ALLOWED_ROWS_PER_PAGE = [5, 10, 25, { label: "All", value: -1 }];

const ARIA_LABEL = {
  selectProps: "rows per page",
};

export const CustomerTableFooter = ({
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  resetSelectedRows,
  handleAllCollapse,
}: CustomerTableFooterProps) => {
  const handleChangePage = (event: EventChangePageProp, newPage: number) => {
    setPage(newPage);
    handleAllCollapse();
    resetSelectedRows();
  };

  const handleChangeRowsPerPage = (event: EventChangeRowsPerPageProp) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    handleAllCollapse();
  };

  useEffect(() => {
    handleAllCollapse();
    resetSelectedRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={ALLOWED_ROWS_PER_PAGE}
          colSpan={CUSTOMER_TABLE_COL_SPAN}
          count={customerMockedRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": ARIA_LABEL.selectProps,
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
};
