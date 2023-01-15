import React from "react";
import { serviceColumns, serviceMockedRows } from "../constants/serviceTable";
import { ServiceTableDetails } from "./ServiceTable/ServiceTableDetails";
import { EMPTY_TABLE_ROW_HEIGHT } from "@constants/table";
import { SERVICE_TABLE_COL_SPAN } from "../constants/constants";
import { useTableRowsAndPage } from "@hooks/useTableRowsAndPage";
import {
  TableBodyWrapper,
  TableCustomWrapper,
  TableHeaderColumns,
  TablePaginationFooter,
} from "@components/Table";

export const ServiceTable = () => {
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
  } = useTableRowsAndPage({ tableData: serviceMockedRows });

  const onSelectAllClick = () => {
    if (selectedRows.length === rowsPerPageData.length) {
      return setSelectedRows([]);
    }
    const allSku = rowsPerPageData.map(({ sku }) => sku.toString());
    return setSelectedRows(allSku);
  };

  const onSelectClick = (id: string | number) => {
    const formattedId = id.toString();
    if (selectedRows.includes(formattedId)) {
      const filteredRows = selectedRows.filter((item) => item !== formattedId);

      return setSelectedRows(filteredRows);
    }
    return setSelectedRows(selectedRows.concat(formattedId));
  };

  const resetSelectedRows = () => {
    return setSelectedRows([]);
  };

  const handleAllCollapse = () => {
    return setCollapseId("");
  };

  const handleCollapse = (id: string | number) => {
    const formmatedId = id.toString();
    if (formmatedId === collapseId) return setCollapseId("");
    return setCollapseId(formmatedId);
  };

  return (
    <TableCustomWrapper>
      <TableHeaderColumns
        rowsPerPageData={rowsPerPageData}
        titles={serviceColumns}
        selectedRows={selectedRows}
        onSelectAllClick={onSelectAllClick}
      />

      <TableBodyWrapper
        page={page}
        rowsPerPage={rowsPerPage}
        emptyRowHeight={EMPTY_TABLE_ROW_HEIGHT}
        colSpan={SERVICE_TABLE_COL_SPAN}
        tableData={serviceMockedRows}
      >
        <ServiceTableDetails
          page={page}
          rowsPerPage={rowsPerPage}
          selectedRows={selectedRows}
          collapseId={collapseId}
          tableData={serviceMockedRows}
          handleCollapse={handleCollapse}
          onSelectClick={onSelectClick}
        />
      </TableBodyWrapper>

      <TablePaginationFooter
        page={page}
        rowsPerPage={rowsPerPage}
        columnsData={serviceMockedRows}
        colSpan={SERVICE_TABLE_COL_SPAN}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        resetSelectedRows={resetSelectedRows}
        handleAllCollapse={handleAllCollapse}
      />
    </TableCustomWrapper>
  );
};
