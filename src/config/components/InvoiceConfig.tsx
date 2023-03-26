import { CONTENT_BUTTON_ACTIONS } from "@constants/constants";
import { forwardActions } from "@constants/table";
import { invoicesRoutes } from "@features/Router/routes/invoices";
import {
  invoiceMockedRows,
  invoicesColumns,
  INVOICE_CELL_WIDTH,
} from "@features/Invoices/constants/invoiceTable";
import {
  EMPTY_TABLE_INOVICE_ROW_HEIGHT,
  INVOICE_ARIA_LABEL,
  INVOICE_TABLE_COL_SPAN,
} from "@features/Invoices/constants/constants";
import { getFormattedInvoiceData } from "@features/Invoices/utils/invoiceUtils";
import { InvoiceTableCells } from "@features/Invoices/components/InvoiceTable/InvoiceTableCells";
import { InvoiceSettings } from "@features/Invoices/components/InvoiceSettings/InvoiceSettings";

export const invoiceConfig = {
  id: "invoices",
  table: "invoices",
  pageTitle: "Invoices",
  tableId: "invoiceId",
  titles: invoicesColumns,
  routes: invoicesRoutes,
  tableData: invoiceMockedRows,
  actions: forwardActions,
  colSpan: INVOICE_TABLE_COL_SPAN,
  emptyRowHeight: EMPTY_TABLE_INOVICE_ROW_HEIGHT,
  tableCellWidth: INVOICE_CELL_WIDTH,
  shouldRenderEmptyRows: undefined,
  ariaLabelContent: INVOICE_ARIA_LABEL,
  addButtonText: CONTENT_BUTTON_ACTIONS.ADD,
  cancelButtonText: CONTENT_BUTTON_ACTIONS.CANCEL,
  updateButtonText: CONTENT_BUTTON_ACTIONS.UPDATE,
  deleteButtonText: CONTENT_BUTTON_ACTIONS.DELETE,
  getFormattedData: getFormattedInvoiceData,
  tableComponent: InvoiceSettings,
  detailsComponent: InvoiceTableCells,
};
