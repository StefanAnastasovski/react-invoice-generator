import { TableRow } from "@mui/material";
import { useCommonStyles } from "@hooks/index";
import { getTableCellWidthStyle } from "@utils/tableUtils";
import { calculateTotalAmount } from "@utils/commonUtils";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { PRICE_SIGN } from "@features/Services/constants/constants";
import { invoiceTemplateTableCellWidth as tableCellWidth } from "@features/Invoices/constants/invoiceTemplate";
import { getFormattedInvoiceTemplateData as getFormattedData } from "@features/Invoices/utils/invoiceUtils";

export const InvoiceDataTableRows = ({ tableData }: any) => {
  const { textStyle } = useCommonStyles({});
  return (
    <>
      {tableData.map((item: any, itemIndex: number) => {
        const formattedData: any = getFormattedData({
          details: item,
        });
        formattedData.unshift({ "row-number": itemIndex + 1 });

        const rowData = formattedData.map((row: any, rowIndex: number) => {
          const objKey = Object.keys(row)[0];
          const style = styles({
            isDescriptionRow: Boolean(row.description),
            isLastCellInRow: formattedData.length - 1 === rowIndex,
            isLastRow: tableData.length - 1 === itemIndex,
            textStyle,
          });
          const cellStyle = {
            ...getTableCellWidthStyle({
              tableCellWidth,
              cellName: objKey,
            }),
            ...style.cellTextStyle,
          };
          const priceSign = row.rateOrItem || row.amount ? PRICE_SIGN : "";
          const totalAmount = calculateTotalAmount({
            itemRate: item["rate-item"],
            quantity: item.quantity,
            discount: item.discount,
          });

          const cellValue = row.amount ? totalAmount : row[objKey];

          return (
            <CustomTableCell
              key={`cell-${itemIndex}${rowIndex}`}
              style={cellStyle}
            >
              {`${priceSign}${cellValue}`}
            </CustomTableCell>
          );
        });

        return <TableRow key={`row-${itemIndex}`}>{rowData}</TableRow>;
      })}
    </>
  );
};

type DataTableWrapperProps = {
  isDescriptionRow?: boolean;
  isLastCellInRow?: boolean;
  isLastRow?: boolean;
  textStyle?: any;
};

const styles = ({
  isDescriptionRow,
  isLastCellInRow,
  isLastRow,
  textStyle,
}: DataTableWrapperProps) => {
  const {
    text: { textAlign, fontSize },
  } = textStyle;
  const borderColor = "black";
  return {
    cellTextStyle: {
      color: "black",
      fontSize: fontSize.text,
      borderRight: isLastCellInRow ? "none" : `1px solid ${borderColor}`,
      padding: isDescriptionRow ? "0 12px" : "2px",
      textAlign: isDescriptionRow ? textAlign?.textLeft : textAlign?.textCenter,
      borderBottom: isLastRow ? "none" : null,
    },
  };
};
