import { getTableCellWidthStyle } from "@utils/tableUtils";
import { invoiceTemplateTableCellWidth as tableCellWidth } from "@features/Invoices/constants/invoiceTemplate";
import { Theme } from "@mui/material";

export const getInvoiceRowStyle = ({
  isLastCellInRow,
  isLastRow,
  isDescriptionRow,
  cellName,
  textStyle,
  theme,
  isEditable = false,
}: any) => {
  const style = styles({
    isDescriptionRow: isDescriptionRow,
    isLastCellInRow: isLastCellInRow,
    isLastRow: isLastRow,
    textStyle: textStyle,
    theme: theme,
    isEditable: isEditable,
  });
  const cellStyle = {
    ...getTableCellWidthStyle({
      tableCellWidth,
      cellName: cellName,
    }),
    ...style.cellTextStyle,
  };

  return { style, cellStyle };
};

type DataTableWrapperProps = {
  isLastCellInRow?: boolean;
  isLastRow?: boolean;
  isDescriptionRow?: boolean;
  cellName?: string;
  textStyle?: any;
  theme: Theme;
  isEditable?: boolean;
};

const styles = ({
  isDescriptionRow,
  isLastCellInRow,
  isLastRow,
  isEditable,
  textStyle,
  theme,
}: DataTableWrapperProps) => {
  const {
    text: { textAlign, fontSize },
  } = textStyle;
  const blackColor = theme.palette.common.black;
  const descriptionRowPadding =
    isDescriptionRow && isEditable ? "2px" : "0 12px";
  return {
    cellTextStyle: {
      fontSize: fontSize.smallerText,
      color: blackColor,
      borderRight: isLastCellInRow ? "none" : `1px solid ${blackColor}`,
      padding: isDescriptionRow ? descriptionRowPadding : "2px",
      textAlign: isDescriptionRow ? textAlign?.textLeft : textAlign?.textCenter,
      borderBottom: isLastRow ? "none" : null,
    },
  };
};
