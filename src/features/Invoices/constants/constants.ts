export const INVOICE_TABLE_COL_SPAN = 9;

export const EMPTY_TABLE_INOVICE_ROW_HEIGHT = 57;

export const NEW_COMPANY_DETAILS_INITIAL_VALUE = {
  "company-name": "",
  cin: "",
  tin: "",
  address: "",
  "zip-code": "",
  city: "",
  country: "",
  "phone-number": "",
  email: "",
  website: "",
  "bank-name": "",
  "bank-account": "",
};

export const INVOICE_ARIA_LABEL = {
  ariaCollapse: "expand row",
  selectCheckbox: "select invoice",
};

export const PRINT_PAGE_SIZE = {
  auto: "auto",
  a4: "A4",
};

export const PRINT_PAGE_DIMENSIONS = {
  sizeA4: {
    width: "6.2in",
    height: "8.7in",
  },
  sizeLetter: {
    width: "6.3in",
    height: "8.2in",
  },
  sizeExecutive: {
    width: "5.4in",
    height: "7.8in",
    fontSize: "12px",
  },
};

export const printStyle = `
@page { size: ${PRINT_PAGE_SIZE.a4};  margin: 0mm; }
@media print {
  thead tr th:not(:last-child) {
    border-right: 1px solid black !important;
  }
  div.invoice-print-container {
    height: 100vh !important; // fit for 1 page and it depends on no. of pages
    padding: 24px 24px !important;
  }
  div.invoice-signature-container {
    flex: 1 !important;
  }
  p, td, th{
    color: black !important;
    border-color: black !important;
    font-size: 12px !important;
  }
}`;
