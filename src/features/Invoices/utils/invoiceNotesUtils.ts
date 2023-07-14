import { calculateTotalAmount, getSign } from "@utils/commonUtils";

export const getFormattedInvoiceNotesData = ({ details }: any) => {
  const { id, noteId, note } = details;

  const rowId = id;

  const formattedData: any = [{ noteId }, { note }];

  return {
    formattedData,
    rowId,
    collapseData: [],
  };
};

export const getInvoiceField = (row: any, item: any, objKey: string) => {
  let cellValue = row[objKey];
  const isAmount = !!row.amount;

  if (!!row["rate-item"] || isAmount) {
    const priceSign = getSign(row, "price");
    if (isAmount) {
      cellValue = calculateTotalAmount({
        itemRate: item["rate-item"],
        quantity: item.quantity,
        discount: item.discount,
      });
    }
    return `${priceSign}${cellValue}`;
  } else if (!!row.discount) {
    const discountSign = getSign(row, "discount");
    return `${cellValue}${discountSign}`;
  }

  return cellValue;
};
