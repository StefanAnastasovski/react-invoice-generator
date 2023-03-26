export const getFormattedInvoiceNotesData = ({ details }: any) => {
  const { id, "note-id": noteId, note } = details;

  const rowId = id;

  const formattedData: any = [{ "note-id": noteId }, { note: note }];

  return {
    formattedData,
    rowId,
    collapseData: [],
  };
};
