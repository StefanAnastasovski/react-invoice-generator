export interface InvoiceCellProps {
  item: { [x: string]: string };
  key: string;
}

export type InvoiceStyleProps = {
  borderColor?: string;
};

export type Note = {
  id: string | number;
  noteId: string;
  note: string;
};

export type NoteId = string | number;

export type NEW_NOTE_PROPS = {
  value: string;
};
