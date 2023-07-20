import { ChangeEvent, useState } from "react";
import { Typography } from "@mui/material";
import { joinStyles } from "@utils/styleUtils";
import { HStack } from "@components/atoms";
import { ReusableEditButton } from "@components/ReusableButtons";
import { ReusableTextField } from "@components/ReusableTextField";
import { useInvoiceNumber } from "@features/Invoices/hooks/InvoiceTemplate/useInvoiceNumber";

const textFieldItem = {
  id: "invoice-number",
  name: "invoice-number",
  type: "text",
  label: "Invoice Number",
  placeholder: "OLD230001",
  isRequired: true,
  icon: null,
  isIcon: true,
  ariaLabel: "toggle new invoice number",
};

export const InvoiceTitleComponent = ({
  title,
  invoiceNumberTitle,
  style: compStyle,
}: any) => {
  const { style, titleStyle, subtitleStyle } = getStyles(compStyle);
  const [canEditInvoiceNumber, setCanEditInvoiceNumber] = useState(false);
  const [invoiceNumberState, setInvoiceNumberState] = useState("");
  const { getInvoiceNumber, setInvoiceNumber } = useInvoiceNumber();

  const invoiceNumberValue = `${invoiceNumberTitle}: ${getInvoiceNumber()}`;

  const handleEditInvoiceNumber = () => {
    setCanEditInvoiceNumber(!canEditInvoiceNumber);
  };

  const handleAddInvoiceNumber = () => {
    setInvoiceNumber(invoiceNumberState);
    // TODO: add logic to update the invoice number here
    setCanEditInvoiceNumber(false);
  };

  const onChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInvoiceNumberState(event.target.value);
  };

  return (
    <>
      <Typography style={titleStyle}>{title}</Typography>
      {/* TODO: ADD RESET BUTTON TO RESET INVOICENUMBER */}
      <HStack>
        {/* Show latest Invoice Number or add it manually*/}
        <Typography style={subtitleStyle}>{invoiceNumberValue}</Typography>
        {!canEditInvoiceNumber && (
          <ReusableEditButton
            handleEdit={handleEditInvoiceNumber}
            style={style}
          />
        )}
      </HStack>

      {/* TODO: add correct values */}
      {canEditInvoiceNumber && (
        <ReusableTextField
          item={textFieldItem}
          onClickIcon={handleAddInvoiceNumber}
          onChange={onChange}
        />
      )}
    </>
  );
};

const styles = () => {
  return {
    container: {
      alignItems: "center",
    },
  };
};

const getStyles = (commonStyles: any) => {
  const { text, title: titleColor } = commonStyles;
  const style = styles();

  const {
    fontSize,
    fontWeight: { bold },
    letterSpacing,
    textTransform: { uppercase },
    color: { textBlack },
  } = text;

  const titleStyle = joinStyles([
    fontSize.title,
    bold,
    uppercase,
    letterSpacing[1],
    titleColor,
  ]);
  const subtitleStyle = joinStyles([
    fontSize.subtitle,
    letterSpacing[1],
    textBlack,
  ]);

  return {
    style,
    titleStyle,
    subtitleStyle,
  };
};
