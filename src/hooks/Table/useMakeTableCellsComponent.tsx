import React from "react";
import { TableCellsComponent } from "types/components/TableProps";

export const useMakeTableCellsComponent = ({
  cellComponent,
  formattedData,
  rowId,
  tableCellWidth,
}: TableCellsComponent) => {
  return React.createElement(cellComponent, {
    formattedData,
    rowId,
    tableCellWidth,
  });
};
