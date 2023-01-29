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
  isCheckboxAndCollapseEnabled = true,
}: CustomTableProps) => {
  return (
    <TableCustomWrapper>
      <TableHeaderColumns
        titles={titles}
        onSelectAllClick={onSelectAllClick}
        isCheckboxAndCollapseEnabled={isCheckboxAndCollapseEnabled}
      />

      <TableBodyWrapper tableData={tableData}>{children}</TableBodyWrapper>

      <TablePaginationFooter tableData={tableData} />
    </TableCustomWrapper>
  );
};
