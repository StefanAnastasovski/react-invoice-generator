import { CONTENT_BUTTON_ACTIONS } from "@constants/constants";
import { editAndDeleteActions, EMPTY_TABLE_ROW_HEIGHT } from "@constants/table";
import { servicesRoutes } from "@features/Router/routes";
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
import { AddOrEditService } from "@features/Services/components/AddOrEditService";
import { ServiceTableCells } from "@features/Services/components/ServiceTable/ServiceTableCells";

export const serviceConfig = {
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
  shouldRenderEmptyRows: undefined,
  ariaLabelContent: SERVICE_ARIA_LABEL,
  addButtonText: CONTENT_BUTTON_ACTIONS.ADD,
  cancelButtonText: CONTENT_BUTTON_ACTIONS.CANCEL,
  updateButtonText: CONTENT_BUTTON_ACTIONS.UPDATE,
  deleteButtonText: CONTENT_BUTTON_ACTIONS.DELETE,
  getFormattedData: getFormattedServiceData,
  tableComponent: AddOrEditService,
  detailsComponent: ServiceTableCells,
};
