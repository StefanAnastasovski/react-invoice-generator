import { PRICE_SIGN } from "@features/Services/constants/constants";
import { BankType, CompanyType, CompanyAddressType } from "types/InvoiceProps";

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
    // "invoice-subtotal": subtotal,
    // "invoice-taxes": taxes,
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

export const formattedBilledToData = (
  customer: CompanyType,
  customerAddress: CompanyAddressType,
  titles: any
) => {
  return {
    subtitle: customer.name,
    address: customerAddress.address,
    zipCode: customerAddress.zipCode,
    city: customerAddress.city,
    country: customerAddress.country,
    cin: {
      title: titles.cin,
      value: customer.cin,
    },
    tin: {
      title: titles.tin,
      value: customer.tin,
    },
  };
};

export const formattedPaymentDetailsData = (
  company: CompanyType,
  bank: BankType,
  bankAddress: CompanyAddressType,
  titles: any
) => {
  return {
    subtitle: bank.name, // bankName
    bankAccount: bank.account,
    zipCode: bankAddress.zipCode,
    city: bankAddress.city,
    country: bankAddress.country,
    cin: {
      title: titles.cin,
      value: company.cin,
    },
    tin: {
      title: titles.tin,
      value: company.tin,
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
    { "rate-item": rateOrItem },
    { quantity },
    { discount },
    { amount },
  ];

  return formattedData;
};

const styling = document.createElement("style");

export const addStyling = () => {
  styling.innerHTML = ` thead tr th:not(:last-child) {
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

export const calculateSummary = (services: any, taxable?: number) => {
  const total = services.reduce(
    (acc: { discount: number; subtotal: number }, item: any) => {
      const { "rate-item": price, quantity, discount } = item;

      if (!price || !quantity || !discount) {
        console.error("ERROR, something went wrong");
        return acc;
      }

      const totalAmountWithoutDiscount = calculateSummarySubtotal(
        price,
        quantity
      );

      const totalDiscount = calculateSummaryDiscount(
        totalAmountWithoutDiscount,
        discount
      );

      const calculatedSubtotal = acc.subtotal + totalAmountWithoutDiscount;
      const calculatedDiscount = acc.discount + totalDiscount;

      return { discount: calculatedDiscount, subtotal: calculatedSubtotal };
    },
    {
      discount: 0,
      subtotal: 0,
    }
  );

  // return subtotal and discount in object => {subtotal: 0, discount: 0}

  return total;
};

export const calculateSummarySubtotal = (price: number, quantity: number) => {
  return Math.ceil(price * quantity);
};

export const calculateSummaryDiscount = (amount: number, discount: number) => {
  const convertedDiscount = discount / 100;
  return Math.ceil(amount * convertedDiscount);
};

export const calculateSummaryTaxable = (amount: number, taxable: number) => {
  const convertedTaxable = taxable / 100;
  return Math.ceil(amount * convertedTaxable);
};

export const calculateSummaryTotalAmount = (summary: any, taxable?: any) => {
  const amount = Math.ceil(summary.subtotal - summary.discount);

  if (!taxable) {
    return amount;
  }

  const taxableAmount = calculateSummaryTaxable(amount, taxable);
  return Math.ceil(amount + taxableAmount);
};
