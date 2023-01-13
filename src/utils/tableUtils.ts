type Props = {
  rowsPerPage: number;
  page: number;
  data: any;
};

export const getDataPerTablePage = ({
  rowsPerPage,
  page,
  data,
}: Props): any[] => {
  return rowsPerPage > 0
    ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : data;
};

export const getRowsPerPageData = ({
  rowsPerPage,
  page,
  data,
}: Props): any[] => {
  return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
};
