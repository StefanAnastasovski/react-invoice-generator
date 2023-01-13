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
    // setSelectedRows,
  } = useTableRowsAndPage({ tableData: serviceMockedRows });

  const onSelectAllClick = () => {
    console.log("select all");
    // if (selectedRows.length === rowsPerPageData.length) {
    //   return setSelectedRows([]);
    // }
    // const allEdbs = rowsPerPageData.map(({ edb }) => edb.toString());
    // return setSelectedRows(allEdbs);
  };

  const onSelectClick = (edb: string | number) => {
    console.log("select all");

    // const formattedEdb = edb.toString();
    // if (selectedRows.includes(formattedEdb)) {
    //   const filteredRows = selectedRows.filter((item) => item !== formattedEdb);

    //   return setSelectedRows(filteredRows);
    // }
    // return setSelectedRows(selectedRows.concat(formattedEdb));
  };

  const resetSelectedRows = () => {
    console.log("select all");

    // return setSelectedRows([]);
  };

  const handleAllCollapse = () => {
    console.log("select all");

    // return setCollapseId("");
  };

  const handleCollapse = (id: string | number) => {
    console.log("collapse");
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
