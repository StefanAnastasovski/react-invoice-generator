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
  isCheckboxEnabled,
  isCollapseEnabled,
  isIdEnabled,
  // TODO: remove after testing
  data: dataPlus,
  setData: setDataPlus,
  handleCustomEdit,
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
    actions,
    shouldRenderEmptyRows,
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
    handleForward,
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

  // TODO: remove after testing
  const handleDeleteDataPlus = (item: any) => {
    const filterData = dataPlus?.filter((searchItem: any) => {
      return searchItem?.id !== item;
    });

    const fixedNoteId = filterData.map((noteItem: any, index: number) => {
      return { ...noteItem, "note-id": index + 1 };
    });
    setDataPlus(fixedNoteId);
  };

  const tableActionComponent = useMakeTableComponent({
    tableComponent: tableComponent,
    ...props,
  });

  const handleCustomEditFn = (item: any) => {
    handleCustomEdit && handleCustomEdit(item);
  };

  return (
    <BoxDiv>
      {isTable && (
        <CustomTable
          titles={titles}
          tableData={dataPlus || data} // TODO: remove after testing
          onSelectAllClick={onSelectAllClick}
          isCheckboxEnabled={isCheckboxEnabled}
          isCollapseEnabled={isCollapseEnabled}
          isIdEnabled={isIdEnabled}
          shouldRenderEmptyRows={shouldRenderEmptyRows}
        >
          <TableDetailsWrapper
            tableData={dataPlus || data} // TODO: remove after testing
            tableCellWidth={tableCellWidth}
            ariaLabelContent={ariaLabelContent}
            colSpan={colSpan}
            detailsComponent={detailsComponent}
            isCheckboxEnabled={isCheckboxEnabled}
            isCollapseEnabled={isCollapseEnabled}
            actions={actions}
            getFormattedData={(details: any) => getFormattedData({ details })}
            onSelectClick={onSelectClick}
            handleCollapse={handleCollapse}
            handleDelete={!dataPlus ? handleDelete : handleDeleteDataPlus} // TODO: remove after testing
            handleEdit={handleCustomEdit ? handleCustomEditFn : handleEdit}
            handleForward={handleForward}
          />
        </CustomTable>
      )}

      {tableActionComponent}
    </BoxDiv>
  );
};
