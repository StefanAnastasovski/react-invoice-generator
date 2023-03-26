import React, { Fragment } from "react";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { getTableCellWidthStyle } from "@utils/tableUtils";
import { TableCellsProps } from "types/components/TableProps";

export const InvoiceNotesTableCells = ({
  formattedData,
  rowId,
  tableCellWidth,
}: TableCellsProps) => {
  return (
    <Fragment>
      {formattedData.map((item: any) => {
        const objKey = Object.keys(item)[0];
        const element = item[objKey];
        return (
          <CustomTableCell
            key={`${rowId}${objKey}`}
            style={getTableCellWidthStyle({
              tableCellWidth,
              cellName: objKey,
            })}
          >
            {element}
          </CustomTableCell>
        );
      })}
    </Fragment>
  );
};
