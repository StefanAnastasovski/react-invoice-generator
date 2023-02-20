import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { savePDF } from "@progress/kendo-react-pdf";
import { BoxFlex, CustomButton } from "@components/atoms";

import { horizontalPaddings, joinStyles } from "@utils/styleUtils";
import { PRINT_PAGE_SIZE } from "@features/Invoices/constants/constants";
import {
  addStyling,
  getPrintStyle,
  resetStyling,
} from "@features/Invoices/utils/invoiceUtils";
import { useCommonStyles } from "@hooks/index";
import {
  CTAs,
  invoiceDetails,
} from "@features/Invoices/constants/invoiceTemplate";
import { InvoicePaper } from "./InvoicePaper";
import moment from "moment";

// TODO: CTAs: Send
// TODO: Add file(doc) name

export const InvoiceTemplate = () => {
  const { buttonStyle } = useCommonStyles({});
  const style = styles();
  // TODO: replace with props
  const { invoiceNumber, billedTo } = invoiceDetails;
  const invoiceRef = useRef<HTMLElement | null>(null);

  const date = moment().format("MM-DD-YYYY");
  const docTitle = `Invoice-${billedTo.customer.company}_${date}_${invoiceNumber.value}`;

  const handlePrint = useReactToPrint({
    content: () => invoiceRef?.current,
    documentTitle: docTitle,
    pageStyle: getPrintStyle({ pageSize: PRINT_PAGE_SIZE.auto }),
  });

  const handleExportPdf = () => {
    addStyling();
    savePDF(invoiceRef?.current as any, {
      paperSize: PRINT_PAGE_SIZE.auto,
      margin: "10mm",
    });
    resetStyling();
  };

  return (
    <>
      <BoxFlex style={style.ctaContainer}>
        <CustomButton
          isPrimary
          style={joinStyles([
            buttonStyle.primaryButton,
            style.button,
            style.leftButton,
          ])}
          onHoverStyle={buttonStyle.primaryButtonOnHover}
          onClick={handlePrint}
        >
          {CTAs.print}
        </CustomButton>
        <CustomButton
          isPrimary={false}
          style={style.button}
          onHoverStyle={buttonStyle.secondaryButtonOnHover}
          onClick={handleExportPdf}
        >
          {CTAs.download}
        </CustomButton>
      </BoxFlex>

      <InvoicePaper invoiceRef={invoiceRef} />
    </>
  );
};

const styles = () => {
  const paddingX = horizontalPaddings(0);
  return {
    ctaContainer: {
      justifyContent: "flex-end",
      marginTop: 5,
    },
    button: {
      width: "200px",
      ...paddingX,
    },
    leftButton: {
      marginRight: 2,
    },
  };
};
