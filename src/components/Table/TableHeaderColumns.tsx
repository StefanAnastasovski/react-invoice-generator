import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import TableRow from "@mui/material/TableRow";
import { Checkbox, TableHead } from "@mui/material";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { useTable } from "@hooks/index";
import { TableHeadProps } from "types/components/TableProps";
import { TABLE_ARIA_LABEL } from "@constants/table";

export const TableHeaderColumns = ({
  titles,
  onSelectAllClick,
  isCheckboxEnabled = false,
  isIdEnabled = false,
}: TableHeadProps) => {
  const { selectedRows, rowsPerPageData } = useSelector(
    (state: any) => state.table
  );
  const { renderHeaderColumns } = useTable({
    columnsData: titles,
    style: styles,
  });

  return (
    <TableHead>
      <TableRow>
        {isIdEnabled ? (
          <CustomTableCell style={[styles.cellBorderRight, styles.title]}>
            #
          </CustomTableCell>
        ) : null}
        {isCheckboxEnabled ? (
          <Fragment>
            <CustomTableCell style={styles.cellBorderRight}>
              <Checkbox
                checked={
                  selectedRows.length > 0 &&
                  rowsPerPageData.length === selectedRows.length
                }
                onChange={onSelectAllClick}
                inputProps={{
                  "aria-label": TABLE_ARIA_LABEL.headerSelectAllCustomers,
                }}
              />
            </CustomTableCell>
            <CustomTableCell style={styles.cellBorderRight}>
              {""}
            </CustomTableCell>
          </Fragment>
        ) : null}
        {renderHeaderColumns}
      </TableRow>
    </TableHead>
  );
};

const styles = {
  cellBorderRight: {
    borderRight: "1px solid grey",
  },
  lastCellBorderRight: {
    borderRight: "unset",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 800,
  },
};
