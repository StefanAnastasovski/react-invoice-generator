import React from "react";
import { PageWrapper } from "@components/Page";
import { TableComponentWrapper } from "@components/Table/TableComponentWrapper";

type InvoiceNotesListProps = {
  pageTitle: string;
  config: any;
  // TODO: remove after testing
  data: any;
  setData: any;
  handleCustomEdit: any;
};

export const InvoiceNotesList = ({
  pageTitle,
  config,
  // TODO: remove after testing
  data,
  setData,
  handleCustomEdit,
}: InvoiceNotesListProps) => {
  return (
    <>
      <PageWrapper pageTitle={pageTitle}>
        <TableComponentWrapper
          isNew={false}
          isEdit={false}
          config={config}
          // TODO: remove after testing
          data={data}
          setData={setData}
          isCheckboxEnabled={false}
          isIdEnabled={true}
          handleCustomEdit={handleCustomEdit}
        />
      </PageWrapper>
    </>
  );
};
