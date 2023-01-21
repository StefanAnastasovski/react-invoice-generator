import React from "react";
import { useSelector } from "react-redux";
import TableRow from "@mui/material/TableRow";
import { Checkbox, TableHead } from "@mui/material";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { useTable } from "@hooks/useTable";

const ARIA_LABEL = {
  selectAllCustomers: "select all customers",
};

export interface TableHeadProps {
  titles: string[]; // titiles
  onSelectAllClick: () => void;
}

export const TableHeaderColumns = ({
  titles,
  onSelectAllClick,
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
        <CustomTableCell style={styles.cellBorderRight}>
          <Checkbox
            checked={
              selectedRows.length > 0 &&
              rowsPerPageData.length === selectedRows.length
            }
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": ARIA_LABEL.selectAllCustomers,
            }}
          />
        </CustomTableCell>
        <CustomTableCell style={styles.cellBorderRight}>{""}</CustomTableCell>
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
};
