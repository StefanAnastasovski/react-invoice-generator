import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { InvoiceCreateField } from "./InvoiceCreateField";
import { ServiceCellProps } from "@features/Invoices/types/InvoiceTypes";

export const InvoiceServiceCell = ({
  rowItem,
  isLastCellInRow,
  rowItemIndex,
  cellStyle,
  cellKey,
  handleAddItem,
  handleRemoveItem,
}: ServiceCellProps) => {
  return (
    <CustomTableCell key={cellKey} style={cellStyle}>
      <InvoiceCreateField
        rowItem={rowItem}
        rowItemIndex={rowItemIndex}
        isLastCellInRow={isLastCellInRow}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
      />
    </CustomTableCell>
  );
};
