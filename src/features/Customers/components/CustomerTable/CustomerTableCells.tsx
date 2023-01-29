import React from "react";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { getTableCellWidthStyle } from "@utils/tableUtils";
import { TableCellsProps } from "types/components/TableProps";

export const CustomerTableCells = ({
  formattedData,
  rowId,
  tableCellWidth,
}: TableCellsProps) => {
  return (
    <>
      {formattedData.map((item: any) => {
        const objKey = Object.keys(item)[0];
        return (
          <CustomTableCell
            key={`${rowId}${objKey}`}
            style={getTableCellWidthStyle({
              tableCellWidth,
              cellName: objKey,
            })}
          >
            {item[objKey]}
          </CustomTableCell>
        );
      })}
    </>
  );
};
