import React, { useMemo, useState } from "react";
import { customerMockedRows } from "@features/Customer/constants/customerTable";
import { CustomerTableWrapper } from "./CustomerTable/CustomerTableWrapper";
import { CustomerTableHead } from "./CustomerTable/CustomerTableHead";
import { CustomerTableFooter } from "./CustomerTable/CustomerTableFooter";
import { CustomerTableBody } from "./CustomerTable/CustomerTableBody";

export const CUSTOMER_TABLE_COL_SPAN = 7;

export const CustomerTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [collapseId, setCollapseId] = useState("");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const rowsPerPageData = useMemo(
    () =>
      customerMockedRows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage]
  );

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
    <CustomerTableWrapper>
      <>
        <CustomerTableHead
          rowsPerPageData={rowsPerPageData}
          selectedRows={selectedRows}
          onSelectAllClick={onSelectAllClick}
        />

        <CustomerTableBody
          page={page}
          rowsPerPage={rowsPerPage}
          selectedRows={selectedRows}
          collapseId={collapseId}
          handleCollapse={handleCollapse}
          onSelectClick={onSelectClick}
        />

        <CustomerTableFooter
          handleAllCollapse={handleAllCollapse}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          resetSelectedRows={resetSelectedRows}
        />
      </>
    </CustomerTableWrapper>
  );
};
