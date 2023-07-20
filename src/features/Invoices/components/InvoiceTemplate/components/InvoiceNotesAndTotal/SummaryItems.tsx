import React from "react";
import { BoxDiv } from "@components/atoms";
import { InvoiceSummaryType } from "types/InvoiceProps";
import { StyleCustomProps } from "types/StyleProps";
import { TaxableComponent } from "./TaxableComponent";
import { SummaryItemWrapper } from "./SummaryItemWrapper";

type TitlesType = {
  summaryTaxableTitle: string;
  summarySubtotalTitle: string;
  summaryDiscountTitle: string;
};

type SummaryItemsProps = {
  titles: TitlesType;
  summary: InvoiceSummaryType;
  totalAmount: number;
  style: StyleCustomProps;
};

export const SummaryItems = ({
  titles,
  summary,
  totalAmount,
  style,
}: SummaryItemsProps) => {
  const { summaryTaxableTitle, summarySubtotalTitle, summaryDiscountTitle } =
    titles;

  const {
    textStyle,
    summaryContainer,
    summaryItemContainer,
    ...textFieldStyle
  } = style;

  return (
    <BoxDiv style={summaryContainer}>
      <TaxableComponent
        title={summaryTaxableTitle}
        totalAmount={totalAmount}
        style={{ summaryItemContainer, textStyle, textFieldStyle } as any}
      />

      <SummaryItemWrapper
        style={{ summaryItemContainer, textStyle }}
        title={summaryDiscountTitle}
        value={summary?.discount}
      />

      <SummaryItemWrapper
        style={{ summaryItemContainer, textStyle }}
        title={summarySubtotalTitle}
        value={summary?.subtotal}
      />
    </BoxDiv>
  );
};
