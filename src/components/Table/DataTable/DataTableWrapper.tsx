import React from "react";
import { TableBodyWrapper, TableCustomWrapper } from "@components/Table";
import { DataTableHeader } from "./DataTableHeader";

export const DataTableWrapper = ({
  children,
  titles,
  tableData,
  shouldRenderEmptyRows,
  style,
}: any) => {
  const {
    table: tableStyle,
    tableHead: tableHeadStyle,
    tableBody: tableBodyStyle,
  } = style;

  return (
    <TableCustomWrapper style={tableStyle}>
      <DataTableHeader titles={titles} style={tableHeadStyle} />
      <TableBodyWrapper
        tableData={tableData}
        shouldRenderEmptyRows={shouldRenderEmptyRows}
        style={tableBodyStyle}
      >
        {children}
      </TableBodyWrapper>
    </TableCustomWrapper>
  );
};
