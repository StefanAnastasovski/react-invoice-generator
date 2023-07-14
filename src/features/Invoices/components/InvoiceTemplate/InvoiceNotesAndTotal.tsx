import React from "react";
import { BoxDiv } from "@components/atoms";
import { HStack } from "@components/atoms/Stack";
import { useCommonStyles } from "@hooks/index";
import { invoiceDetails } from "@features/Invoices/constants/invoiceTemplate";
import { InvoiceSignature } from "./InvoiceSignature";
import { invoiceNotesMockedRows } from "@features/Invoices/constants/invoiceNotesTable";
import { InvoiceNoteComponent } from "./components/InvoiceNotesAndTotal";
import { InvoiceSummaryComponent } from "./components/InvoiceNotesAndTotal/InvoiceSummaryComponent";

export const InvoiceNotesAndTotal = () => {
  const { textStyle, theme } = useCommonStyles({});
  const borderColor = textStyle.text.color.textBlack.color;
  const style = styles(borderColor);
  const groupedStyles = { ...textStyle, theme, borderColor };

  const { notes, summary } = invoiceDetails;
  // joinStyles
  return (
    <HStack style={style.container}>
      <BoxDiv style={style.noteContainer}>
        {/* Notes */}
        <InvoiceNoteComponent
          title={notes.title}
          notes={invoiceNotesMockedRows}
          style={groupedStyles}
        />
      </BoxDiv>
      <BoxDiv style={style.summaryOuterContainer}>
        {/* Invoice Summary */}
        <BoxDiv style={style.summaryInnerContainer}>
          <InvoiceSummaryComponent summary={summary} style={groupedStyles} />
        </BoxDiv>
        {/* Invoice Signature */}
        <InvoiceSignature />
      </BoxDiv>
    </HStack>
  );
};

const styles = (borderColor: string) => {
  return {
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexGrow: 1,
    },
    noteContainer: {
      maxWidth: "50%",
    },
    summaryOuterContainer: {
      width: "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    summaryInnerContainer: {
      border: `1px solid ${borderColor}`,
    },
  };
};
