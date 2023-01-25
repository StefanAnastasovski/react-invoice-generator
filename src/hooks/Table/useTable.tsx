import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { ALLOWED_ROWS_PER_PAGE } from "@constants/table";
import { tableActions } from "@stores/slices/tableSlice";
import {
  EventChangePageProp,
  EventChangeRowsPerPageProp,
  HeaderTitleProps,
  useTableProps,
} from "types/components/TableProps";

const renderTableHeaderColumns = ({ titles, style }: HeaderTitleProps) =>
  titles?.map((column: any, index: number) => {
    const titleColumnStyle = {
      ...styles.title,
      ...(titles.length - 1 > index
        ? style?.cellBorderRight
        : style?.lastCellBorderRight),
    };
    return (
      <CustomTableCell key={column} style={titleColumnStyle}>
        {column}
      </CustomTableCell>
    );
  });

export const useTable = ({ columnsData, style }: useTableProps) => {
  const renderHeaderColumns = useMemo(
    () =>
      renderTableHeaderColumns({
        titles: columnsData,
        style,
      }),
    [columnsData, style]
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

  const setDefaultFooter = () => {
    dispatch(tableActions.setPage({ page: 0 }));
    dispatch(tableActions.resetSelectedRowsAndCollapseId());
    dispatch(
      tableActions.setRowsPerPage({
        rowsPerPage: ALLOWED_ROWS_PER_PAGE[0],
      })
    );
  };

  return {
    renderHeaderColumns,
    handleChangePage,
    handleChangeRowsPerPage,
    setDefaultFooter,
  };
};

const styles = {
  title: {
    fontSize: "1.25rem",
    fontWeight: 800,
  },
};
