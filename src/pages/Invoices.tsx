import React from "react";
import { TablePageProps } from "types/components/TableProps";
import { tableConfig } from "@config/tableConfig";
import { PageWrapper } from "@components/Page";
import { TableComponentWrapper } from "@components/Table/TableComponentWrapper";
import { InvoiceTemplate } from "@features/Invoices/components/InvoiceTemplate";

interface InvoicesPageProps extends TablePageProps {
  isInvoiceTemplate?: boolean;
}

export const Invoices = ({
  isEdit = false,
  isNew = false,
  isInvoiceTemplate = false,
}: InvoicesPageProps) => {
  const {
    invoices: { pageTitle },
    invoices: config,
  } = tableConfig;

  // render invoice details template page
  if (isInvoiceTemplate) {
    return <InvoiceTemplate />;
  }

  return (
    <PageWrapper pageTitle={pageTitle}>
      <TableComponentWrapper
        isNew={isNew}
        isEdit={isEdit}
        config={config}
        isCheckboxEnabled={false}
      />
    </PageWrapper>
  );
};
