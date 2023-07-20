import { CreateRowDataProps } from "@features/Invoices/types/InvoiceTypes";
import { InvoiceServiceRow } from "./InvoiceServiceRow";

export const RenderInvoiceCreateRowData = ({
  rowFields,
  rowIndex,
  items,
  commonStyle,
  addItem,
  removeItem,
}: CreateRowDataProps) => {
  const handleAddItem = () => {
    return addItem(rowIndex);
  };

  const handleRemoveItem = () => {
    return removeItem(rowIndex);
  };

  return (
    <InvoiceServiceRow
      rowFields={rowFields}
      rowIndex={rowIndex}
      numberOfItems={items.length - 1}
      handleAddItem={handleAddItem}
      handleRemoveItem={handleRemoveItem}
      commonStyle={commonStyle}
    />
  );
};
