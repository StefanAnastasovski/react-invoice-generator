export const invoiceNoteFields = [
  {
    id: "innotes-1",
    title: "",
    items: [
      {
        id: "invn-1",
        label: "Invoice Note",
        name: "invoice-note",
        placeholder: "Add Notes",
        type: "textarea",
        dbKey: "invoiceNote",
        isRequired: true,
        items: null,
      },
    ],
  },
];

type initialValues = { "invoice-note": string };

export const INVOICE_NOTES_INITIAL_VALUE: initialValues = {
  "invoice-note": "",
};
