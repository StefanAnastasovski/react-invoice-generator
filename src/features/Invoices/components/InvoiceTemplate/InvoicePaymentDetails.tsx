import React from "react";
import { BoxDiv } from "@components/atoms";
import { HStack } from "@components/atoms/Stack";
import { Typography } from "@mui/material";
import { getZipCityCountry } from "@utils/commonUtils";
import { invoiceDetails } from "@features/Invoices/constants/invoiceTemplate";
import { useCommonStyles } from "@hooks/index";
import { joinStyles } from "@utils/styleUtils";
import {
  formattedBilledToData,
  formattedPaymentDetailsData,
} from "@features/Invoices/utils/invoiceUtils";

export const InvoicePaymentDetails = () => {
  const { textStyle } = useCommonStyles({});
  const style = styles();
  const groupedStyles = { ...style, ...textStyle };
  const { billedTo, paymentDetails } = invoiceDetails;

  return (
    <HStack style={style.headerContainer}>
      <BoxDiv>
        {/* Billed To */}
        <RenderDataComponent
          data={formattedBilledToData(billedTo)}
          style={groupedStyles}
        />
      </BoxDiv>
      <BoxDiv>
        {/* Payment Details */}
        <RenderDataComponent
          data={formattedPaymentDetailsData(paymentDetails)}
          style={groupedStyles}
        />
      </BoxDiv>
    </HStack>
  );
};

const RenderDataComponent = ({ data, style }: any) => {
  const { text, titleBottomSpacing, companyIdFieldContainer } = style;
  const {
    fontSize,
    fontWeight: { bold },
    textTransform: { capitalize },
    color: { textBlack },
  } = text;

  const titleStyle = joinStyles([
    fontSize.subtitle,
    bold,
    capitalize,
    textBlack,
  ]);
  const subtitleStyle = joinStyles([
    fontSize.text,
    bold,
    capitalize,
    textBlack,
  ]);
  const companyIdFieldStyle = joinStyles([
    fontSize.text,
    companyIdFieldContainer,
    textBlack,
  ]);
  const textStyle = joinStyles([fontSize.text, textBlack]);

  return (
    <>
      <HStack style={titleBottomSpacing}>
        <Typography style={titleStyle}>{data.title}</Typography>
      </HStack>
      <Typography style={subtitleStyle}>{data.subtitle}</Typography>
      <Typography style={textStyle}>
        {data.address || data.bankAccount}
      </Typography>
      <Typography style={textStyle}>
        {getZipCityCountry({
          zipCode: data.zipCode,
          city: data.city,
          country: data.country,
        })}
      </Typography>
      <HStack>
        <Typography style={companyIdFieldStyle}>{data.cin.title}</Typography>
        <Typography style={textStyle}>{data.cin.value}</Typography>
      </HStack>
      <HStack>
        <Typography style={companyIdFieldStyle}>{data.tin.title}</Typography>
        <Typography style={textStyle}>{data.tin.value}</Typography>
      </HStack>
    </>
  );
};

const styles = () => {
  return {
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    companyIdFieldContainer: {
      width: "50px",
      paddingRight: "4px",
    },
    titleBottomSpacing: {
      marginBottom: "10px",
    },
  };
};
