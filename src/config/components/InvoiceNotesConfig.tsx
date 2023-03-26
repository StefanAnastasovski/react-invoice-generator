import { CONTENT_BUTTON_ACTIONS } from "@constants/constants";
import { editAndDeleteActions, EMPTY_TABLE_ROW_HEIGHT } from "@constants/table";
import { invoicesRoutes } from "@features/Router/routes/invoices";
import { getFormattedInvoiceNotesData } from "@features/Invoices/utils/invoiceNotesUtils";
import {
  invoiceNotesMockedRows,
  invoicesNotesColumns,
  INVOICE_NOTES_CELL_WIDTH,
  INVOICE_NOTES_TABLE_COL_SPAN,
} from "@features/Invoices/constants/invoiceNotesTable";
import { InvoiceNotesTableCells } from "@features/Invoices/components/InvoiceSettings/InvoiceNotes";

export const invoiceNotesConfig = {
  id: "notes",
  table: "notes",
  pageTitle: "",
  tableId: "notesId",
  titles: invoicesNotesColumns,
  routes: invoicesRoutes,
  tableData: invoiceNotesMockedRows,
  actions: editAndDeleteActions,
  colSpan: INVOICE_NOTES_TABLE_COL_SPAN,
  emptyRowHeight: EMPTY_TABLE_ROW_HEIGHT,
  tableCellWidth: INVOICE_NOTES_CELL_WIDTH,
  shouldRenderEmptyRows: false,
  ariaLabelContent: null,
  addButtonText: CONTENT_BUTTON_ACTIONS.ADD,
  cancelButtonText: CONTENT_BUTTON_ACTIONS.CANCEL,
  updateButtonText: CONTENT_BUTTON_ACTIONS.UPDATE,
  deleteButtonText: CONTENT_BUTTON_ACTIONS.DELETE,
  getFormattedData: getFormattedInvoiceNotesData,
  tableComponent: null,
  detailsComponent: InvoiceNotesTableCells,
};
