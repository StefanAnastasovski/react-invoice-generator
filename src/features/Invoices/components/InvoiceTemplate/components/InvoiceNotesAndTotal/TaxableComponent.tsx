import React, { ChangeEvent, useEffect, useState } from "react";
import { ReusableTextField } from "@components/ReusableTextField";
import { useTaxable } from "@features/Invoices/hooks/InvoiceTemplate/useTaxable";
import { calculateSummaryTaxable } from "@features/Invoices/utils/invoiceUtils";
import { StyleCustomProps } from "types/StyleProps";
import { SummaryItemWrapper } from "./SummaryItemWrapper";

const TAX_NUMBER_FIELD = {
  id: "taxable",
  name: "taxable",
  type: "number",
  label: "Taxable",
  placeholder: "Enter a Tax 0 - 100 (%)",
  isIcon: true,
  min: 0,
  max: 100,
};

type TaxableComponentProps = {
  title: string;
  totalAmount: number;
  style: StyleCustomProps;
};

export const TaxableComponent = ({
  title,
  totalAmount,
  style,
}: TaxableComponentProps) => {
  const { summaryItemContainer, textStyle, textFieldStyle } = style;

  const [isEditable, setIsEditable] = useState(false);
  const [taxableState, setTaxableState] = useState(0);
  const [taxableAmount, setTaxableAmount] = useState(0);
  const { getTaxable, setTaxable } = useTaxable();

  useEffect(() => {
    const taxable = getTaxable();
    if (!taxable) {
      return;
    }

    const taxableAmount = calculateSummaryTaxable(totalAmount, taxable);
    setTaxableAmount(taxableAmount);
    setTaxableState(taxable);
    setIsEditable(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalAmount]);

  const handleAddTax = () => {
    const taxableAmount = calculateSummaryTaxable(totalAmount, taxableState);
    setTaxableAmount(taxableAmount);
    setTaxable(taxableState);
    setIsEditable(false);
  };

  const onChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = +event.target.value;
    if (value > 100 || value < 0) {
      return;
    }
    setTaxableState(+event.target.value);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <>
      {isEditable ? (
        <ReusableTextField
          item={{ ...TAX_NUMBER_FIELD, value: taxableState }}
          style={textFieldStyle}
          onClickIcon={handleAddTax}
          onChange={onChange}
        />
      ) : (
        <SummaryItemWrapper
          style={{ summaryItemContainer, textStyle }}
          title={title}
          value={taxableAmount}
          isEditEnabled
          handleEdit={handleEdit}
        />
      )}
    </>
  );
};
