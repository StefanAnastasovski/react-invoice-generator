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
    signature: { signaturePlace, authorizedSignature, authorizedPerson },
  } = invoiceDetails;

  const signatureFieldStyle = joinStyles([
    style.signatureStyle,
    textCenter,
    uppercase,
    textBlack,
  ]);
  const authorizedSignatureStyle = joinStyles([
    style.authorizedFieldContainer,
    textCenter,
    textBlack,
  ]);
  const SignPersonStyle = joinStyles([
    fontSize.subtitle,
    style.authorizedFieldContainer,
    textCenter,
    style.signPersonStyle,
    textBlack,
  ]);

  return (
    <BoxDiv style={style.container} classNames="invoice-signature-container">
      <VStack>
        <Typography style={signatureFieldStyle}>{signaturePlace}</Typography>
        <Typography style={authorizedSignatureStyle}>
          {authorizedSignature}
        </Typography>
        <Typography style={SignPersonStyle}>{authorizedPerson}</Typography>
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
    authorizedFieldContainer: {
      width: "250px",
    },
    signPersonStyle: {
      borderBottom: `1px solid ${borderColor}`,
    },
  };
};
