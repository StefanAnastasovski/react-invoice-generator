import { useState } from "react";
import { TableRow } from "@mui/material";
import { useCommonStyles } from "@hooks/index";
import { invoiceNewItemField } from "@features/Invoices/constants/invoiceTemplate";
import { RenderInvoiceCreateRowData } from "./components/InvoiceCreateNewItems";
import { ItemType, RowFieldsType } from "@features/Invoices/types/InvoiceTypes";

// it's main component to render fields for creating new item/service in invoice
export const InvoiceCreateNewItems = () => {
  const [items, setItems] = useState<RowFieldsType[]>([invoiceNewItemField]);
  const commonStyle = useCommonStyles({});

  const addItem = (currentItemIndex: number) => {
    let newItems = [...items];
    const hasNextElements = currentItemIndex < items.length - 1;
    hasNextElements
      ? newItems.splice(currentItemIndex + 1, 0, invoiceNewItemField)
      : newItems.push(invoiceNewItemField);
    setItems(newItems);
  };

  const removeItem = (index: number) => {
    const newItems = [...items];
    if (newItems.length === 1) return;
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <>
      {items.map((rowFields: ItemType[], rowIndex: number) => {
        return (
          <TableRow key={`row-${rowIndex}`}>
            <RenderInvoiceCreateRowData
              rowFields={rowFields}
              rowIndex={rowIndex}
              items={items}
              commonStyle={commonStyle}
              addItem={addItem}
              removeItem={removeItem}
            />
          </TableRow>
        );
      })}
    </>
  );
};
