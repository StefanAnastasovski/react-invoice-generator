import { FormikValues } from "formik";
import { CollapseId, HandleCollapseAndOnSelectClick, PageAndRowsPerPage, SelectedRows } from "types/components/TableProps";

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

export interface NewServiceCompProps {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  deleteButtonText?: string;
  serviceList?: NewServiceProps[];
  shouldEdit?: boolean;
  serviceData: FormikValues;
  onClickSecondary?: () => void;
  handleDelete?: (v: string | number) => void;
  editService?: (v: any) => void;
  addNewService?: React.Dispatch<any>;
}

export type NewServiceProps = {
  "service-name": string;
  "service-description": string;
  "service-price-unit": number;
  "service-price-hour": number;
  "service-tax": number;
  "service-category": string;
  "service-sku": string;
  "service-image": any; // change
};

export type ImageProps = {
  path: string;
  lastModified: number | string;
  lastModifiedDate: any;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
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

export interface ServiceTableHeadProps extends SelectedRows {
  rowsPerPageData: TableServiceProps[];
  onSelectAllClick: () => void;
}

export interface ServiceTableDetailProps
  extends SelectedRows,
    PageAndRowsPerPage,
    HandleCollapseAndOnSelectClick,
    CollapseId {
  tableData: TableServiceProps[];
}
