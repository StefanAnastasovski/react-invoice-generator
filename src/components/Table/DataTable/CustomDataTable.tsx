import React from "react";
import { BoxDiv } from "@components/atoms";
import { DataTableWrapper } from "./DataTableWrapper";
import {
  invoiceDetailsData,
  invoiceTemplateTitles,
} from "@features/Invoices/constants/invoiceTemplate";

export const CustomDataTable = ({ style }: any) => {
  return (
    <BoxDiv style={styles().container}>
      <DataTableWrapper
        titles={invoiceTemplateTitles}
        tableData={invoiceDetailsData}
        style={style}
      />
    </BoxDiv>
  );
};

const styles = () => {
  return {
    container: {
      marginBottom: 6,
    },
  };
};
