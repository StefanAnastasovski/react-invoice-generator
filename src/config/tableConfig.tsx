import { CONTENT_BUTTON_ACTIONS } from "@constants/constants";
import {
  editAndDeleteActions,
  EMPTY_TABLE_ROW_HEIGHT,
  forwardActions,
} from "@constants/table";
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
import { customersRoutes, servicesRoutes } from "@features/Router/routes";
import {
  SERVICE_ARIA_LABEL,
  SERVICE_TABLE_COL_SPAN,
} from "@features/Services/constants/constants";
import {
  serviceColumns,
  serviceMockedRows,
  SERVICE_CELL_WIDTH,
} from "@features/Services/constants/serviceTable";
import { getFormattedServiceData } from "@features/Services/utils";
import { AddOrEditCustomer } from "@features/Customers/components/AddOrEditCustomer";
import { AddOrEditService } from "@features/Services/components/AddOrEditService";
import { CustomerTableCells } from "@features/Customers/components/CustomerTable/CustomerTableCells";
import { ServiceTableCells } from "@features/Services/components/ServiceTable/ServiceTableCells";
import { invoicesRoutes } from "@features/Router/routes/invoices";
import {
  invoiceMockedRows,
  invoicesColumns,
  INVOICE_CELL_WIDTH,
} from "@features/Invoices/constants/invoiceTable";
import {
  INVOICE_ARIA_LABEL,
  INVOICE_TABLE_COL_SPAN,
} from "@features/Invoices/constants/constants";
import { getFormattedInvoiceData } from "@features/Invoices/utils/invoiceUtils";
import { InvoiceTableCells } from "@features/Invoices/components/InvoiceTable/InvoiceTableCells";

export const tableConfig = {
  customers: {
    id: "customers",
    table: "customers",
    pageTitle: "Customers",
    tableId: "edb",
    titles: customerColumns,
    routes: customersRoutes,
    tableData: customerMockedRows,
    actions: editAndDeleteActions,
    colSpan: CUSTOMER_TABLE_COL_SPAN,
    emptyRowHeight: EMPTY_TABLE_ROW_HEIGHT,
    tableCellWidth: CUSTOMER_CELL_WIDTH,
    ariaLabelContent: CUSTOMER_ARIA_LABEL,
    addButtonText: CONTENT_BUTTON_ACTIONS.ADD,
    cancelButtonText: CONTENT_BUTTON_ACTIONS.CANCEL,
    updateButtonText: CONTENT_BUTTON_ACTIONS.UPDATE,
    deleteButtonText: CONTENT_BUTTON_ACTIONS.DELETE,
    getFormattedData: getFormattedCustomerData,
    tableComponent: AddOrEditCustomer,
    detailsComponent: CustomerTableCells,
  },
  services: {
    id: "services",
    table: "services",
    pageTitle: "Services",
    tableId: "service-sku",
    titles: serviceColumns,
    routes: servicesRoutes,
    tableData: serviceMockedRows,
    actions: editAndDeleteActions,
    colSpan: SERVICE_TABLE_COL_SPAN,
    emptyRowHeight: EMPTY_TABLE_ROW_HEIGHT,
    tableCellWidth: SERVICE_CELL_WIDTH,
    ariaLabelContent: SERVICE_ARIA_LABEL,
    addButtonText: CONTENT_BUTTON_ACTIONS.ADD,
    cancelButtonText: CONTENT_BUTTON_ACTIONS.CANCEL,
    updateButtonText: CONTENT_BUTTON_ACTIONS.UPDATE,
    deleteButtonText: CONTENT_BUTTON_ACTIONS.DELETE,
    getFormattedData: getFormattedServiceData,
    tableComponent: AddOrEditService,
    detailsComponent: ServiceTableCells,
  },
  invoices: {
    id: "invoices",
    table: "invoices",
    pageTitle: "Invoices",
    tableId: "invoiceId",
    titles: invoicesColumns,
    routes: invoicesRoutes,
    tableData: invoiceMockedRows,
    actions: forwardActions,
    colSpan: INVOICE_TABLE_COL_SPAN,
    emptyRowHeight: EMPTY_TABLE_ROW_HEIGHT,
    tableCellWidth: INVOICE_CELL_WIDTH,
    ariaLabelContent: INVOICE_ARIA_LABEL,
    addButtonText: CONTENT_BUTTON_ACTIONS.ADD,
    cancelButtonText: CONTENT_BUTTON_ACTIONS.CANCEL,
    updateButtonText: CONTENT_BUTTON_ACTIONS.UPDATE,
    deleteButtonText: CONTENT_BUTTON_ACTIONS.DELETE,
    getFormattedData: getFormattedInvoiceData,
    tableComponent: null,
    detailsComponent: InvoiceTableCells,
  },
};
