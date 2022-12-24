import React from "react";
import TableRow from "@mui/material/TableRow";
import { Checkbox, SxProps, TableHead } from "@mui/material";
import { customerColumns } from "@features/Customer/constants/customerTable";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { CustomerTableHeadProps } from "@features/Customer/types/CustomerTableTypes";

const ARIA_LABEL = {
  selectAllCustomers: "select all customers",
};

const renderColumns = (style: CustomerStyleProps) =>
  customerColumns.map((column, index) => (
    <CustomTableCell
      key={column}
      style={
        customerColumns.length - 1 > index
          ? style.cellBorderRight
          : style.lastCellBorderRight
      }
    >
      {column}
    </CustomTableCell>
  ));

export const CustomerTableHead = ({
  rowsPerPageData,
  selectedRows,
  onSelectAllClick,
}: CustomerTableHeadProps) => {
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

        {renderColumns(styles)}
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

type CustomerStyleProps = {
  [x: string]: React.CSSProperties | SxProps;
};
