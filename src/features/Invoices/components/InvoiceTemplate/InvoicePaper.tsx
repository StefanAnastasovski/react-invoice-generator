import React from "react";
import { Box, Divider } from "@mui/material";
import { BoxDiv } from "@components/atoms";
import {
  InvoiceDates,
  InvoiceHeader,
  InvoiceNotesAndTotal,
  InvoicePaymentDetails,
} from "../InvoiceTemplate";
import { CustomDataTable } from "@components/Table";
import { verticalMargins } from "@utils/styleUtils";
import { opacityHexSuffix } from "@constants/opacityHexConstants";

import {
  invoiceDetailsData,
  invoiceTemplateTitles,
} from "@features/Invoices/constants/invoiceTemplate";
import { InvoiceDataTableRows } from "./InvoiceDataTableRows";

const INVOICE_TEMPLTATE_CONFIG = {
  titles: invoiceTemplateTitles,
  tableData: invoiceDetailsData,
  tableComponent: InvoiceDataTableRows,
  shouldRenderEmptyRows: false,
};

export const InvoicePaper = ({ invoiceRef }: { invoiceRef: any }) => {
  const style = styles();

  const customDataTableStyle = {
    tableHead: style.tableHead,
    table: style.table,
    tableBody: {},
  };

  return (
    <BoxDiv style={style.container}>
      <Box
        ref={invoiceRef}
        sx={style.invoiceContainer}
        className="invoice-print-container"
      >
        <InvoiceHeader />
        <Divider sx={style.divider} />
        <InvoicePaymentDetails />
        <InvoiceDates />

        <CustomDataTable
          config={INVOICE_TEMPLTATE_CONFIG}
          style={customDataTableStyle}
        />

        <InvoiceNotesAndTotal />
      </Box>
    </BoxDiv>
  );
};

const styles = () => {
  const backgroundColor = `#FFFFFF`;
  const containerBorderColor = `#FFFFFF`;
  const tableBackgroundColor = `#2A8EB5${opacityHexSuffix[40]}`;
  const tableBorderColor = "black";

  return {
    container: {
      border: `0.1em solid ${containerBorderColor}`,
      borderRadius: "5px",
      margin: "24px auto",
      backgroundColor: backgroundColor,
      minWidth: 800,
    },
    invoiceContainer: {
      display: "flex",
      flexDirection: "column",
      padding: "24px",
      minWidth: 800,
    },
    divider: verticalMargins(2),
    tableHead: {
      backgroundColor: tableBackgroundColor,
      textAlign: "center",
      fontWeight: "800",
      color: "black",
    },
    table: {
      width: "100%",
      backgroundColor: backgroundColor,
      boxShadow: "none",
      border: `1px solid ${tableBorderColor}`,
      borderRadius: 0,
    },
  };
};
