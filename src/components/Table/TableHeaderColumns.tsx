import React from "react";
import TableRow from "@mui/material/TableRow";
import { Checkbox, TableHead } from "@mui/material";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { useTable } from "@hooks/useTable";
import { TableCustomerProps } from "@features/Customer/types/NewCustomerTypes";
import { TableServiceProps } from "@features/Services/types/ServiceProps";
import { SelectedRows } from "types/components/TableProps";

const ARIA_LABEL = {
  selectAllCustomers: "select all customers",
};

export interface TableHeadProps extends SelectedRows {
  titles: string[]; // titiles
  rowsPerPageData: TableServiceProps[] | TableCustomerProps[];
  onSelectAllClick: () => void;
}

export const TableHeaderColumns = ({
  rowsPerPageData,
  selectedRows,
  titles,
  onSelectAllClick,
}: TableHeadProps) => {
  const { renderHeaderColumns } = useTable({
    columnsData: titles,
    style: styles,
  });

  return (
    <TableHead>
      <TableRow>
        <CustomTableCell style={styles.cellBorderRight}>
          <Checkbox
            checked={rowsPerPageData.length === selectedRows.length}
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
