import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { TablePaginationActions } from "@components/Table/TablePaginationActions";
import { useTable } from "@hooks/index";
import { ALLOWED_ROWS_PER_PAGE, TABLE_ARIA_LABEL } from "@constants/table";

export const TablePaginationFooter = ({ tableData }: any) => {
  const { page, rowsPerPage, colSpan } = useSelector(
    (state: any) => state.table
  );
  const { handleChangePage, handleChangeRowsPerPage, setDefaultFooter } =
    useTable({});

  useEffect(() => {
    setDefaultFooter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={ALLOWED_ROWS_PER_PAGE}
          colSpan={colSpan}
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": TABLE_ARIA_LABEL.footerSelectProps,
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
