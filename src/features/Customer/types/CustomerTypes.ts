import { FormikValues } from "formik";
import { Theme } from "@mui/material";
import { TableActionsProps } from "types/components/TableProps";

export interface CustomerCompProps {
  primaryButtonText: string;
  secondaryButtonText: string;
  deleteButtonText?: string;
  customerList?: CustomerProps[];
  shouldEdit?: boolean;
  isNew?: boolean;
  customerData?: FormikValues;
  onClickPrimary?: () => void;
  onClickSecondary?: () => void;
  handleDelete?: (v: string | number) => void;
  editCustomer?: (v: any) => void;
  addNewCustomer?: React.Dispatch<any>;
}

export type CustomerProps = {
  address: string;
  email: string;
  "bank-account"?: string;
  "company-name": string;
  "phone-number": string;
  edb: string | number;
  embs: string | number;
  country: string;
  "state-region": string;
  "zip-code": string | number;
};

export type TableCustomerProps = {
  address: string;
  email: string;
  bankAccount?: string;
  companyName: string;
  phoneNumber: string;
  edb: string | number;
  embs: string | number;
  country: string;
  stateRegion: string;
  zipCode: string | number;
};

export type NewCustomerSchemaMessageProps = {
  fieldName: string;
  noOfCharacters: number;
  characterOperator: "length" | "min" | "max";
  isNumber?: boolean;
};

export type NewCustomerRenderFieldProps = {
  formik: any;
  style: any;
  theme: Theme;
  inputRef: React.MutableRefObject<any>;
};

export interface CustomerTableDetailProps extends TableActionsProps {
  tableData: any;
}
