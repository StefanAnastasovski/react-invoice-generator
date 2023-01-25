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

export const getTableCellWidthStyle = ({ tableCellWidth, cellName }: any) => {
  return { width: tableCellWidth[cellName] };
};

export const getTableProps = ({
  isNew,
  isEdit,
  addButtonText,
  cancelButtonText,
  updateButtonText,
  deleteButtonText,
  data,
  setData,
  handleClose,
  handleDelete,
  getDataById,
}: any) => {
  return isNew
    ? {
        primaryButtonText: addButtonText,
        secondaryButtonText: cancelButtonText,
        tableData: data,
        isNew: isNew,
        onClickSecondary: handleClose,
        addNewItem: setData,
      }
    : isEdit
    ? {
        primaryButtonText: updateButtonText,
        secondaryButtonText: cancelButtonText,
        deleteButtonText: deleteButtonText,
        tableData: [],
        shouldEdit: isEdit && Boolean(getDataById()),
        existingItemData: getDataById(),
        onClickSecondary: handleClose,
        // editCustomer: editCustomer,
        handleDelete: handleDelete,
      }
    : null;
};
