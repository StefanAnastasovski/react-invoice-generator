import LogoImg from "@images/logo.png";

export const invoiceTemplateTableCellWidth = {
  "row-number": "",
  description: "45%",
  category: "",
  "rate-item": "",
  quantity: "",
  amount: "",
  discount: "",
};

export const invoiceTemplateTitles = [
  "#",
  "Description",
  "Category",
  "Rate/Item",
  "Quantity",
  "Discount(%)",
  "Amount",
];

export const CTAs = {
  print: "Print",
  download: "Download",
  send: "Send",
};

export const invoiceDetails = {
  docInfo: {
    title: "Invoice",
  },
  invoiceNumber: {
    title: "Invoice Number",
    value: "OLD230001",
  },
  invoiceFrom: {
    title: "Invoice from",
    company: "Stefan Anastasovski",
    address: "st. JNA no. 64",
    zipCode: "1300",
    city: "Kumanovo",
    country: "Macedonia",
  },
  contactInfo: {
    title: "Contact",
    phone: {
      title: "Phone:",
      value: "+38977888888",
    },
    email: {
      title: "Email:",
      value: "stefan@mail.com",
    },
    website: {
      title: "Website:",
      value: "www.stefananastasovski.com",
    },
  },
  invoiceLogo: {
    image: LogoImg,
    alt: "Stefan Anastasovski",
  },
  // CIN: Company Identification Number => EMBS
  // TIN: Tax Identification Number => EDB

  billedTo: {
    title: "Billed to",
    address: "st. OKT no. 55",
    zipCode: "1300",
    city: "Kumanovo",
    country: "Macedonia",
    customer: {
      company: "Customer Name",
      cin: { title: "CIN:", value: "4017000000090" },
      tin: { title: "TIN:", value: "7500090" },
    },
  },
  paymentDetails: {
    title: "Payment Details",
    bank: {
      name: "Bank name",
      bankAccount: "210-0011223300-95",
      zipCode: "1300",
      city: "Kumanovo",
      country: "Macedonia",
    },
    company: {
      cin: { title: "CIN:", value: "4017000000073" },
      tin: { title: "TIN:", value: "7500007" },
    },
  },
  notes: {
    title: "Notes:",
  },
  summary: {
    items: [
      {
        id: "si-1",
        title: "Taxable",
        value: "5500.00",
      },
      {
        id: "si-2",
        title: "Additional Charges",
        value: "600.00",
      },
      {
        id: "si-3",
        title: "Discount",
        value: "350.00",
      },
      {
        id: "si-4",
        title: "Subtotal",
        value: "3000.00",
      },
    ],
    total: {
      title: "Total Amount:",
      value: "300000.00",
    },
  },
  invoiceDates: {
    issueDate: {
      title: "Issue Date:",
      value: "02 Feb 2023",
    },
    dueDate: {
      title: "Due Date:",
      value: "02 Aug 2023",
    },
  },
  invoicePO: {
    title: "PO Number:",
    value: "OLD230001",
  },
  signature: {
    signaturePlace: "Signature goes here",
    authorisedSign: "Authorised Sign,",
    authorisedPerson: "Stefan Anastasovski",
  },
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
    amount: "990",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "990",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "990",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "990",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "990",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "990",
  }),
  createData({
    description: "Dell Laptop",
    category: "Laptop",
    rateOrItem: "1100",
    quantity: "2",
    discount: "10",
    amount: "990",
  }),
];
