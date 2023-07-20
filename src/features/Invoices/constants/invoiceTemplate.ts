import LogoImg from "@images/logo.png";

export const invoiceTemplateTableCellWidth = {
  "row-number": "5%",
  description: "45%",
  category: "15%",
  "rate-item": "10%",
  quantity: "5%",
  amount: "10%",
  discount: "5%",
};

export const invoiceTemplateTitles = [
  "#",
  "Description",
  "Category",
  "Rate/Item",
  "Quantity",
  "Discount",
  "Amount",
];

export const invoiceCreateTemplateTitles = [
  "#",
  "Description",
  "Category",
  "Rate/Item",
  "Quantity",
  "Discount",
  "Amount",
  "Actions",
];

export const CTAs = {
  print: "Print",
  download: "Download",
  send: "Send",
};

export const invoiceSender = {
  company: {
    name: "Stefan Anastasovski",
    tin: "4017000000073",
    cin: "7500007",
  },
  companyAddress: {
    address: "st. JNA no. 64",
    zipCode: "1300",
    city: "Kumanovo",
    country: "Macedonia",
  },
  contact: {
    phoneNumber: "+38977888888",
    email: "stefan@mail.com",
    website: "www.stefananastasovski.com",
  },
  invoiceLogo: {
    image: LogoImg,
    alt: "Oloid Solutions",
  },
  bank: {
    name: "Bank name",
    account: "210-0011223300-95",
    // zipCode: "1300",
    // city: "Kumanovo",
    // country: "Macedonia",
  },
  bankAddress: {
    address: "st. Okt no. 102",
    zipCode: "1300",
    city: "Kumanovo",
    country: "Macedonia",
  },
  invoiceNumber: "OLD230001",
  taxable: 0,
  authorizedSignature: "Stefan Anastasovski",
};

export const invoiceDetails = {
  docInfo: {
    title: "Invoice",
  },
  invoiceNumberTitle: "Invoice Number",
  invoiceNumber: {
    title: "Invoice Number",
    value: "OLD230001",
  },
  invoiceFromTitle: "Invoice from",
  contactTitles: {
    title: "Contact",
    phone: "Phone:",
    email: "Email:",
    website: "Website:",
  },
  invoiceLogo: {
    image: LogoImg,
    alt: "Stefan Anastasovski",
  },
  // CIN: Company Identification Number => EMBS
  // TIN: Tax Identification Number => EDB
  billedToTitle: "Billed to",
  billedTo: {
    title: "Billed to",
    address: "st. OKT no. 55",
    zipCode: "1300",
    city: "Kumanovo",
    country: "Macedonia",
    customer: {
      company: "Customer Name",
      cin: { title: "CIN:", value: "7500090" },
      tin: { title: "TIN:", value: "4017000000090" },
    },
  },
  paymentDetailsTitle: "Payment Details",
  cinTitle: "CIN",
  tinTitle: "TIN",
  notesTitle: "Notes:",
  summary: {
    summaryTaxableTitle: "Taxable",
    summarySubtotalTitle: "Subtotal",
    summaryDiscountTitle: "Discount",
    summaryTotalAmountTitle: "Total Amount",
  },
  invoiceDateTitles: {
    issueDateTitle: "Issue Date:",
    dueDateTitle: "Due Date:",
  },
  PONumberTitle: "PO Number:",
  authorizedSignatureTitle: "Authorized Signature,",
  signaturePlaceTitle: "Signature goes here",
  authorizedPerson: "Stefan Anastasovski",
};

function createData({
  description,
  category,
  rateOrItem,
  quantity,
  discount,
  amount,
}: any) {
  return {
    description: description,
    category: category,
    "rate-item": rateOrItem,
    quantity: quantity,
    discount: discount,
    amount: amount,
  };
}

export const invoiceDetailsData = [
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "1980",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "1980",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "1980",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "1980",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "1980",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "1980",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "1980",
  }),
];

export const invoiceNewItemField = [
  {
    id: "description",
    name: "description",
    type: "text",
    label: "Descripton",
    value: "",
    placeholder: "Marketing Strategy",
    isRequired: true,
    icon: null,
    isIcon: false,
    ariaLabel: `toggle something`,
  },
  {
    id: "category",
    name: "category",
    type: "select",
    label: "Category",
    value: "Paid Media",
    placeholder: "Paid Media",
    isRequired: true,
    icon: null,
    isIcon: false,
    ariaLabel: `toggle something`,
  },
  {
    id: "rate-item",
    name: "rate-item",
    type: "number",
    label: "Rate/Item",
    value: "",
    placeholder: "$1100",
    isRequired: true,
    icon: null,
    isIcon: false,
    ariaLabel: `toggle something`,
  },
  {
    id: "quantity",
    name: "quantity",
    type: "number",
    label: "Quantity",
    value: "",
    placeholder: "2",
    isRequired: true,
    icon: null,
    isIcon: false,
    ariaLabel: `toggle something`,
  },
  {
    id: "discount",
    name: "discount",
    type: "number",
    label: "Discount",
    value: "",
    placeholder: "10",
    isRequired: true,
    icon: null,
    isIcon: false,
    ariaLabel: `toggle something`,
  },
  {
    id: "amount",
    name: "amount",
    type: "number",
    label: "Amount",
    value: "",
    placeholder: "$1980",
    isRequired: true,
    icon: null,
    isIcon: false,
    ariaLabel: `toggle something`,
  },
];
