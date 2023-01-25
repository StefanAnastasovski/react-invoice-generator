import React, { useCallback } from "react";
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
    detailsComponent,
    getFormattedData,
    onSelectClick,
    handleCollapse,
    handleDelete,
    handleEdit,
  } = params;
  const { formattedData, rowId, collapseData } = getFormattedData(details);
  const shouldCollapse = collapseId === rowId;

  const tableCellsComponent = useMakeTableCellsComponent({
    rowId: rowId,
    formattedData: formattedData,
    tableCellWidth: tableCellWidth,
    cellComponent: detailsComponent,
  });

  return (
    <React.Fragment key={rowId}>
      <TableRow style={tableStyle.container}>
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
          handleCollapse={() => handleCollapse(rowId)}
          onSelectClick={() => onSelectClick(rowId)}
        />

        {/* data */}
        {tableCellsComponent}

        <TableActions
          tableCellWidth={tableCellWidth}
          handleDelete={() => handleDelete(rowId)}
          handleEdit={() => handleEdit(rowId)}
        />
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
