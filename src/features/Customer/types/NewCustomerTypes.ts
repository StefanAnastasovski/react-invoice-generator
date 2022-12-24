import { FormikValues } from "formik";
import { Theme } from "@mui/material";

export interface NewCustomerCompProps {
  primaryButtonText: string;
  secondaryButtonText: string;
  deleteButtonText?: string;
  customerList?: NewCustomerProps[];
  shouldEditCustomer?: boolean;
  customerData?: FormikValues;
  onClickPrimary?: () => void;
  onClickSecondary?: () => void;
  handleDelete?: (v: string | number) => void;
  editCustomer?: (v: any) => void;
  addNewCustomer?: React.Dispatch<any>;
}

export type NewCustomerProps = {
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

export type FormikResProps = {
  [x: string]: any;
};

export type NewCustomerRenderFieldProps = {
  formik: any;
  style: any;
  theme: Theme;
  inputRef: React.MutableRefObject<any>;
};

export type NewCustomerSchemaMessageProps = {
  fieldName: string;
  noOfCharacters: number;
  characterOperator: "length" | "min" | "max";
  isNumber?: boolean;
};
