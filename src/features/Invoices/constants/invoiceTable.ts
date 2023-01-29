import { TABLE_COMMON_CELL_WIDTH } from "@constants/table";

export const invoicesColumns = [
  "Company",
  "Invoice",
  "Amount",
  "Issued",
  "Due",
  "Status",
  "Actions",
];

export const INVOICE_CELL_WIDTH: { [x: string]: string } = {
  "company-name": "300px",
  "invoice-id": "50px",
  "invoice-date-of-issue": "95px",
  "invoice-due-date": "95px",
  "invoice-status": "50px",
  "invoice-amount": "50px",
  ...TABLE_COMMON_CELL_WIDTH,
}; // TODO: change key names

export const INVOICE_FIELD_MAP: { [x: string]: string } = {
  "invoice-id": "invoiceId",
  "invoice-date-of-issue": "dateOfIssue",
  "invoice-due-date": "dueDate",
  "invoice-status": "status",
  "invoice-amount": "amount",
  "invoice-subtotal": "subtotal",
  "invoice-taxes": "taxes",
  "invoice-company-info": "companyInfo",
};

export const elementKeys: { [x: string]: string } = {
  invoiceId: "invoice-id",
  invoiceStatus: "invoice-status",
};

function createData({
  invoiceId,
  dateOfIssue,
  dueDate,
  status,
  amount,
  subtotal,
  taxes,
  companyInfo,
}: any) {
  return {
    "invoice-id": invoiceId,
    "invoice-date-of-issue": dateOfIssue,
    "invoice-due-date": dueDate,
    "invoice-status": status,
    "invoice-amount": amount,
    "invoice-subtotal": subtotal,
    "invoice-taxes": taxes,
    "invoice-company-info": companyInfo,
  };
}
// status: "Paid" | "Pending" | "Canceled";
// date: DD/MM/YYYY

export const invoiceMockedRows = [
  createData({
    invoiceId: "INV-0001",
    dateOfIssue: "27/01/2023",
    dueDate: "31/01/2023",
    status: "Paid",
    amount: "55.53",
    subtotal: "50.00",
    taxes: "5.50",
    companyInfo: {
      "company-name": "Awesome Company, LLC",
      edb: "1111111111111",
      embs: "111111",
      country: "Macedonia",
      "state-region": "Kumanovo",
      "zip-code": "1300",
      address: "st. JNA no. 64",
      email: "testemail@example.com",
      "phone-number": "+38977888888",
    },
  }),
  createData({
    invoiceId: "INV-0002",
    dateOfIssue: "27/01/2023",
    dueDate: "31/01/2023",
    status: "Pending",
    amount: "55.53",
    subtotal: "50.00",
    taxes: "5.50",
    companyInfo: {
      "company-name": "Awesome Company 4, LLC",
      edb: "1111111111111",
      embs: "111111",
      country: "Macedonia",
      "state-region": "Kumanovo",
      "zip-code": "1300",
      address: "st. JNA no. 64",
      email: "testemail@example.com",
      "phone-number": "+38977888888",
    },
  }),
  createData({
    invoiceId: "INV-0003",
    dateOfIssue: "27/01/2023",
    dueDate: "31/01/2023",
    status: "Pending",
    amount: "55.53",
    subtotal: "50.00",
    taxes: "5.50",
    companyInfo: {
      "company-name": "Awesome Company 2, LLC",
      edb: "1111111111111",
      embs: "111111",
      country: "Macedonia",
      "state-region": "Kumanovo",
      "zip-code": "1300",
      address: "st. JNA no. 64",
      email: "testemail@example.com",
      "phone-number": "+38977888888",
    },
  }),
  createData({
    invoiceId: "INV-0004",
    dateOfIssue: "27/01/2023",
    dueDate: "31/01/2023",
    status: "Paid",
    amount: "55.53",
    subtotal: "50.00",
    taxes: "5.50",
    companyInfo: {
      "company-name": "Awesome Company 2, LLC",
      edb: "1111111111111",
      embs: "111111",
      country: "Macedonia",
      "state-region": "Kumanovo",
      "zip-code": "1300",
      address: "st. JNA no. 64",
      email: "testemail@example.com",
      "phone-number": "+38977888888",
    },
  }),
  createData({
    invoiceId: "INV-0005",
    dateOfIssue: "27/01/2023",
    dueDate: "31/01/2023",
    status: "Canceled",
    amount: "55.53",
    subtotal: "50.00",
    taxes: "5.50",
    companyInfo: {
      "company-name": "Awesome Company 3, LLC",
      edb: "1111111111111",
      embs: "111111",
      country: "Macedonia",
      "state-region": "Kumanovo",
      "zip-code": "1300",
      address: "st. JNA no. 64",
      email: "testemail@example.com",
      "phone-number": "+38977888888",
    },
  }),
  createData({
    invoiceId: "INV-0006",
    dateOfIssue: "27/01/2023",
    dueDate: "31/01/2023",
    status: "Paid",
    amount: "55.53",
    subtotal: "50.00",
    taxes: "5.50",
    companyInfo: {
      "company-name": "Awesome Company, LLC",
      edb: "1111111111111",
      embs: "111111",
      country: "Macedonia",
      "state-region": "Kumanovo",
      "zip-code": "1300",
      address: "st. JNA no. 64",
      email: "testemail@example.com",
      "phone-number": "+38977888888",
    },
  }),
];
// ].sort((a, b) => (a["invoiceId"] < b["invoiceId"] ? -1 : 1));
