import React from "react";
import { Typography } from "@mui/material";
import { HStack } from "@components/atoms/Stack";
import { useCommonStyles } from "@hooks/index";
import { joinStyles } from "@utils/styleUtils";
import { invoiceDetails } from "@features/Invoices/constants/invoiceTemplate";
import { opacityHexSuffix } from "@constants/opacityHexConstants";

export const InvoiceDates = () => {
  const { textStyle } = useCommonStyles({});
  const {
    text: {
      fontSize,
      fontWeight: { bold },
      color: { textBlack },
    },
  } = textStyle;
  const style = styles();

  const {
    invoiceDates: { issueDate, dueDate },
    invoicePO,
  } = invoiceDetails;
  const titleStyle = joinStyles([
    fontSize.text,
    bold,
    style.itemStyle,
    style.textColor,
    textBlack,
  ]);
  const valueStyle = joinStyles([
    fontSize.text,
    bold,
    style.textColor,
    textBlack,
  ]);

  return (
    <HStack style={style.container}>
      <HStack>
        <Typography style={titleStyle}>{issueDate.title}</Typography>
        <Typography style={valueStyle}>{issueDate.value}</Typography>
      </HStack>
      <HStack>
        <Typography style={titleStyle}>{dueDate.title}</Typography>
        <Typography style={valueStyle}>{dueDate.value}</Typography>
      </HStack>
      <HStack>
        <Typography style={titleStyle}>{invoicePO.title}</Typography>
        <Typography style={valueStyle}>{invoicePO.value}</Typography>
      </HStack>
    </HStack>
  );
};

const styles = () => {
  const textColor = "#FFFFFF";
  const backgroundColor = `#2A8EB5${opacityHexSuffix[40]}`;
  return {
    container: {
      justifyContent: "space-between",
      borderRadius: "5px",
      padding: "24px",
      margin: "20px 0",
      backgroundColor: backgroundColor,
    },
    textColor: {
      color: textColor,
    },
    itemStyle: {
      paddingRight: "4px",
    },
  };
};
