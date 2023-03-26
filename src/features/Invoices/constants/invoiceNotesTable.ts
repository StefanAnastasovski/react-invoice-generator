export const INVOICE_NOTES_TABLE_COL_SPAN = 3;

export const invoicesNotesColumns = ["Note", "Actions"];

export const INVOICE_NOTES_CELL_WIDTH: { [x: string]: string } = {
  "note-id": "50px",
  "invoice-notes": "300px",
  actions: "100px",
};

export const INVOICE_NOTES_FIELD_MAP: { [x: string]: string } = {
  id: "id",
  "note-id": "noteId",
  note: "note",
};

export const elementKeys: { [x: string]: string } = {
  id: "id",
  noteId: "note-id",
  note: "note",
};

function createData({ id, noteId, note }: any) {
  return {
    id: id,
    "note-id": noteId,
    note: note,
  };
}

export const invoiceNotesMockedRows = [
  createData({
    id: "note-1",
    noteId: "1",
    note: "Note Row #1",
  }),
  createData({
    id: "note-2",
    noteId: "2",
    note: "LONG NOTE A Note Row #2, LONG NOTE A Note Row #2, LONG NOTE A Note Row #2",
  }),
  createData({
    id: "note-3",
    noteId: "3",
    note: "Note Row #3",
  }),
  createData({
    id: "note-4",
    noteId: "4",
    note: "Note Row #4",
  }),
  createData({
    id: "note-5",
    noteId: "5",
    note: "Note Row #5",
  }),
  createData({
    id: "note-6",
    noteId: "6",
    note: "Note Row #6",
  }),
];
