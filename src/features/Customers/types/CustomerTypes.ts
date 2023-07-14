import { FormikValues } from "formik";
import { Theme } from "@mui/material";
import { TableActionsProps } from "types/components/TableProps";

export interface CustomerCompProps {
  primaryButtonText: string;
  secondaryButtonText: string;
  deleteButtonText?: string;
  tableData?: CustomerProps[];
  shouldEdit?: boolean;
  isNew?: boolean;
  existingItemData?: FormikValues;
  onClickPrimary?: () => void;
  onClickSecondary?: () => void;
  handleDelete?: (v: string | number) => void;
  editItem?: (v: any) => void;
  addNewItem?: React.Dispatch<any>;
}

export interface CustomerProps {
  address: string;
  email: string;
  "bank-account"?: string;
  "company-name": string;
  "phone-number": string;
  tin: string | number;
  cin: string | number;
  country: string;
  "state-region": string;
  "zip-code": string | number;
}

export interface TableCustomerProps {
  address: string;
  email: string;
  bankAccount?: string;
  companyName: string;
  phoneNumber: string;
  tin: string | number;
  cin: string | number;
  country: string;
  stateRegion: string;
  zipCode: string | number;
}

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
