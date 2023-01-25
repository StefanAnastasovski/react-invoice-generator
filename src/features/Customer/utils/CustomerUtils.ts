export const getCustomerValues = (
  newCustomerFields: NewCustomerFieldProps[],
  inputRef: React.MutableRefObject<any>
) => {
  const obj: DbKeysProps = {};
  const dbKeys: DbKeysProps = getDbKeys(newCustomerFields);
  getFieldNames(newCustomerFields).forEach((fieldName: string) => {
    obj[dbKeys[fieldName]] = inputRef?.current?.[fieldName]?.value || "";
  });
  return obj;
};

export const getFieldNames = (newCustomerFields: NewCustomerFieldProps[]) =>
  newCustomerFields.map((item: NewCustomerFieldProps) => item.name);

export const getDbKeys = (newCustomerFields: NewCustomerFieldProps[]) =>
  newCustomerFields.reduce(
    (acc: DbKeysProps, currValue: NewCustomerFieldProps) => ({
      ...acc,
      [currValue.name]: currValue.dbKey,
    }),
    {}
  );

const getFormattedCollapseData = (collapseData: any) => {
  return {
    titleLeft: collapseData?.contact?.title,
    titleRight: collapseData?.bankAccount?.title,
    collapseDataLeft: collapseData?.contact?.items,
    collapseDataRight: collapseData?.bankAccount?.items,
  };
};

export const getFormattedCustomerData = ({ details }: any) => {
  const {
    edb,
    embs,
    "company-name": companyName,
    address,
    "zip-code": zipCode,
    "state-region": stateRegion,
    country,
    // "bank-account": bankAccount,
    // email,
    // "phone-number": phoneNumber,
  } = details;

  const rowId = details.edb;
  const collapseData = getCollapseData(details);
  const formattedAddress = {
    address: `${address}, ${stateRegion}, ${zipCode} - ${country}`,
  };

  const formattedCollapseData = getFormattedCollapseData(collapseData);

  const formattedData = [{ companyName }, formattedAddress, { edb }, { embs }];

  return {
    formattedData,
    rowId,
    collapseData: formattedCollapseData,
  };
};

type DbKeysProps = { [x: string]: string };

type NewCustomerFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  name: string;
  type: string;
  dbKey: string;
  isRequired: boolean;
};

const getCollapseData = (data: any) => {
  return {
    contact: {
      title: "Contact",
      items: [
        {
          id: "cci-1",
          title: "Email",
          text: data.email,
        },
        {
          id: "cci-2",
          title: "Phone Number",
          text: data["phone-number"],
        },
      ],
    },
    bankAccount: {
      title: "Bank Account",
      items: [
        {
          id: "cbi-1",
          title: "Bank Account",
          text: data["bank-account"],
        },
      ],
    },
  };
};
