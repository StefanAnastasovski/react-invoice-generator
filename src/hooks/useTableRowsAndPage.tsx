import { useMemo, useState } from "react";
import { getRowsPerPageData } from "@utils/tableUtils";

interface Props {
  tableData: any;
}
export const useTableRowsAndPage = ({ tableData }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [collapseId, setCollapseId] = useState("");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const rowsPerPageData = useMemo(
    () => getRowsPerPageData({ data: tableData, page, rowsPerPage }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page, rowsPerPage]
  );

  return {
    page,
    rowsPerPage,
    collapseId,
    selectedRows,
    rowsPerPageData,
    setPage,
    setRowsPerPage,
    setCollapseId,
    setSelectedRows,
  };
};
