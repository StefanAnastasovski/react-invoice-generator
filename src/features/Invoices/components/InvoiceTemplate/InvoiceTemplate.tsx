import React, { useRef } from "react";
import { Box, Button, Divider } from "@mui/material";
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
// import { useReactToPrint } from "react-to-print";

// CTAs: Print, Download, Send
// react-to-print -> Print
// html2canvas, jsPDF, react-pdf -> Download
// https://react-pdf.org/
// react-pdf -> Display PDF

// const PAGE_SIZE = "A4";

export const InvoiceTemplate = () => {
  const style = styles();
  const invoiceRef = useRef(null);
  // TODO: create dynamic docTitle

  const handlePrint =
    // useReactToPrint({
    //   content: () => invoiceRef?.current,
    //   // documentTitle: "emp-data", // Invoice-{CustomerName}_{currentDate}_{PONumber}
    //   pageStyle: printStyle,
    //   onBeforeGetContent: () => {
    //     console.log("Change it here");
    //   },
    // });
    () => {
      console.log("Print");
      console.log(invoiceRef);
    };
  const customDataTableStyle = {
    tableHead: style.tableHead,
    table: style.table,
    tableBody: {},
  };

  return (
    <>
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

          <CustomDataTable style={customDataTableStyle} />

          <InvoiceNotesAndTotal />
        </Box>
      </BoxDiv>

      <Button onClick={handlePrint}>PRINT THIS</Button>
    </>
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
      margin: "120px auto",
      backgroundColor: backgroundColor,
    },
    invoiceContainer: {
      display: "flex",
      flexDirection: "column",
      padding: "24px",
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

// const printStyle = `
// @page { size: ${PAGE_SIZE};  margin: 0mm; }
// @media print {
//   thead tr th:not(:last-child) {
//     border-right: 1px solid black !important;
//   }
//   div.invoice-print-container {
//     height: 100vh !important; // fit for 1 page and it depends on no. of pages
//     padding: 24px 24px !important;
//   }
//   div.invoice-signature-container {
//     flex: 1 !important;
//   }
//   p, td, th{
//     color: black !important;
//     border-color: black !important;
//     font-size: 12px !important;
//   }
// }`;
