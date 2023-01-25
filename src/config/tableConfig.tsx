import { CONTENT_BUTTON_ACTIONS } from "@constants/constants";
import { EMPTY_TABLE_ROW_HEIGHT } from "@constants/table";
import {
  CUSTOMER_ARIA_LABEL,
  CUSTOMER_TABLE_COL_SPAN,
} from "@features/Customer/constants/constants";
import {
  customerColumns,
  customerMockedRows,
  CUSTOMER_CELL_WIDTH,
} from "@features/Customer/constants/customerTable";
import { getFormattedCustomerData } from "@features/Customer/utils";
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
import { AddOrEditCustomer } from "@features/Customer/components/AddOrEditCustomer";
import { AddOrEditService } from "@features/Services/components/AddOrEditService";
import { CustomerTableCells } from "@features/Customer/components/CustomerTable/CustomerTableCells";
import { ServiceTableCells } from "@features/Services/components/ServiceTable/ServiceTableCells";

export const tableConfig = {
  customers: {
    id: "customers",
    table: "customers",
    pageTitle: "Customers",
    tableId: "edb",
    titles: customerColumns,
    routes: customersRoutes,
    tableData: customerMockedRows,
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
};
