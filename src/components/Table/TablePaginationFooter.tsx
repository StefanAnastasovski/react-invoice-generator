import React, { useEffect } from "react";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { TablePaginationActions } from "@components/Table/TablePaginationActions";
import {
  EventChangePageProp,
  EventChangeRowsPerPageProp,
  TablePaginationFooterProps,
} from "types/components/TableProps";

const ALLOWED_ROWS_PER_PAGE = [5, 10, 25, { label: "All", value: -1 }];

const ARIA_LABEL = {
  selectProps: "rows per page",
};

export const TablePaginationFooter = ({
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  columnsData,
  colSpan,
  resetSelectedRows,
  handleAllCollapse,
}: TablePaginationFooterProps) => {
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
          colSpan={colSpan}
          count={columnsData.length}
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
