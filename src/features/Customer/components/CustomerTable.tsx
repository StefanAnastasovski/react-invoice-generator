import React from "react";
import {
  customerColumns,
  customerMockedRows,
} from "@features/Customer/constants/customerTable";
import {
  TableBodyWrapper,
  TableCustomWrapper,
  TableHeaderColumns,
  TablePaginationFooter,
} from "@components/Table";
import { useTableRowsAndPage } from "@hooks/useTableRowsAndPage";
import { CUSTOMER_TABLE_COL_SPAN } from "../constants/constants";
import { EMPTY_TABLE_ROW_HEIGHT } from "@constants/table";
import { CustomerTableDetails } from "./CustomerTable/CustomerTableDetails";

export const CustomerTable = () => {
  const {
    page,
    rowsPerPage,
    collapseId,
    selectedRows,
    rowsPerPageData,
    setPage,
    setRowsPerPage,
    setCollapseId,
    setSelectedRows,
  } = useTableRowsAndPage({ tableData: customerMockedRows });

  const onSelectAllClick = () => {
    if (selectedRows.length === rowsPerPageData.length) {
      return setSelectedRows([]);
    }
    const allEdbs = rowsPerPageData.map(({ edb }) => edb.toString());
    return setSelectedRows(allEdbs);
  };

  const onSelectClick = (edb: string | number) => {
    const formattedEdb = edb.toString();
    if (selectedRows.includes(formattedEdb)) {
      const filteredRows = selectedRows.filter((item) => item !== formattedEdb);

      return setSelectedRows(filteredRows);
    }
    return setSelectedRows(selectedRows.concat(formattedEdb));
  };

  const resetSelectedRows = () => {
    return setSelectedRows([]);
  };

  const handleAllCollapse = () => {
    return setCollapseId("");
  };

  const handleCollapse = (edb: string | number) => {
    const formattedEdb = edb.toString();
    if (edb === collapseId) return setCollapseId("");
    return setCollapseId(formattedEdb);
  };

  return (
    <TableCustomWrapper>
      <TableHeaderColumns
        rowsPerPageData={rowsPerPageData}
        titles={customerColumns}
        selectedRows={selectedRows}
        onSelectAllClick={onSelectAllClick}
      />
      <TableBodyWrapper
        page={page}
        rowsPerPage={rowsPerPage}
        emptyRowHeight={EMPTY_TABLE_ROW_HEIGHT}
        colSpan={CUSTOMER_TABLE_COL_SPAN}
        tableData={customerMockedRows}
      >
        <CustomerTableDetails
          page={page}
          rowsPerPage={rowsPerPage}
          selectedRows={selectedRows}
          collapseId={collapseId}
          tableData={customerMockedRows}
          handleCollapse={handleCollapse}
          onSelectClick={onSelectClick}
        />
      </TableBodyWrapper>

      <TablePaginationFooter
        page={page}
        rowsPerPage={rowsPerPage}
        columnsData={customerMockedRows}
        colSpan={CUSTOMER_TABLE_COL_SPAN}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        resetSelectedRows={resetSelectedRows}
        handleAllCollapse={handleAllCollapse}
      />
    </TableCustomWrapper>
  );
};
