import { FormikValues } from "formik";
import { TableActionsProps } from "types/components/TableProps";

export interface ServiceCompProps {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  deleteButtonText?: string;
  serviceList?: ServiceProps[];
  shouldEdit?: boolean;
  isNew?: boolean;
  serviceData: FormikValues;
  onClickSecondary?: () => void;
  handleDelete?: (v: string | number) => void;
  editService?: (v: any) => void;
  addNewService?: React.Dispatch<any>;
}

export type ServiceProps = {
  "service-name": string;
  "service-description": string;
  "service-price-unit": number;
  "service-price-hour": number;
  "service-tax": number;
  "service-category": string;
  sku: string;
  "service-image": any; // change
};

export type TableServiceProps = {
  service: string;
  description: string;
  pricePerUnit: number;
  pricePerHour: number;
  tax: number;
  category: string;
  sku: string;
  image: any;
};

export interface ServiceDataProps {
  id: string;
  label: string;
  name: string;
  type: string;
  dbKey: string;
  isRequired: boolean;
  placeholder?: string;
  items: { [key: string]: string }[] | null;
}

export type ImageProps = {
  path: string;
  lastModified: number | string;
  lastModifiedDate: any;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

export interface ServiceTableDetailProps extends TableActionsProps {
  tableData: any;
}
