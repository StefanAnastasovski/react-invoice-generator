export const invoiceTaxSettingsFields = [
  {
    id: "its-1",
    title: "Tax Settings",
    items: [
      {
        id: "itsid-1",
        label: "Enable Tax",
        name: "tax-active",
        placeholder: undefined,
        type: "checkbox",
        dbKey: "isTaxEnabled",
        isRequired: false,
        items: null,
      },
      {
        id: "itsid-2",
        label: "Tax Percentage(%)",
        name: "tax-percentage",
        placeholder: "Enter a number from 0 to 100 (%).",
        type: "text",
        dbKey: "taxPercentage",
        isRequired: true,
        items: null,
      },
    ],
  },
];

type initialValues = {
  "tax-percentage": string;
  "tax-active": boolean;
};

export const INVOICE_TAX_SETTINGS_INITIAL_VALUE: initialValues = {
  "tax-percentage": "",
  "tax-active": false,
};
