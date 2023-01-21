import React from "react";
import { BoxDiv } from "@components/atoms";
import { CONTENT_BUTTON_ACTIONS } from "@constants/constants";
import { CustomTableActionsProps } from "types/components/TableProps";
import { AddOrEditService } from "./components/AddOrEditService";
import { servicesRoutes } from "@features/Router/routes";
import { CustomTable } from "@components/Table";
import { ServiceTableDetails } from "./components/ServiceTable/ServiceTableDetails";
import { SERVICE_TABLE_COL_SPAN } from "./constants/constants";
import { EMPTY_TABLE_ROW_HEIGHT } from "@constants/table";
import { serviceColumns, serviceMockedRows } from "./constants/serviceTable";
import { useTableActions } from "@hooks/useTableActions";

export const Services = ({
  isNew = false,
  isEdit = false,
}: CustomTableActionsProps) => {
  const rowId = "sku"; // TODO: change
  const titles = serviceColumns;
  const tableData = serviceMockedRows;
  const colSpan = SERVICE_TABLE_COL_SPAN;
  const emptyRowHeight = EMPTY_TABLE_ROW_HEIGHT;
  const routes = servicesRoutes;

  const {
    data: serviceList,
    setData: setServiceList,
    onSelectAllClick,
    onSelectClick,
    handleCollapse,
    handleDelete,
    handleEdit,
    handleClose,
    getDataById,
  } = useTableActions({
    rowId,
    titles,
    tableData,
    colSpan,
    emptyRowHeight,
    routes,
  });

  return (
    <BoxDiv>
      {!isNew && !isEdit && (
        <CustomTable
          titles={titles}
          onSelectAllClick={onSelectAllClick}
          tableData={tableData}
        >
          <ServiceTableDetails
            tableData={tableData}
            onSelectClick={onSelectClick}
            handleCollapse={handleCollapse}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </CustomTable>
      )}

      {isNew && (
        <AddOrEditService
          onClickSecondary={handleClose}
          addNewService={setServiceList}
          primaryButtonText={CONTENT_BUTTON_ACTIONS.ADD}
          secondaryButtonText={CONTENT_BUTTON_ACTIONS.CANCEL}
          serviceData={serviceList}
          isNew={isNew}
        />
      )}

      {isEdit && (
        <AddOrEditService
          onClickSecondary={handleClose}
          // editService={editService}
          handleDelete={handleDelete}
          primaryButtonText={CONTENT_BUTTON_ACTIONS.UPDATE}
          secondaryButtonText={CONTENT_BUTTON_ACTIONS.CANCEL}
          deleteButtonText={CONTENT_BUTTON_ACTIONS.DELETE}
          serviceList={[]}
          shouldEdit={isEdit && Boolean(getDataById())}
          serviceData={getDataById()}
        />
      )}
    </BoxDiv>
  );
};
