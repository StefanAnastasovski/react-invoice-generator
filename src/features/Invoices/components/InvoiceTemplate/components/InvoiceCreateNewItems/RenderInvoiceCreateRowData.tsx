import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { getInvoiceRowStyle } from "@features/Invoices/utils/invoiceStyleUtils";
import { InvoiceCreateField } from "./InvoiceCreateField";

const INVOICE_NEW_ITEM_ACTIONS = {
  actions: [
    { id: 1, action: "Remove" },
    { id: 2, action: "Add" },
  ],
};

// TODO: change all any
type CreateRowDataProps = {
  item: any;
  itemIndex: number;
  items: any[];
  commonStyle: any;
  addItem: (index: number) => void;
  removeItem: (index: number) => void;
};

export const RenderInvoiceCreateRowData = ({
  item: rowFields,
  itemIndex,
  items,
  commonStyle,
  addItem,
  removeItem,
}: CreateRowDataProps) => {
  const { textStyle, theme } = commonStyle;
  const rowIndex = { "row-number": itemIndex + 1 };
  const extendedRowForCreateNewItem = [
    rowIndex,
    ...rowFields,
    INVOICE_NEW_ITEM_ACTIONS,
  ];

  const rowData = extendedRowForCreateNewItem.map(
    (rowItem: any, rowItemIndex: number) => {
      // cell style
      const isLastCellInRow =
        extendedRowForCreateNewItem.length - 1 === rowItemIndex;
      const isLastRow = items.length - 1 === itemIndex;
      const isDescriptionRow = rowItem.name === "description";
      const cellName = rowItem.name;
      const { cellStyle } = getInvoiceRowStyle({
        isLastCellInRow,
        isLastRow,
        isDescriptionRow,
        isEditable: true,
        cellName,
        textStyle,
        theme,
      });

      const handleAddItem = () => {
        return addItem(itemIndex);
      };

      const handleRemoveItem = () => {
        return removeItem(itemIndex);
      };

      return (
        <CustomTableCell
          key={`cell-${itemIndex}${rowItemIndex}`}
          style={cellStyle}
        >
          <InvoiceCreateField
            rowItem={rowItem}
            rowItemIndex={rowItemIndex}
            isLastCellInRow={isLastCellInRow}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
        </CustomTableCell>
      );
    }
  );

  return <>{rowData}</>;
};
