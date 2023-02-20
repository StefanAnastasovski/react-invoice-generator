import { PRICE_SIGN } from "@features/Services/constants/constants";

const getFormattedCollapseData = (collapseData: any) => {
  return {
    // titleLeft: collapseData?.prop1?.title,
    // titleRight: collapseData?.prop2?.title,
    // collapseDataLeft: collapseData?.prop1?.items,
    // collapseDataRight: collapseData?.prop2?.items,
  };
};

const returnAmount = (price: number) => {
  return `${PRICE_SIGN} ${price}`;
};

export const getFormattedInvoiceData = ({ details }: any) => {
  const {
    "invoice-id": invoiceId,
    "invoice-date-of-issue": dateOfIssue,
    "invoice-due-date": dueDate,
    "invoice-status": status,
    "invoice-amount": amount,
    "invoice-subtotal": subtotal,
    "invoice-taxes": taxes,
    "invoice-company-info": companyInfo,
  } = details;

  const rowId = invoiceId;
  const collapseData = getCollapseData(details);
  //   const formattedAddress = {
  //     address: `${address}, ${stateRegion}, ${zipCode} - ${country}`,
  //   };
  const companyName = companyInfo["company-name"];
  const formattedCollapseData = getFormattedCollapseData(collapseData);
  const totalAmount = returnAmount(amount);
  const formattedData: any = [
    { "company-name": companyName },
    { "invoice-id": invoiceId },
    { "invoice-amount": totalAmount },
    { "invoice-date-of-issue": dateOfIssue },
    { "invoice-due-date": dueDate },
    { "invoice-status": status },
  ];

  return {
    formattedData,
    rowId,
    collapseData: formattedCollapseData,
  };
};

// type DbKeysProps = { [x: string]: string };

// type InvoiceFieldProps = {
//   id: string;
//   label: string;
//   placeholder: string;
//   name: string;
//   type: string;
//   dbKey: string;
//   isRequired: boolean;
// };

const getCollapseData = (data: any) => {
  return {
    prop1: {
      title: "title",
      items: [
        {
          id: "id-1",
          title: "item-title",
          text: data.something,
        },
      ],
    },
  };
};

export const formattedBilledToData = (data: any) => {
  return {
    title: data.title,
    subtitle: data.customer.company,
    address: data.address,
    zipCode: data.zipCode,
    city: data.city,
    country: data.country,
    cin: {
      title: data.customer.cin.title,
      value: data.customer.cin.value,
    },
    tin: {
      title: data.customer.tin.title,
      value: data.customer.tin.value,
    },
  };
};

export const formattedPaymentDetailsData = (data: any) => {
  return {
    title: data.title,
    subtitle: data.bank.name,
    bankAccount: data.bank.bankAccount,
    zipCode: data.bank.zipCode,
    city: data.bank.city,
    country: data.bank.country,
    cin: {
      title: data.company.cin.title,
      value: data.company.cin.value,
    },
    tin: {
      title: data.company.tin.title,
      value: data.company.tin.value,
    },
  };
};

export const getFormattedInvoiceTemplateData = ({ details }: any) => {
  const {
    description,
    category,
    "rate-item": rateOrItem,
    quantity,
    amount,
    discount,
  } = details;

  const formattedData = [
    { description },
    { category },
    { rateOrItem },
    { quantity },
    { discount },
    { amount },
  ];

  return formattedData;
};

const styling = document.createElement("style");

export const addStyling = () => {
  styling.innerHTML = 
  ` thead tr th:not(:last-child) {
      border-right: 1px solid black !important;
    }
    div.invoice-print-container {
      width: 605px !important;
      margin: "0mm 0mm",

    }
    div.invoice-signature-container {
      flex: 1 !important;
    }
    p, td, th {
      color: black !important;
      border-color: black !important;
      font-size: 12px !important;
    }`;
  document.head.appendChild(styling);
};

export const resetStyling = () => {
  document.head.removeChild(styling);
};

export const getPrintStyle = ({
  pageSize,
  margin,
}: {
  pageSize: string;
  margin?: string;
}) => {
  return `
    @page { size: ${pageSize};  margin: ${margin || "0mm"}; }
    @media print {
      thead tr th:not(:last-child) {
        border-right: 1px solid black !important;
      }
      div.invoice-print-container {
        height: 100vh !important; // fit for 1 page and it depends on no. of pages
        // padding: 24px 24px !important;
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
};
