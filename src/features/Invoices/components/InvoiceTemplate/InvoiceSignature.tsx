import React from "react";
import { BoxDiv } from "@components/atoms";
import { VStack } from "@components/atoms/Stack";
import { Typography } from "@mui/material";
import { joinStyles } from "@utils/styleUtils";
import { invoiceDetails } from "@features/Invoices/constants/invoiceTemplate";
import { useCommonStyles } from "@hooks/index";
import { InvoiceStyleProps } from "@features/Invoices/types/InvoiceTypes";

export const InvoiceSignature = () => {
  const { textStyle } = useCommonStyles({});
  const {
    text: {
      fontSize,
      textAlign: { textCenter },
      textTransform: { uppercase },
      color: { textBlack },
    },
  } = textStyle;
  const style = styles({ borderColor: textBlack.color });

  const {
    signature: { signaturePlace, authorisedSign, authorisedPerson },
  } = invoiceDetails;

  const signatureFieldStyle = joinStyles([
    style.signatureStyle,
    textCenter,
    uppercase,
    textBlack,
  ]);
  const authorisedSignStyle = joinStyles([
    style.authorisedFieldContainer,
    textCenter,
    textBlack,
  ]);
  const SignPersonStyle = joinStyles([
    fontSize.subtitle,
    style.authorisedFieldContainer,
    textCenter,
    style.signPersonStyle,
    textBlack,
  ]);

  return (
    <BoxDiv style={style.container} classNames="invoice-signature-container">
      <VStack>
        <Typography style={signatureFieldStyle}>{signaturePlace}</Typography>
        <Typography style={authorisedSignStyle}>{authorisedSign}</Typography>
        <Typography style={SignPersonStyle}>{authorisedPerson}</Typography>
      </VStack>
    </BoxDiv>
  );
};

const styles = ({ borderColor }: InvoiceStyleProps) => {
  return {
    container: {
      marginTop: 6,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    textCenter: {
      textAlign: "center",
    },
    signatureStyle: {
      paddingBottom: "40px",
    },
    authorisedFieldContainer: {
      width: "250px",
    },
    signPersonStyle: {
      borderBottom: `1px solid ${borderColor}`,
    },
  };
};
