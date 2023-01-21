type Props = {
  rowsPerPage: number;
  page: number;
  tableData: any;
};

export const getDataPerTablePage = ({
  rowsPerPage,
  page,
  tableData,
}: Props): any[] => {
  return rowsPerPage > 0
    ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : tableData;
};

export const getRowsPerPageData = ({
  rowsPerPage,
  page,
  tableData,
}: Props): any[] => {
  return tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
};
