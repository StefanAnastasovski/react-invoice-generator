import React, { CSSProperties } from "react";
import { Theme } from "@mui/material";
import { joinStyles, setTextFieldItemColorStyle } from "@utils/styleUtils";
import { useTaxable } from "@features/Invoices/hooks/InvoiceTemplate/useTaxable";
import { useSummary } from "@features/Invoices/hooks/InvoiceTemplate/useSummary";
import { invoiceDetails } from "@features/Invoices/constants/invoiceTemplate";
import { calculateSummaryTotalAmount } from "@features/Invoices/utils/invoiceUtils";
import { SummaryItems } from "./SummaryItems";
import { SummaryItemWrapper } from "./SummaryItemWrapper";

type Props = {
  style: CSSProperties;
};

export const InvoiceSummaryComponent = ({ style }: Props) => {
  const { getSummary } = useSummary();
  const { getTaxable } = useTaxable();
  const summary = getSummary();
  const taxable = getTaxable();
  const totalAmount = calculateSummaryTotalAmount(summary, taxable);

  const {
    summary: { summaryTotalAmountTitle, ...restTitles },
  } = invoiceDetails;
  const { summaryTotalContainer, summaryTotalStyle, ...itemStyles } =
    getStyles(style);

  return (
    <>
      {/* Summary Items */}
      <SummaryItems
        titles={restTitles}
        summary={summary}
        style={itemStyles as any}
        totalAmount={totalAmount}
      />

      {/* Total Amount */}
      <SummaryItemWrapper
        style={{
          summaryItemContainer: summaryTotalContainer,
          textStyle: summaryTotalStyle,
        }}
        title={summaryTotalAmountTitle}
        value={totalAmount}
      />
    </>
  );
};

const getStyles = (compStyle: any) => {
  const { text, theme, borderColor } = compStyle;
  const { summaryTotal, ...restStyles } = styles(theme, borderColor);

  const {
    fontSize,
    color: { textBlack },
  } = text;

  const textStyle = joinStyles([fontSize.text, textBlack]);
  const summaryTotalStyle = joinStyles([summaryTotal, textBlack]);

  return {
    textStyle,
    summaryTotalStyle,
    ...restStyles,
  };
};

const styles = (theme: Theme, borderColor: string) => {
  const secDarkColor = theme.palette.secondary.dark;
  return {
    summaryContainer: {
      marginY: 2,
      padding: "0 16px",
      "& > div:not(:last-child)": {
        paddingBottom: 1,
      },
    },
    summaryItemContainer: {
      justifyContent: "space-between",
    },
    summaryTotalContainer: {
      justifyContent: "space-between",
      borderTop: `1px solid ${borderColor}`,
      paddingY: 1,
    },
    summaryTotal: {
      fontSize: "20px",
      paddingLeft: "16px",
      paddingRight: "16px",
    },
    inputLabelPropsStyle: {
      fontSize: 18,
      top: "-10px",
      color: secDarkColor,
      "&.MuiInputLabel-root.Mui-focused, &.MuiInputLabel-root.MuiFormLabel-filled":
        {
          top: 0,
          fontSize: 18,
        },
    },
    inputPropsStyle: {
      minWidth: 150,
      paddingY: 0.75,
      textAlign: "center",
      color: secDarkColor,
    },
    itemColorStyle: setTextFieldItemColorStyle({
      theme: theme,
      mainColor: secDarkColor,
      hoverColor: secDarkColor,
      focusedColor: secDarkColor,
    }),
    textfieldStyle: {
      maxWidth: "225px",
      "& ::placeholder": {
        fontSize: 14,
      },
    },
  };
};
