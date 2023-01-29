import React from "react";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { getTableCellWidthStyle } from "@utils/tableUtils";
import { LinkButton } from "@components/atoms/Buttons";
import { StatusComponent } from "@components/Status";
import { elementKeys } from "@features/Invoices/constants/invoiceTable";
import { InvoiceCellProps } from "@features/Invoices/types/InvoiceTypes";
import { TableCellsProps } from "types/components/TableProps";

const createElement = ({ item, key }: InvoiceCellProps) => {
  const text = item[key];
  if (key === elementKeys.invoiceId) {
    return <LinkButton children={text} path={text} />;
  }
  if (key === elementKeys.invoiceStatus) {
    return <StatusComponent children={text} />;
  }
  return text;
};

export const InvoiceTableCells = ({
  formattedData,
  rowId,
  tableCellWidth,
}: TableCellsProps) => {
  return (
    <>
      {formattedData.map((item: any) => {
        const objKey = Object.keys(item)[0];
        const element = createElement({
          key: objKey,
          item,
        });
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
    </>
  );
};
