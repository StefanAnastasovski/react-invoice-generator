import React, { useMemo } from "react";
import { BoxDiv } from "@components/atoms";
import { TableConfigProps } from "types/components/TableProps";
import { CustomTable, TableDetailsWrapper } from "@components/Table";
import { useMakeTableComponent, useTableActions } from "@hooks/index";
import { getTableProps } from "@utils/tableUtils";

export const TableComponentWrapper = ({
  isNew = false,
  isEdit = false,
  config,
}: TableConfigProps) => {
  const isTable = !isEdit && !isNew;
  const {
    tableId,
    titles,
    tableData,
    colSpan,
    emptyRowHeight,
    routes,
    tableCellWidth,
    ariaLabelContent,
    addButtonText,
    cancelButtonText,
    updateButtonText,
    deleteButtonText,
    getFormattedData,
    tableComponent,
    detailsComponent,
  } = config;

  const {
    data,
    setData,
    onSelectAllClick,
    onSelectClick,
    handleCollapse,
    handleDelete,
    handleEdit,
    handleClose,
    getDataById,
  } = useTableActions({
    tableId,
    titles,
    tableData,
    colSpan,
    emptyRowHeight,
    routes,
  });

  const props = useMemo(() => {
    return getTableProps({
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
    });
  }, [
    addButtonText,
    cancelButtonText,
    data,
    deleteButtonText,
    getDataById,
    handleClose,
    handleDelete,
    isEdit,
    isNew,
    setData,
    updateButtonText,
  ]);

  const tableActionComponent = useMakeTableComponent({
    tableComponent: tableComponent,
    ...props,
  });

  return (
    <BoxDiv>
      {isTable && (
        <CustomTable
          titles={titles}
          tableData={data}
          onSelectAllClick={onSelectAllClick}
        >
          <TableDetailsWrapper
            tableData={data}
            tableCellWidth={tableCellWidth}
            ariaLabelContent={ariaLabelContent}
            colSpan={colSpan}
            detailsComponent={detailsComponent}
            getFormattedData={(details: any) => getFormattedData({ details })}
            onSelectClick={onSelectClick}
            handleCollapse={handleCollapse}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </CustomTable>
      )}

      {tableActionComponent}
    </BoxDiv>
  );
};
