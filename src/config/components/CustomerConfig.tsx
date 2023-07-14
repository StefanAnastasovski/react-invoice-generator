import { CONTENT_BUTTON_ACTIONS } from "@constants/constants";
import { editAndDeleteActions, EMPTY_TABLE_ROW_HEIGHT } from "@constants/table";
import {
  CUSTOMER_ARIA_LABEL,
  CUSTOMER_TABLE_COL_SPAN,
} from "@features/Customers/constants/constants";
import {
  customerColumns,
  customerMockedRows,
  CUSTOMER_CELL_WIDTH,
} from "@features/Customers/constants/customerTable";
import { getFormattedCustomerData } from "@features/Customers/utils";
import { customersRoutes } from "@features/Router/routes";
import { AddOrEditCustomer } from "@features/Customers/components/AddOrEditCustomer";
import { CustomerTableCells } from "@features/Customers/components/CustomerTable/CustomerTableCells";

export const customerConfig = {
  id: "customers",
  table: "customers",
  pageTitle: "Customers",
  tableId: "tin",
  titles: customerColumns,
  routes: customersRoutes,
  tableData: customerMockedRows,
  actions: editAndDeleteActions,
  colSpan: CUSTOMER_TABLE_COL_SPAN,
  emptyRowHeight: EMPTY_TABLE_ROW_HEIGHT,
  tableCellWidth: CUSTOMER_CELL_WIDTH,
  shouldRenderEmptyRows: undefined,
  ariaLabelContent: CUSTOMER_ARIA_LABEL,
  addButtonText: CONTENT_BUTTON_ACTIONS.ADD,
  cancelButtonText: CONTENT_BUTTON_ACTIONS.CANCEL,
  updateButtonText: CONTENT_BUTTON_ACTIONS.UPDATE,
  deleteButtonText: CONTENT_BUTTON_ACTIONS.DELETE,
  getFormattedData: getFormattedCustomerData,
  tableComponent: AddOrEditCustomer,
  detailsComponent: CustomerTableCells,
};
