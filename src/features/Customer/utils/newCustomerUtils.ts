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
