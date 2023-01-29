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
