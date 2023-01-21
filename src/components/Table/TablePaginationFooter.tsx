import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { TablePaginationActions } from "@components/Table/TablePaginationActions";
import {
  EventChangePageProp,
  EventChangeRowsPerPageProp,
} from "types/components/TableProps";
import { tableActions } from "@stores/slices/tableSlice";

const ALLOWED_ROWS_PER_PAGE = [5, 10, 25, { label: "All", value: -1 }];

const ARIA_LABEL = {
  selectProps: "rows per page",
};

export const TablePaginationFooter = ({ tableData }: any) => {
  const { page, rowsPerPage, colSpan } = useSelector(
    (state: any) => state.table
  );
  const dispatch = useDispatch();

  const handleChangePage = (event: EventChangePageProp, newPage: number) => {
    dispatch(tableActions.setPage({ page: newPage }));
    dispatch(tableActions.resetSelectedRowsAndCollapseId());
  };

  const handleChangeRowsPerPage = (event: EventChangeRowsPerPageProp) => {
    dispatch(
      tableActions.setRowsPerPage({
        rowsPerPage: parseInt(event.target.value, 10),
      })
    );
    dispatch(tableActions.setPage({ page: 0 }));
    dispatch(tableActions.resetSelectedRowsAndCollapseId());
  };

  useEffect(() => {
    dispatch(tableActions.resetSelectedRowsAndCollapseId());

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
