import { TableRow } from "@mui/material";
import { useCommonStyles } from "@hooks/index";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { getFormattedInvoiceTemplateData as getFormattedData } from "@features/Invoices/utils/invoiceUtils";
import { getInvoiceField } from "@features/Invoices/utils/invoiceNotesUtils";
import { getInvoiceRowStyle } from "@features/Invoices/utils/invoiceStyleUtils";

export const InvoiceDataTableRows = ({ tableData }: any) => {
  const { textStyle, theme } = useCommonStyles({});
  return (
    <>
      {tableData.map((item: any, itemIndex: number) => {
        const formattedData: any = getFormattedData({
          details: item,
        });
        formattedData.unshift({ "row-number": itemIndex + 1 });

        const rowData = formattedData.map((row: any, rowIndex: number) => {
          const objKey = Object.keys(row)[0];
          // cell style
          const isLastCellInRow = formattedData.length - 1 === rowIndex;
          const isLastRow = tableData.length - 1 === itemIndex;
          const isDescriptionRow = !!row.description;
          const cellName = objKey;
          const { cellStyle } = getInvoiceRowStyle({
            isLastCellInRow,
            isLastRow,
            isDescriptionRow,
            cellName,
            textStyle,
            theme,
          });

          return (
            <CustomTableCell
              key={`cell-${itemIndex}${rowIndex}`}
              style={cellStyle}
            >
              {getInvoiceField(row, item, objKey)}
            </CustomTableCell>
          );
        });

        return <TableRow key={`row-${itemIndex}`}>{rowData}</TableRow>;
      })}
    </>
  );
};
