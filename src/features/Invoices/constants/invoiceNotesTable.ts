export const INVOICE_NOTES_TABLE_COL_SPAN = 3;

export const invoicesNotesColumns = ["Note", "Actions"];

export const INVOICE_NOTES_CELL_WIDTH: { [x: string]: string } = {
  noteId: "50px",
  "invoice-notes": "300px",
  actions: "100px",
};

export const INVOICE_NOTES_FIELD_MAP: { [x: string]: string } = {
  id: "id",
  noteId: "noteId",
  note: "note",
};

export const elementKeys: { [x: string]: string } = {
  id: "id",
  noteId: "noteId",
  note: "note",
};

function createData({ id, noteId, note }: any) {
  return {
    id: id,
    noteId: noteId,
    note: note,
  };
}

export const invoiceNotesMockedRows = [
  createData({
    id: "note-1",
    noteId: "1",
    note: "NOTE #1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }),
  createData({
    id: "note-2",
    noteId: "2",
    note: "NOTE #2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget rhoncus lorem. Duis dictum diam",
  }),
  createData({
    id: "note-3",
    noteId: "3",
    note: "NOTE #3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum vehicula diam ut fringilla. Aenean sit amet turpis elementum, accumsan.",
  }),
  createData({
    id: "note-4",
    noteId: "4",
    note: "NOTE #4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod.",
  }),
  createData({
    id: "note-5",
    noteId: "5",
    note: "NOTE #5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus sapien odio, ut.",
  }),
  createData({
    id: "note-6",
    noteId: "6",
    note: "NOTE #6: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }),
];
