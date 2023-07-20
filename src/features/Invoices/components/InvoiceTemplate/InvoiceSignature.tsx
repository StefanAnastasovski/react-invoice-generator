import React from "react";
import { BoxDiv } from "@components/atoms";
import { VStack } from "@components/atoms/Stack";
import { Typography } from "@mui/material";
import { joinStyles } from "@utils/styleUtils";
import { invoiceDetails } from "@features/Invoices/constants/invoiceTemplate";
import { useCommonStyles } from "@hooks/index";
import { InvoiceStyleProps } from "@features/Invoices/types/InvoiceTypes";
import { useAuthorizedSignature } from "@features/Invoices/hooks/InvoiceTemplate/useAuthorizedSignature";

export const InvoiceSignature = () => {
  const { textStyle } = useCommonStyles({});
  const {
    style,
    signatureFieldStyle,
    authorizedSignatureStyle,
    signPersonStyle,
  } = getStyles(textStyle);
  const { signaturePlaceTitle, authorizedSignatureTitle } = invoiceDetails;

  const { getAuthorizedSignature } = useAuthorizedSignature();
  const authorizedPerson = getAuthorizedSignature();

  return (
    <BoxDiv style={style.container} classNames="invoice-signature-container">
      <VStack>
        <Typography style={signatureFieldStyle}>
          {signaturePlaceTitle}
        </Typography>
        <Typography style={authorizedSignatureStyle}>
          {authorizedSignatureTitle}
        </Typography>
        <Typography style={signPersonStyle}>{authorizedPerson}</Typography>
      </VStack>
    </BoxDiv>
  );
};

const getStyles = (compStyle: any) => {
  const {
    text: {
      fontSize,
      textAlign: { textCenter },
      textTransform: { uppercase },
      color: { textBlack },
    },
  } = compStyle;
  const style = styles({ borderColor: textBlack.color });

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
  const signPersonStyle = joinStyles([
    fontSize.subtitle,
    style.authorizedFieldContainer,
    textCenter,
    style.signPersonStyle,
    textBlack,
  ]);
  return {
    style,
    signatureFieldStyle,
    authorizedSignatureStyle,
    signPersonStyle,
  };
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
