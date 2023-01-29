import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import TableRow from "@mui/material/TableRow";
import { getDataPerTablePage, getTableCellWidthStyle } from "@utils/tableUtils";
import { TableActions, TableBodyCollapseWrapper } from "@components/Table";
import { CheckboxAndCollapseEntities } from "@components/Table/CheckboxAndCollapseEntities";
import { useCommonStyles } from "@hooks/index";
import { useMakeTableCellsComponent } from "@hooks/index";
import {
  TableDetailsProps,
  TableDetailsWrapperProps,
} from "types/components/TableProps";

export const TableDetailsWrapper = (params: TableDetailsWrapperProps) => {
  const { tableStyle } = useCommonStyles({});
  const { collapseId, page, rowsPerPage } = useSelector(
    (state: any) => state.table
  );
  const { tableData } = params;
  const getDetails = useCallback(() => {
    return getDataPerTablePage({
      rowsPerPage,
      page,
      tableData,
    });
  }, [rowsPerPage, page, tableData]);

  return (
    <>
      {getDetails().map((details, index) => {
        return (
          <TableDetails
            key={`${details}${index}`} // TODO: change to better key
            details={details}
            collapseId={collapseId}
            tableStyle={tableStyle}
            params={params}
          />
        );
      })}
    </>
  );
};

const TableDetails = ({
  details,
  collapseId,
  tableStyle,
  params,
}: TableDetailsProps) => {
  const {
    tableCellWidth,
    ariaLabelContent,
    colSpan,
    isCheckboxAndCollapseEnabled = true,
    actions,
    detailsComponent,
    getFormattedData,
    onSelectClick,
    handleCollapse,
    handleEdit,
    handleDelete,
    handleForward,
  } = params;
  const { formattedData, rowId, collapseData } = getFormattedData(details);
  const shouldCollapse = collapseId === rowId;

  const tableCellsComponent = useMakeTableCellsComponent({
    rowId: rowId,
    formattedData: formattedData,
    tableCellWidth: tableCellWidth,
    cellComponent: detailsComponent,
  });

  const deleteHandler = useCallback(() => {
    return handleDelete && handleDelete(rowId);
  }, [handleDelete, rowId]);

  const editHandler = useCallback(() => {
    return handleEdit && handleEdit(rowId);
  }, [handleEdit, rowId]);

  const forwardHandler = useCallback(() => {
    return handleForward && handleForward(rowId);
  }, [handleForward, rowId]);

  const handleCollapseHandler = () => {
    return handleCollapse && handleCollapse(rowId);
  };

  const onSelectClickHandler = () => {
    return onSelectClick && onSelectClick(rowId);
  };

  const actionItems = useMemo(() => {
    return actions.map((item: any) => {
      // TODO: refactor
      if (item.onClick === "handleEdit")
        return { ...item, onClick: editHandler };
      if (item.onClick === "handleDelete")
        return { ...item, onClick: deleteHandler };
      if (item.onClick === "handleForward")
        return { ...item, onClick: forwardHandler };
    });
  }, [actions, deleteHandler, editHandler, forwardHandler]);

  return (
    <React.Fragment key={rowId}>
      <TableRow style={tableStyle.container}>
        {isCheckboxAndCollapseEnabled ? (
          <CheckboxAndCollapseEntities
            rowId={rowId}
            shouldCollapse={shouldCollapse}
            tableCellWidth={tableCellWidth}
            ariaLabelContent={ariaLabelContent}
            getStyle={(cellName: string) =>
              getTableCellWidthStyle({
                tableCellWidth,
                cellName,
              })
            }
            handleCollapse={handleCollapseHandler}
            onSelectClick={onSelectClickHandler}
          />
        ) : null}

        {/* data */}
        {tableCellsComponent}

        <TableActions tableCellWidth={tableCellWidth} actions={actionItems} />
      </TableRow>

      <TableBodyCollapseWrapper
        shouldCollapse={shouldCollapse}
        colSpan={colSpan}
        titleLeft={collapseData?.titleLeft}
        titleRight={collapseData?.titleRight}
        collapseDataLeft={collapseData?.collapseDataLeft}
        collapseDataRight={collapseData?.collapseDataRight}
      />
    </React.Fragment>
  );
};
