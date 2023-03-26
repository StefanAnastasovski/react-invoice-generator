export const invoiceGeneralSettingsFields = [
  {
    id: "igs-1",
    title: "Invoice Settings",
    items: [
      {
        id: "igsi-1",
        label: "Reset the number of the invoice at the end of the year.",
        name: "reset-number",
        placeholder: undefined,
        type: "checkbox",
        dbKey: "resetInvoiceNumber",
        isRequired: false,
        items: null,
      },
      {
        id: "igsi-2",
        label: "Currency",
        name: "currency",
        placeholder: "USD (or $)",
        type: "text",
        dbKey: "currency",
        isRequired: true,
        items: null,
      },
      {
        id: "igsi-3",
        label: "Prefix",
        name: "prefix",
        placeholder: "INV",
        type: "text",
        dbKey: "prefix",
        isRequired: true,
        items: null,
      },
      {
        id: "igsi-4",
        label: "Default Digital Name",
        name: "digital-name",
        placeholder: "Stefan Anastasovski",
        type: "text",
        dbKey: "digitalName",
        isRequired: true,
        items: null,
      },
      // TODO: add digital signature image
    ],
  },
];

type initialValues = {
  currency: string;
  prefix: string;
  "digital-name": string;
  "reset-number": boolean;
};

export const INVOICE_SETTINGS_INITIAL_VALUE: initialValues = {
  currency: "",
  prefix: "",
  "digital-name": "",
  "reset-number": false,
};
