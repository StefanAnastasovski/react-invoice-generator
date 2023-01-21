import React from "react";
import { BoxDiv } from "@components/atoms";
import { CONTENT_BUTTON_ACTIONS } from "@constants/constants";
import { CustomTableActionsProps } from "types/components/TableProps";
import { AddOrEditCustomer } from "./components/AddOrEditCustomer";
import { customersRoutes } from "@features/Router/routes";
import { CustomTable } from "@components/Table";
import { CustomerTableDetails } from "./components/CustomerTable/CustomerTableDetails";
import { CUSTOMER_TABLE_COL_SPAN } from "./constants/constants";
import { EMPTY_TABLE_ROW_HEIGHT } from "@constants/table";
import { customerColumns, customerMockedRows } from "./constants/customerTable";
import { useTableActions } from "@hooks/useTableActions";

export const Customer = ({
  isEdit = false,
  isNew = false,
}: CustomTableActionsProps) => {
  const rowId = "edb"; // TODO: change
  const titles = customerColumns;
  const tableData = customerMockedRows;
  const colSpan = CUSTOMER_TABLE_COL_SPAN;
  const emptyRowHeight = EMPTY_TABLE_ROW_HEIGHT;
  const routes = customersRoutes;

  const {
    data: customerList,
    setData: setCustomerList,
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
      {!isEdit && !isNew && (
        <CustomTable titles={titles} onSelectAllClick={onSelectAllClick} tableData={tableData}>
          <CustomerTableDetails
            tableData={tableData}
            onSelectClick={onSelectClick}
            handleCollapse={handleCollapse}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </CustomTable>
      )}

      {isNew && (
        <AddOrEditCustomer
          onClickSecondary={handleClose}
          addNewCustomer={setCustomerList}
          primaryButtonText={CONTENT_BUTTON_ACTIONS.ADD}
          secondaryButtonText={CONTENT_BUTTON_ACTIONS.CANCEL}
          customerList={customerList}
          isNew={isNew}
        />
      )}

      {isEdit && (
        <AddOrEditCustomer
          onClickSecondary={handleClose}
          // editCustomer={editCustomer}
          handleDelete={handleDelete}
          primaryButtonText={CONTENT_BUTTON_ACTIONS.UPDATE}
          secondaryButtonText={CONTENT_BUTTON_ACTIONS.CANCEL}
          deleteButtonText={CONTENT_BUTTON_ACTIONS.DELETE}
          customerList={[]}
          shouldEdit={isEdit && Boolean(getDataById())}
          customerData={getDataById()}
        />
      )}
    </BoxDiv>
  );
};
