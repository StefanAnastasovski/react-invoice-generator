import { InvoiceServiceCell } from "./InvoiceServiceCell";
import { getInvoiceRowStyle } from "@features/Invoices/utils/invoiceStyleUtils";
import { ServiceRowProps } from "@features/Invoices/types/InvoiceTypes";

const INVOICE_NEW_ITEM_ACTIONS = {
  actions: [
    { id: 1, action: "Remove" },
    { id: 2, action: "Add" },
  ],
};

export const InvoiceServiceRow = ({
  rowFields,
  rowIndex,
  numberOfItems,
  commonStyle,
  handleAddItem,
  handleRemoveItem,
}: ServiceRowProps) => {
  const { textStyle, theme } = commonStyle;
  const rowDataIndex = { "row-number": rowIndex + 1 };
  const rowData = [rowDataIndex, ...rowFields, INVOICE_NEW_ITEM_ACTIONS];

  return (
    <>
      {rowData.map((rowItem: any, rowItemIndex: number) => {
        const isDescriptionRow = rowItem?.name === "description";
        const cellName = rowItem?.name;
        const isLastCellInRow = rowData.length - 1 === rowItemIndex;
        const isLastRow = numberOfItems === rowIndex;
        const cellKey = `cell-${rowIndex}${rowItemIndex}`;
        const { cellStyle } = getInvoiceRowStyle({
          isLastCellInRow,
          isLastRow,
          isDescriptionRow,
          isEditable: true,
          cellName,
          textStyle,
          theme,
        });

        return (
          <InvoiceServiceCell
            key={`service-cell-${cellKey}`}
            cellKey={`cell-${rowIndex}${rowItemIndex}`}
            rowItem={rowItem}
            isLastCellInRow={isLastCellInRow}
            rowItemIndex={rowItemIndex}
            cellName={cellName}
            cellStyle={cellStyle}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
        );
      })}
    </>
  );
};
