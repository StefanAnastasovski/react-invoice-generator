import React from "react";
import {
  TableBodyWrapper,
  TableCustomWrapper,
  TableHeaderColumns,
  TablePaginationFooter,
} from "@components/Table";
import { CustomTableProps } from "types/components/TableProps";

export const CustomTable = ({
  children,
  titles,
  onSelectAllClick,
  tableData,
  isCheckboxEnabled = true,
  isIdEnabled = false,
  shouldRenderEmptyRows,
}: CustomTableProps) => {
  return (
    <TableCustomWrapper>
      <TableHeaderColumns
        titles={titles}
        onSelectAllClick={onSelectAllClick}
        isCheckboxEnabled={isCheckboxEnabled}
        isIdEnabled={isIdEnabled}
      />

      <TableBodyWrapper
        tableData={tableData}
        shouldRenderEmptyRows={shouldRenderEmptyRows}
      >
        {children}
      </TableBodyWrapper>

      <TablePaginationFooter tableData={tableData} />
    </TableCustomWrapper>
  );
};
