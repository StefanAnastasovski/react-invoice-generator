import React from "react";
import { Typography } from "@mui/material";
import { BoxDiv } from "@components/atoms";
import { HStack } from "@components/atoms/Stack";
import { useCommonStyles } from "@hooks/index";
import { joinStyles } from "@utils/styleUtils";
import { invoiceDetails } from "@features/Invoices/constants/invoiceTemplate";
import { InvoiceStyleProps } from "@features/Invoices/types/InvoiceTypes";
import { InvoiceSignature } from "./InvoiceSignature";

export const InvoiceNotesAndTotal = () => {
  const { textStyle } = useCommonStyles({});
  const style = styles({ borderColor: textStyle.text.color.textBlack.color });
  const groupedStyles = { ...style, ...textStyle };

  const { notes, summary } = invoiceDetails;
  // joinStyles
  return (
    <HStack style={style.container}>
      <BoxDiv style={style.noteContainer}>
        {/* Notes */}
        <InvoiceNoteComponent
          title={notes.title}
          notes={notesData}
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

const InvoiceSummaryComponent = ({ summary, style }: any) => {
  const { text, summaryItemContainer, summaryTotalContainer, summaryTotal } =
    style;
  const {
    fontSize,
    color: { textBlack },
  } = text;
  const textStyle = joinStyles([fontSize.text, textBlack]);
  const summaryTotalStyle = joinStyles([summaryTotal, textBlack]);

  return (
    <>
      {/* Summary Items*/}
      {summary.items.map((item: any) => {
        return (
          <HStack key={item.id} style={summaryItemContainer}>
            <Typography style={textStyle}>{item.title}</Typography>
            <Typography style={textStyle}>{`$${item.value}`}</Typography>
          </HStack>
        );
      })}

      <HStack style={summaryTotalContainer}>
        <Typography style={summaryTotalStyle}>{summary.total.title}</Typography>
        <Typography
          style={summaryTotalStyle}
        >{`$${summary.total.value}`}</Typography>
      </HStack>
    </>
  );
};

const InvoiceNoteComponent = ({ title, notes, style }: any) => {
  const { text } = style;
  const {
    fontSize,
    fontWeight: { bold },
    textTransform: { capitalize },
    color: { textBlack },
  } = text;
  const noteTitle = joinStyles([
    fontSize.subtitle,
    bold,
    capitalize,
    textBlack,
  ]);
  const textStyle = joinStyles([fontSize.text, textBlack]);
  return (
    <>
      <Typography style={noteTitle}>{title}</Typography>
      <BoxDiv>
        {notes.map((item: any, index: number) => {
          const text = `${index + 1}. ${item.note}`;
          return (
            <Typography key={`${item.id}${index}`} style={textStyle}>
              {text}
            </Typography>
          );
        })}
      </BoxDiv>
    </>
  );
};

const styles = ({ borderColor }: InvoiceStyleProps) => {
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
      padding: "8px 0",
    },
    summaryItemContainer: {
      justifyContent: "space-between",
      marginBottom: "8px",
      padding: "0 16px",
    },
    summaryTotalContainer: {
      justifyContent: "space-between",
      borderTop: `1px solid ${borderColor}`,
      paddingTop: "8px",
    },
    summaryTotal: {
      fontSize: "20px",
      paddingLeft: "16px",
      paddingRight: "16px",
    },
  };
};

const notesData = [
  {
    id: "notes-1",
    note: `Enter customer notes or any other details, 
    enter customer notes or any other details, 
    enter customer notes or any other details`,
  },
  { id: "notes-2", note: "Enter customer notes or any other details" },
  { id: "notes-3", note: "Enter customer notes or any other details" },
  { id: "notes-4", note: "Enter customer notes or any other details" },
  { id: "notes-5", note: "Enter customer notes or any other details" },
];
