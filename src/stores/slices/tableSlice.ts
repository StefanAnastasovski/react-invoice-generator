import { createSlice } from "@reduxjs/toolkit";

const initialState: TableInitialProps = {
  page: 0,
  rowsPerPage: 5,
  collapseId: "",
  selectedRows: [],
  colSpan: 0,
  emptyRowHeight: 80,
  rowsPerPageData: [],
  // tableData: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setRowsPerPageData: (state, { payload: { data } }) => {
      const { page, rowsPerPage } = state;
      state.rowsPerPageData = data.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      );
    },
    setPage: (state, { payload: { page } }) => {
      state.page = page;
    },
    setRowsPerPage: (state, { payload: { rowsPerPage } }) => {
      state.rowsPerPage = rowsPerPage;
    },
    setCollapseId: (state, { payload: { collapseId } }) => {
      state.collapseId = collapseId;
    },
    setSelectedRows: (state, { payload: { selectedRows } }) => {
      state.selectedRows = selectedRows;
    },
    setSelectAllRows: (state, { payload: { id } }) => {
      if (state.selectedRows.length === state.rowsPerPageData.length) {
        state.selectedRows = [];
        return;
      }
      state.selectedRows = state.rowsPerPageData.map((item: any) =>
        item[id].toString()
      );
    },
    setColSpan: (state, { payload: { colSpan } }) => {
      state.colSpan = colSpan;
    },
    setEmptyRowHeight: (state, { payload: { emptyRowHeight } }) => {
      state.emptyRowHeight = emptyRowHeight;
    },
    // setTableData: (state, { payload: { tableData } }) => {
    //   state.tableData = tableData;
    // },
    addSelectedRow: (state, { payload: { id } }) => {
      const formattedId = id.toString();
      if (state.selectedRows.includes(formattedId)) {
        state.selectedRows = state.selectedRows.filter(
          (item: any) => item !== formattedId
        );
        return;
      }
      state.selectedRows = state.selectedRows.concat(formattedId);
    },
    resetSelectedRows: (state) => {
      state.selectedRows = [];
    },
    resetCollapseId: (state) => {
      state.collapseId = "";
    },
    resetSelectedRowsAndCollapseId: (state) => {
      state.selectedRows = [];
      state.collapseId = "";
    },
    handleCollapse: (state, { payload: { id } }) => {
      const formmatedId = id.toString();
      if (state.collapseId === formmatedId) {
        state.collapseId = "";
        return;
      }
      state.collapseId = formmatedId;
    },
  },
});

export const tableReducer = tableSlice.reducer;
export const tableActions = tableSlice.actions;

export default tableSlice;

type TableInitialProps = {
  page: number;
  rowsPerPage: number;
  collapseId: string;
  selectedRows: string[];
  colSpan: number;
  emptyRowHeight: number;
  rowsPerPageData: any;
  // tableData: any;
};
