import React from "react";
import { TablePageProps } from "types/components/TableProps";
import { tableConfig } from "@config/tableConfig";
import { PageWrapper } from "@components/Page";
import { TableComponentWrapper } from "@components/Table/TableComponentWrapper";

export const Customers = ({
  isEdit = false,
  isNew = false,
}: TablePageProps) => {
  const {
    customers: { pageTitle },
    customers: config,
  } = tableConfig;

  return (
    <PageWrapper pageTitle={pageTitle}>
      <TableComponentWrapper isNew={isNew} isEdit={isEdit} config={config} />
    </PageWrapper>
  );
};
