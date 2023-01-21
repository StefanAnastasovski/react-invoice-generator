import React from "react";
import {
  TableBodyWrapper,
  TableCustomWrapper,
  TableHeaderColumns,
  TablePaginationFooter,
} from "@components/Table";

type CustomTableProps = {
  children: React.ReactNode;
  titles: string[];
  onSelectAllClick: () => void;
  tableData: any;
};

export const CustomTable = ({
  children,
  titles,
  onSelectAllClick,
  tableData,
}: CustomTableProps) => {
  return (
    <TableCustomWrapper>
      <TableHeaderColumns titles={titles} onSelectAllClick={onSelectAllClick} />

      <TableBodyWrapper tableData={tableData}>{children}</TableBodyWrapper>

      <TablePaginationFooter tableData={tableData} />
    </TableCustomWrapper>
  );
};
